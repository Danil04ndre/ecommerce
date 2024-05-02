import React, { useContext, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";

const NavList = ({ children }) => {
  const {setOpen, refNav} = useContext(AppContext);
  const {name} = useSelector(state => state.user);
  const handleShowList = (e) => {
    e.currentTarget.classList.toggle("arrow");
    const menuInside = e.currentTarget.nextElementSibling;

    let height = 0;

    if (menuInside.clientHeight === 0) {
      height = menuInside.scrollHeight;
    }
    menuInside.style.height = `${height}px`;
  };

  useEffect(() => {
    const links = document.querySelectorAll(".list a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        setOpen(false);
        refNav.current.classList.remove("pages-active");
      });
    });
  }, []);

  return (
    <nav className="nav-list">
      <ul className="list">
        {children}
        <li className="list-item">
          <div
            className="list-button list-button-click"
            onClick={handleShowList}
          >
            <span className="nav-link">TECNOLOGIA</span>
            <IoIosArrowForward className="list-arrow" />
          </div>

          <ul className="list-show">
            <li className="list-inside">
              <Link to="/categoria-producto/tecnologia" className="nav-link nav-link-inside link-hidden-desktop">Ver todos los productos</Link>
            </li>
            <li className="list-inside">
              <Link to="/categoria-producto/tecnologia/celulares" className="nav-link nav-link-inside">Celulares</Link>
            </li>
            <li className="list-inside">
              <Link to="/categoria-producto/tecnologia/computadoras" className="nav-link nav-link-inside">Computadoras</Link>
            </li>
            <li className="list-inside">
              <Link to="/categoria-producto/tecnologia/televisores" className="nav-link nav-link-inside">Televisores</Link>
            </li>
            <li className="list-inside">
              <Link to="/categoria-producto/tecnologia/teclados" className="nav-link nav-link-inside">Teclados</Link>
            </li>
            <li className="list-inside">
              <Link to="/categoria-producto/tecnologia/laptops" className="nav-link nav-link-inside">Laptops</Link>
            </li>
            <li className="list-inside">
              <Link to="/categoria-producto/tecnologia/mouses" className="nav-link nav-link-inside">Mouses</Link>
            </li>
          </ul>
        </li>

        <li className="list-item">
          <div
            className="list-button list-button-click"
            onClick={handleShowList}
          >
            <span className="nav-link">HOGAR</span>
            <IoIosArrowForward className="list-arrow" />
          </div>

          <ul className="list-show">
          <li className="list-inside">
              <Link to="/categoria-producto/hogar" className="nav-link nav-link-inside link-hidden-desktop">Ver todos los productos</Link>
            </li>
            <li className="list-inside">
              <Link to="/categoria-producto/hogar/muebles" className="nav-link nav-link-inside">Muebles</Link>
            </li>
            <li className="list-inside">
              <Link to="/categoria-producto/hogar/electrodomesticos" className="nav-link nav-link-inside">
                Electrodomesticos
              </Link>
            </li>
            <li className="list-inside">
              <Link to="/categoria-producto/hogar/decoracion" className="nav-link nav-link-inside">Decoracion</Link>
            </li>
          </ul>
        </li>
        <li className="list-item">
          <div
            className="list-button list-button-click"
            onClick={handleShowList}
          >
            <span className="nav-link">ROPA</span>
            <IoIosArrowForward className="list-arrow" />
          </div>

          <ul className="list-show">
            <li className="list-inside">
              <Link className="nav-link nav-link-inside">Camisas</Link>
            </li>
            <li className="list-inside">
              <Link className="nav-link nav-link-inside">Pantalones</Link>
            </li>
            <li className="list-inside">
              <Link className="nav-link nav-link-inside">Zapatos</Link>
            </li>
          </ul>
        </li>
 
        {name && <li className="list-item list-user">
          <div
            className="list-button list-button-click"
            onClick={handleShowList}
          >
            <FaUser className="list-user-svg"/>
            <span className="nav-link">{name}</span>
            <IoIosArrowForward className="list-arrow" />
          </div>

          <ul className="list-show">
            <li className="list-inside">
              <Link to="/my-shopping" className="nav-link nav-link-inside">Mis compras</Link>
            </li>
            <li className="list-inside">
              <button className="nav-link nav-link-inside">Cerrar session</button>
            </li>
          </ul>
        </li>}
      </ul>
    </nav>
  );
};

export default NavList;
