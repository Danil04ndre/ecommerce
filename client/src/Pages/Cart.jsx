import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import "../css/Cart.css"
import { addProductToCart, removeOneFromCart, removeProductFromCart } from "../reducers/cartSlice";

const Cart = () => {
  const { productsList, totalCount } = useSelector((state) => state.cart);
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
          <button>FINALIZAR COMPRA</button>
        </div>

      </article>}
    </section>
  );
};

export default Cart;
