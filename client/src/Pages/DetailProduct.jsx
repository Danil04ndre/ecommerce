import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import { readDetailProduct } from "../reducers/productsSlice";
import { IoIosArrowForward } from "react-icons/io";
import { addProductToCart } from "../reducers/cartSlice";
import "../css/DetailProduct.css";

const DetailProduct = () => {
  let { category, subcategory, nameproduct } = useParams();
  const { currentProduct } = useSelector((state) => state.products);
  let { name, image, description, price } = currentProduct;
  const dispatch = useDispatch();

  useEffect(() => {
    const getDetailProduct = async () => {
      try {
        const res = await fetch(
            `http://localhost:3000/get-detail-product/${nameproduct}`
          ),
          json = await res.json();

        if (json.data) {
          dispatch(readDetailProduct(json.data[0]));
        }
        if (!res.ok) {
          throw { status: res.status, statusText: res.statusText };
        }
      } catch (err) {
        console.log(err);
      }
    };
    getDetailProduct();
  }, []);

  return (
    <>
      <section className="detail-product container">
      <div className="breadcrumbs">
            <NavLink to="/" className={({isActive}) => isActive ? 'breadcum-active' : null}>Inicio</NavLink>
            <IoIosArrowForward className="op"/>
            <NavLink to={`/categoria-producto/${category}`}>{category} </NavLink>
            <IoIosArrowForward className="op"/>
            <NavLink to={`/categoria-producto/${category}/${subcategory}`} className="op">{subcategory}</NavLink>
            <IoIosArrowForward />
            <NavLink className={({isActive}) => isActive ? 'breadcrum-active' : null}>{nameproduct.toLowerCase().replace(/-/g, ' ')}</NavLink>
          </div>
        <article>
          <div className="content-detail-product">
            <div className="detail-image">
              <img src={image}/>
            </div>
            <div className="detail-info">
              <h4 className="title">{name}</h4>
              <p>Envio gratis</p>
              <p className="price">S/ {price}</p>
              <p className="description">{description}</p>
              <div className="buttons">
                <Link to="/carrito">Ir al carrito</Link>
                <button onClick={() => dispatch(addProductToCart(currentProduct))}>Agregar al carrito</button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default DetailProduct;
