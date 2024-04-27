import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableBody from "../components/TableBody.jsx";
import AddProduct from "./AddProduct.jsx";
import LoaderRequest from "../components/LoaderRequest.jsx";
import { readProducts } from "../reducers/adminSlice.js";
import "../css/AddedProducts.css";

const AddedProducts = () => {
  const [noServer, setNoServer] = useState(false)
  const [msgToken, setMsgToken] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [loaderRequest, setLoaderRequest] = useState(true)
  const { id, token } = useSelector((state) => state.user);
  const { data } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  console.log("aeaaddedproducsts")
  const getAddedProducts = async () => {
    try {
      const res = await fetch(`http://localhost:3000/read-products-admin/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }), json = await res.json();

      if (json.data) {
        dispatch(readProducts(json.data));
      } else {
        dispatch(readProducts([]));
      }
      if(json.messageAuthorized){
        setMsgToken(json.messageAuthorized);
        setLoaderRequest(false)
        return;
      }

      setLoaderRequest(false)
      if (!res.ok) {
        throw { status: res.status, statusText: res.statusText };
      }
    } catch (err) {
      setNoServer(`${err.status || "Servidor no disponible en este momento,"} ${
        err.statusText || "Intentalo mas tarde."
      }`)
      setLoaderRequest(false)
    }
  };

  useEffect(() => {
    getAddedProducts();
  }, []);

  return (
   <>
    <div className="content-added-products">
      <table>
        <thead>
          <tr>
            <th>ACCIONES</th>
            <th>NOMBRE</th>
            <th>IMAGEN</th>
            <th>CATEGORIA</th>
            <th>SUB CATEGORIA</th>
            <th>DESCRIPCION</th>
            <th>PRECIO</th>
            <th>CANTIDAD</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => <TableBody key={index} data={item} setDataToEdit={setDataToEdit} setModalOpen={setModalOpen} modalOpen={modalOpen} getAddedProducts={getAddedProducts}/>)
          ) : (
            <tr className="no-products"> 
             {noServer ? <td colSpan="8">{noServer}</td> : (loaderRequest ? <td colSpan="8"><LoaderRequest/></td> : <td colSpan="8" >{msgToken ? msgToken : "Aun no has añadido ningun producto."}</td>)}
            </tr>
          )}
        </tbody>
      </table>
    </div>
    <div className={`modal ${modalOpen ? "active" : null}`} onClick={(e) => setModalOpen(false) }>  
      <AddProduct dataToEdit={dataToEdit} getAddedProducts={getAddedProducts} setModalOpen={setModalOpen}/>
    </div>
   </>
  );
};

export default AddedProducts;
