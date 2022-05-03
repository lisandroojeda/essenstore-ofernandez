import React from "react";
import "./Abaut.css";
const abaut = () => {
  return (
    <div className="container abaut">
      <div className="row mt-5">
        <div className="col-md-6">
          <img src="https://i.imgur.com/XqQXZ8l.jpg" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p className="card-text" style={{ textAlign: "right" }}>
            Me llamo Cintia soy nacida en Ingeniero Huergo, soy Psicopedagoga, amo mi profesion. Me
            considero una persona muy activa, siempre tratando de inovar y ponerme metas hace dos
            años arranque como emprendedora Essen, es un camino mu
          </p>
        </div>
      </div>
    </div>
  );
};
export default abaut;
