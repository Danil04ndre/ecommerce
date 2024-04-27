import React from "react";
import "../css/AdminPanel.css";
import cat from "../assets/cat.png";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const AdminPanel = () => {
  const { email } = useSelector((state => state.user));
  console.log("holaadmin")
  return (
    <>
      <section className="panel-container">
        <article className="panel-options">
          <div className="container-panel-options">
            <div className="data">
              <div className="content-img">
                <img src={cat} alt="profile" />
              </div>
              <p>{email}</p>
            </div>
            <div className="options">
              <span>Navegacion</span>
              <NavLink to="/admin-panel/add-product" className={({isActive}) => isActive ? 'active-panel-link' : null}>Agregar Producto</NavLink>
              <NavLink to="/admin-panel/added-products" className={({isActive}) => isActive ? 'active-panel-link' : null}>Productos agregados</NavLink>
            </div>
          </div>
        </article>

        <article className="panel-form">
          <Outlet />
        </article>
      </section>
    </>
  );
};

export default AdminPanel;
