import React, { useState, useEffect } from "react";
import { DistributeVertical } from "react-bootstrap-icons";

const ItemCount = ({ max = 10,cantidad,setCantidad, onAdd}) => {


  const handleAdd = () => {
     cantidad < max &&  setCantidad(cantidad + 1)
    
  };
  const handleRemove = () => {
    cantidad > 1 &&  setCantidad(cantidad - 1)
    
  }

  return (
    <div>
      <div className="container">
        <h2> Imagen del Producto </h2>
        <button className = "btn btn-primary mx-3" onClick={handleRemove}>-</button>
        <span>{cantidad}</span>
        <button className = "btn btn-primary mx-3" onClick={handleAdd}>+</button>
      </div>
      <br/>
      <button className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};
export default ItemCount;
