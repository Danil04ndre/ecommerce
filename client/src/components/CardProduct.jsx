import React, { useEffect } from "react";
import "../css/CardProduct.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../reducers/cartSlice";
const CardProduct = ({ product }) => {
  let { name, image, price, description, sub_category } = product;


  let params = useParams();

  let category = params.category;
  let subcategory = sub_category.toLowerCase();

  const dispatch = useDispatch();
  if(params.subcategory) {
    subcategory = params.subcategory
  } 
  let formattedName = name.toLowerCase().replace(/ /g, '-');

  const handleAddToCart = (e) => {
    e.preventDefault();

    dispatch(addProductToCart(product));
  }
  return (
    <Link to={`/categoria-producto/${category}/${subcategory}/${formattedName}`} className="card">
      <div className="image-card">
        <img src={image}/>
      </div>
      <div className="info-card">
        <h4>{name} </h4>
        <p className="price">S/ {price}</p>
        <p className="description">{description}!</p>
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </Link>
  );
};

export default CardProduct;
