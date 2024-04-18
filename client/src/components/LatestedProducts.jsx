import React, { useEffect, useState } from "react";
import { notify } from "../helpers/toastify";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { readAllProducts } from "../reducers/productsSlice";
import { Link } from "react-router-dom";
import "../css/LatestedProducts.css"
import LoaderRequest from "./LoaderRequest";

const LatestedProducts = () => {
  const { data } = useSelector((state) => state.products);
  const [loaderRequest, setLoaderRequest] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/get-all-products"),
          json = await res.json();

        if (json.data) {
          dispatch(readAllProducts(json.data));
        } else {
          dispatch(readAllProducts([]));
        }

        setLoaderRequest(false);
        if (!res.ok) {
          throw { status: res.status, statusText: res.statusText };
        }
      } catch (err) {
        notify("error",
          `${err.status || "Servidor no disponible en este momento,"} ${
            err.statusText || "Intentalo mas tarde."
          }`
        );
        setLoaderRequest(false);
      }
    };

    getAllProducts();
  }, []);

  return (
    <section className="container">
      <h2 className="title-home">Ultimos Productos</h2>
      {loaderRequest && <LoaderRequest/>}
      <article className="lasted-products">
      {data.slice(-4).map((product, index) => (
        <Link key={index}>
          <img src={product.image}/>
          <p>{product.name}</p>
        </Link>
      ))}
      </article>
      <ToastContainer />
    </section>
  );
};

export default LatestedProducts;
