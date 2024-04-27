import React from "react";
import { Outlet } from "react-router-dom";
import "../css/Categories.css";
import NavList from "../components/NavList";

const Categories = () => {
  return (
    <>
      <section className="categories container">
        <NavList/>
        <article className="products-specific">
          <Outlet />
        </article>
      </section>
    </>
  );
};

export default Categories;
