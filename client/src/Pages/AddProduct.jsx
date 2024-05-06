import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { notify } from "../helpers/toastify";
import { ToastContainer } from "react-toastify";
import "../css/AddProduct.css";

const initialAddProduct = {
  id_product: null, // esta propiedad es para evaluar si esta nulo al actualizar el producto, para crear un nuevo producto no tiene nada que ver
  name: "",
  category: "",
  sub_category: "",
  image: null,
  description: "",
  price: "",
  stock: "",
};  

const AddProduct = ({ dataToEdit, getAddedProducts,setModalOpen}) => {
  const [formAddProduct, setFormAddProduct] = useState(initialAddProduct);
  const [imagePreview, setImagePreview] = useState(null);
  const { token, id } = useSelector((state) => state.user);

  useEffect(() => {
    if (dataToEdit) {
      setFormAddProduct(dataToEdit);
      if (dataToEdit.image) {
        setImagePreview(dataToEdit.image);
      }
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === "image") {
      const selectedFile = files[0];
      if (selectedFile && selectedFile.type.startsWith('image/')) {
        setFormAddProduct({
          ...formAddProduct,
          image: selectedFile,
        });
        const imageURL = URL.createObjectURL(selectedFile);
        setImagePreview(imageURL);
      } else {
        notify("warn", "Solo archivos de imagen.");
      }
    } else if (name === "sub_category"){
      let category = "";
      if (value === "Celulares" || value === "Computadoras" || value === "Televisores" || value === "Teclados" || value === "Laptops" || value === "Mouses") {
        category = "Tecnologia";
      } else if (value === "Muebles" || value === "Electrodomesticos" || value === "Decoracion") {
        category = "Hogar";
      } else if (value === "Camisas" || value === "Pantalones" || value === "Zapatos") {
        category = "Ropa";
      }
      setFormAddProduct({
        ...formAddProduct,
        category: category,
        sub_category: value,
      });
    } else {
      setFormAddProduct({
        ...formAddProduct,
        [name]: value,
      });
    }
  };

  const handleSubmitAddProduct = async (e) => {
    e.preventDefault();
    const fieldsToCheck = ['name', 'sub_category', 'image', 'description', 'price', 'stock'];
    for (const field of fieldsToCheck) {
      if (!formAddProduct[field]) {
        notify("warn", "Todos los campos deben estar llenados.");
        return;
      }
    }
    const formData = new FormData();
    formData.append("name", formAddProduct.name);
    formData.append("category", formAddProduct.category);
    formData.append("sub_category", formAddProduct.sub_category);
    formData.append("description", formAddProduct.description);
    formData.append("price", formAddProduct.price);
    formData.append("stock", formAddProduct.stock);
    formData.append("image", formAddProduct.image);

    try {
      if (formAddProduct.id_product === null) {
        const res = await fetch(`http://localhost:3000/create-product/${id}`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
            body: formData,
          }),
          json = await res.json();
        console.log(json);

        if(json.productCreated){
          notify("success","Producto Registrado.");
          setFormAddProduct(initialAddProduct);
          setImagePreview(null);
        }
        if (json.messageAuthorized) {
          notify("warn", `${json.messageAuthorized}`);
          return;
        }
        if (!res.ok) {
          throw { status: res.status, statusText: res.statusText };
        }

      } else {
        const res = await fetch(`http://localhost:3000/update-product/${formAddProduct.id_product}`,{
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
          body: formData,
        }),
        json = await res.json();
        
        if(json.update){
          notify("success","Producto actualizado.");
          setFormAddProduct(initialAddProduct);
          setImagePreview(null)
          getAddedProducts();
          setTimeout(() => {
          setModalOpen(false)
          }, 1500);
        }
        if (!res.ok) {
          throw { status: res.status, statusText: res.statusText };
        }
      }
     
    } catch (err) {
      notify(
        "error",
        `${err.status || "Servidor no disponible en este momento,"} ${
          err.statusText || "Intentalo mas tarde."
        }`
      );
    }
  };

  return (
    <>
    <div className="content-add-product" onClick={(e) => e.stopPropagation()}>
      <form className="form-add-product" onSubmit={handleSubmitAddProduct}>
        <h2>{dataToEdit ? "Editar Producto" : "Agregar Producto"}</h2>
        <div>
          <label>Nombre Producto</label>
          <br />
          <input type="text" name="name" onChange={handleChange} value={formAddProduct.name}/>
        </div>
        <div>
          <label>Categoria</label>
          <br />
          <select name="sub_category" onChange={handleChange} value={formAddProduct.sub_category}>
            <option value="" disabled>Seleccione una categoría</option>
            <optgroup label="Tecnologia">
              <option value="Celulares">Celulares</option>
              <option value="Computadoras">Computadoras</option>
              <option value="Televisores">Televisores</option>
              <option value="Teclados">Teclados</option>
              <option value="Laptops">Laptops</option>
              <option value="Mouses">Mouses</option>
            </optgroup>
            <optgroup label="Hogar">
              <option value="Muebles">Muebles</option>
              <option value="Electrodomesticos">Electrodomesticos</option>
              <option value="Decoracion">Decoracion</option>
            </optgroup>
            <optgroup label="Ropa">
              <option value="Camisas">Camisas</option>
              <option value="Pantalones">Pantalones</option>
              <option value="Zapatos">Zapatos</option>
            </optgroup>
          </select>
        </div>
        <div>
          <label htmlFor="product" className="img-product">
            Adjuntar imagen
          </label>
          <input
            type="file"
            id="product"
            name="image"
            onChange={handleChange}
          />
          <div className="content-img-product">
            <img alt="" src={imagePreview} />
          </div>
        </div>
        <div>
          <label className="label-textarea">Descripcion Producto</label> <br />
          <textarea
            name="description"
            id=""
            cols="30"
            rows="5"
            onChange={handleChange}
            value={formAddProduct.description}
          ></textarea>
        </div>
        <div>
          <label>Precio</label>
          <br />
          <input type="number" name="price" onChange={handleChange} value={formAddProduct.price}  />
        </div>
        <div>
          <label>Cantidad</label>
          <br />
          <input type="number" name="stock" onChange={handleChange} value={formAddProduct.stock}  />
        </div>
        <input type="submit" value={dataToEdit ? "Actualizar producto" : "Añadir producto"} />
      </form>
      <ToastContainer />
    </div>
    </>
  );
};

export default AddProduct;
