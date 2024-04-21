import React, { useState } from "react";
import logo from "../assets/logo-2.png";
import { CiSquarePlus } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Spin as Hamburger } from "hamburger-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { unsetUser } from "../reducers/userSlice";
import { readProducts } from "../reducers/adminSlice";
import { useNavigate } from "react-router-dom"
import NavList from "./NavList";

import "../css/Header.css";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { name } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refNav = useRef();
  const refOptionsUser = useRef();

  const handleShowOptionsUser = () => {
    refOptionsUser.current.style.display = "flex";
  };
  const handleHideOptionsUser = () => {
    refOptionsUser.current.style.display = "none";
  };

  const handleLogout = () => {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    dispatch(unsetUser());
    dispatch(readProducts([]))
    navigate("/auth")
  };
  return (
    <header className="header">
      <nav className="nav container">
        <div className="btn-hamburger">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            onToggle={(toggled) => {
              if (toggled) {
                refNav.current.classList.add("pages-active");
              } else {
                refNav.current.classList.remove("pages-active");
                toggled = false;
              }
            }}
            size={20}
            direction="right"
          />
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="pages" ref={refNav}>
          <div className="content-links-desktop">
          <Link to="/">TIENDA</Link>
          <Link to="/categories/technology-products" className="">TECNOLOGIA</Link>
          <Link to="/categories/home-products" className="">HOGAR</Link>
          <Link className="">ROPA</Link>
          </div>
          <div className="content-nav-list">
           <NavList setOpen={setOpen} refNav={refNav}>
            <li className="list-item">
              <Link to="/" className="nav-link">TIENDA</Link>
            </li>
           </NavList>
          </div>
        </div>
        <div className="content-count">
          <div
            className="user"
            onMouseOver={handleShowOptionsUser}
            onMouseOut={handleHideOptionsUser}
          >
            <b>{name}</b>
            <Link to="/auth" className="auth-icon">
              <CiUser/>
            </Link>
            <div className="options" ref={refOptionsUser}>
              {name ? (
                <>
                  <Link to="my-shopping">Mis compras</Link>
                  <button onClick={handleLogout}>Cerrar session</button>{" "}
                </>
              ) : null}
            </div>
          </div>
          <Link to="/admin-panel/add-product">
            <CiSquarePlus />
          </Link>
          <div className="">
            <CiShoppingCart />
            <span className="count">10</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
