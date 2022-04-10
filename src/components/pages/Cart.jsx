import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
function Cart() {
  const { cart, cartTotal, emptyCart } = useContext(CartContext);

  return (
    <div>
      <div className="container my-5 ">
        <h1>Tu Orden</h1>
        {cart.map((item) => (
          <div key={item.id}>
            <h4>Nombre del producto: {item.name}</h4>
            <h4>Cantidad: {item.cantidad}</h4>
            <h4>Precio total: {item.price * item.cantidad} $</h4>
            <hr></hr>
          </div>
        ))}
      </div>
      <h3>Total: ${cartTotal()}</h3>
      <button className="btn btn-danger m-3" onClick={emptyCart}>
        Cancelar Compra
      </button>
    </div>
  );
}

export default Cart;
