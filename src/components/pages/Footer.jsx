import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container ">
        <div className="row">
          <section className="mb-4">
            <a className="btn  mx-5" href="#!" role="button" style={{ color: "white" }}>
              <BsWhatsapp size={22} />
            </a>
            <a className="btn  mx-5" href="#!" role="button" style={{ color: "white" }}>
              <BsInstagram size={22} />
            </a>
            <a className="btn  mx-5" href="#!" role="button" style={{ color: "white" }}>
              {" "}
              <BsFacebook size={22} />
            </a>
          </section>
        </div>
        <div className="text-center p-3  " style={{ background_color: "rgba(0, 0, 0, 0.2)" }}>
          © 2022 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            Licho
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
