import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import "../css/Cart.css"
import { addProductToCart, removeAllProducts, removeOneFromCart, removeProductFromCart } from "../reducers/cartSlice";
import { notify } from "../helpers/toastify";
import { ToastContainer } from "react-toastify";
import LoaderRequest from "../components/LoaderRequest";
import Loader from "../components/Loader";
const Cart = () => {
  const { productsList, totalCount } = useSelector((state) => state.cart);
  const { token, id } = useSelector((state) => state.user);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const delFromCart = (id,all = false) => {
    if(all){
      dispatch(removeProductFromCart(id))
    }else {
      dispatch(removeOneFromCart(id))
    }
  }

  const calculateSubtotal = () => {
    return productsList.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
  };

  
  const handleBuy = async () => {
    setLoader(true);
    let buyProduct = productsList.map(product => {
      return {
      id_product: product.id_product,
      id_user: id,
      unit_price: parseFloat(product.price),
      quantity: product.quantity,
      total: (parseFloat(product.price) * product.quantity),
    }
    })

    try {
      const res = await fetch("http://localhost:3000/buy-product",{
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify(buyProduct),
      }),
      json = await res.json();

      if(json.msgBuy){
        setTimeout(() => {
          setLoader(false);
          notify("success", "Compra Realizada.");
          dispatch(removeAllProducts());
        }, 2000);
       
      }
      if (json.messageAuthorized) {
        setTimeout(() => {
        notify("warn", `${json.messageAuthorized}`);
        setLoader(false)
    
      }, 500);
      return;
      }
      if (!res.ok) {
        throw { status: res.status, statusText: res.statusText };
      }

    } catch (err) {
      notify(
        "error",
        `${err.status || "Servidor no disponible en este momento,"} ${
          err.statusText || "Intentalo mas tarde."
        }`
      );
      setLoader(false);
    }
  }
  return (
    <section className="content-cart-products container">
      {productsList.length > 0 ? <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((product, index) => (
            <tr key={index}>
              <td>
                <div className="cart-info-product">
                  <div className="content-img">
                  <img src={product.image} alt="" />
                  </div>
                  <div className="content-info">
                    <p>{product.name}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="cart-options">
                    <button onClick={() => delFromCart(product.id_product)}><CiSquareMinus /></button>
                    <p>{product.quantity}</p>
                    <button onClick={() => dispatch(addProductToCart(product))}><CiSquarePlus /></button>
                </div>
              </td>
              <td className="price">{(product.price * product.quantity).toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })}</td>
              <td><button onClick={() => delFromCart(product,true)}><CiTrash /></button></td>
            </tr>
          ))}
        </tbody>
      </table> : <p>El carrito esta vacio.</p>}

      {productsList.length > 0 && <article className="sub-total-content">
        <h4>TOTALES DEL CARRITO</h4>
        <div className="sub-total">
          <b>Subtotal</b>
          <span>{calculateSubtotal().toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })}</span>
          <hr />
          <b>Productos</b>
          <span>{totalCount}</span>
          <hr />
          <b>Moneda</b>
          <span>PEN</span>
          <hr />
          <b>TOTAL</b>
          <span>{calculateSubtotal().toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })}</span>
          <button onClick={handleBuy}>{loader ? <Loader /> : "FINALIZAR COMPRA"}</button>
        </div>

      </article>}
      <ToastContainer />
    </section>
  );
};

export default Cart;

