import React from "react";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoaderRequest from "../components/LoaderRequest"
import "../css/LatestedProducts.css";

const LatestedProducts = () => {
  const { data } = useSelector((state) => state.products);

  return (
    <section className="container">
      <h2 className="title-home">Ultimos Productos</h2>
      <article className="lasted-products">
        {data.length > 0 ? data.slice(-4).map((product, index) => (
          <Link key={index}>
            <img src={product.image} />
            <p>{product.name}</p>
          </Link>
        )) : <LoaderRequest />}
      </article>
      <ToastContainer />
    </section>
  );
};

export default LatestedProducts;
