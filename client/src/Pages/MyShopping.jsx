import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";
import LoaderRequest from "../components/LoaderRequest";
import "../css/MyShopping.css";

const MyShopping = () => {
  const { id, token } = useSelector((state) => state.user);
  const [myProducts, setMyProducts] = useState([]);
  const [msgToken, setMsgToken] = useState(null);
  const [noServer, setNoServer] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
 
    const getProductsBuy = async () => {
      try {
        const res = await fetch(
            `http://localhost:3000/get-products-buy/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              credentials: "include",
            }
          ),
          json = await res.json();
          console.log(json)
          setLoader(false);
        if (json.myProducts) {
          setMyProducts(json.myProducts);
        }
        if (json.messageAuthorized) {
          setMsgToken(json.messageAuthorized);
          return;
        }
        if (!res.ok) {
          throw { status: res.status, statusText: res.statusText };
        }
      } catch (err) {
        setNoServer(`${err.status || "Servidor no disponible en este momento,"} ${
          err.statusText || "Intentalo mas tarde."
        }`)
      }
 
    };
    getProductsBuy();
  }, []);

  return (
    <section className="products-buy">

      <table>
        <thead>
          <tr>
            <th>NOMBRE DE PRODUCTO</th>
            <th>FECHA DE COMPRA</th>
            <th>PRECIO UNIDAD</th>
            <th>CANTIDAD</th>
            <th>TOTAL</th>
            <th>ESTADO DE COMPRA</th>
          </tr>
        </thead>
        <tbody>
          {myProducts.length > 0 ? (
            myProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{new Date(product.date).toLocaleString()}</td>
                <td>
                  {parseFloat(product.unit_price).toLocaleString("es-PE", {
                    style: "currency",
                    currency: "PEN",
                  })}
                </td>
                <td>{product.quantity}</td>
                <td>
                  {parseFloat(product.total).toLocaleString("es-PE", {
                    style: "currency",
                    currency: "PEN",
                  })}
                </td>
                <td>
                  <FaCheck />
                </td>
              </tr>
            ))
          ) : (
            <tr className="no-shopping">
             {noServer ? <td colSpan="6">{noServer}</td> : (loader ? <td colSpan="6"><LoaderRequest/></td> : <td colSpan="8" >{msgToken ? msgToken : "Aun no ha realizado compras."}</td>)}
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default MyShopping;
