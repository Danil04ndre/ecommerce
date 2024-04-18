import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2'

const TableBody = ({ data, setDataToEdit, setModalOpen, getAddedProducts}) => {
  const { id_product, name, category, sub_category, image, description, price, stock } =
    data;
  const { token } = useSelector(state => state.user);

  const handleEdit = () => {
    setDataToEdit(data);
    setModalOpen(true);
  };

  const handleDelete = async (id,name) => {
    const result = await Swal.fire({
      title: "¿Desea eliminar?",
      text: `${name}`,
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#DC3545",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar"
    });
    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:3000/delete-product/${id}`,{
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`
          },
          credentials: "include"
        }),
        json = await res.json();
        
        console.log(res,json);
        if(json.delete){
          Swal.fire({
            title: "Eliminado",
            icon: "success",
            showConfirmButton: false,
            timer: 1300,
            customClass: {
              icon: "swal-icon",
            },
          });
         getAddedProducts();
        } else {
          Swal.fire({
            title: `${json.msg}`,
            icon: "error",
            showConfirmButton: false,
            timer: 1300,
            customClass: {
              icon: "swal-icon",
            },
          });
        }
      
      } catch (error) {
        
      }
    } 
 
  }
  return (
    <tr>
      <td className="actions">
        <button onClick={handleEdit} className="edit">
          <FaEdit />
        </button>
        <button onClick={() => handleDelete(id_product,name)} className="delete">
          <RiDeleteBin5Fill />
        </button>
      </td>
      <td>{name}</td>
      <td>
        <div className="content-img-data">
          <img src={image} alt="" />
        </div>
      </td>
      <td>{category}</td>
      
      <td>{sub_category}</td>
     
      <td>{description}</td>
      <td>S/.{price}</td>
      <td>{stock}</td>
    </tr>
  );
};

export default TableBody;
