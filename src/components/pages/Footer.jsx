import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-10">
          <section className="mb-4" >
            <a className="btn  mx-5" href="#!" role="button" style={{color:"white"}}><BsWhatsapp size={50} /></a>
            <a className="btn  mx-5" href="#!" role="button"  style={{color:"white"}}><BsInstagram size={50} /></a>
            <a className="btn  mx-5" href="#!" role="button"  style={{color:"white"}}> <BsFacebook size={50} /></a>
          </section>
        </div>
        <div className="text-center p-3" style={{ background_color: "rgba(0, 0, 0, 0.2)" }}>
          © 2022 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">Licho</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer