import React from "react";
import Logo from "../../assets/logo/logo.png";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to='/'>
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
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to='/Abaut'>
                  Quienes Somos?
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/Sumate'>Sumate</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/Contact'>
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/Catalog'>
                  Catalogo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/ItemListContainer'>
                  Items
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/CartWidget'><BsCart3 /></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
