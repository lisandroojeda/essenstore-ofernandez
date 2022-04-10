import React from "react";
import Logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/App">
            <img src={Logo}></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/Abaut">
                  Quienes Somos?
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Sumate">
                  Sumate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Contact">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-none" to="/Catalog">
                  Catalogo
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropDown-toggle active"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                  to="/ItemListContainer"
                >
                  Productos
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Producto/terra">
                      Linea Terra
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Producto/aqua">
                      Line Aqua
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Producto/moca">
                      Linea Moca
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Producto">
                      Todas las Lineas
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
