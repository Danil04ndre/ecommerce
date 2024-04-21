import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const NavList = ({ children, setOpen, refNav }) => {
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
              <Link className="nav-link nav-link-inside">Celulares</Link>
            </li>
            <li className="list-inside">
              <Link className="nav-link nav-link-inside">Computadoras</Link>
            </li>
            <li className="list-inside">
              <Link className="nav-link nav-link-inside">Televisores</Link>
            </li>
            <li className="list-inside">
              <Link className="nav-link nav-link-inside">Teclados</Link>
            </li>
            <li className="list-inside">
              <Link className="nav-link nav-link-inside">Laptops</Link>
            </li>
            <li className="list-inside">
              <Link className="nav-link nav-link-inside">Mouses</Link>
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
              <Link className="nav-link nav-link-inside">Muebles</Link>
            </li>
            <li className="list-inside">
              <Link className="nav-link nav-link-inside">
                Electrodomesticos
              </Link>
            </li>
            <li className="list-inside">
              <Link className="nav-link nav-link-inside">Decoracion</Link>
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
      </ul>
    </nav>
  );
};

export default NavList;
