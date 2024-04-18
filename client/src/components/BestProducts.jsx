import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/BestProducts.css"

const BestProducts = () => {
  const { data } = useSelector((state) => state.products);
  const specificProductIds = [91, 92];

  const specificProducts = data.filter((product) =>
    specificProductIds.includes(product.id_product)
  );

  return (
    <section className="container">
      <article className="best-products">
        {specificProducts.map((product, index) => (
          <div key={index}>
            <p>{product.description}</p>
            <Link>COMPRAR</Link>
            <img src={product.image} alt="" />
          </div>
        ))}
      </article>
    </section>
  );
};

export default BestProducts;
