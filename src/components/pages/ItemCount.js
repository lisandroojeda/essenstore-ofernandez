import React, { useState, useEffect } from "react";
import { DistributeVertical } from "react-bootstrap-icons";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const click = (tipo) => {
    if (tipo === "suma") {
      if (contador < stock && contador >= 0) {
        setContador(contador+1);
      } else {
        return;
      }
    }
    if (tipo === "resta") {
      if (contador <= stock && contador >= 1) {
        setContador(contador-1);
      } else {
        return;
      }
    }
  };

  const addToCart = (contador) => {
    onAdd(contador);
  };

  return (
    <div>
      <div>
        <h2> Imagen del Producto </h2>
        <p>{contador}</p>
        <button onClick={() => click("suma")}>Sumar</button>
        <button onClick={() => click("resta")}>Restar</button>
      </div>
      <div>
          <button onClick={() =>addToCart(contador)}>Agregar al Carrito</button>
      </div>
    </div>
  );
};
export default ItemCount;
