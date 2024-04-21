import React from "react";
import { Outlet } from "react-router-dom";
import "../css/Categories.css";
import NavList from "../components/NavList";

const Categories = () => {
  
  return (
    <>
      <section className="categories">
        <NavList />
        <article>
          <Outlet />
        </article>
      </section>
    </>
  );
};

export default Categories;
