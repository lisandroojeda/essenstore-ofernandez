import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, name, description, img, stock, price }) => {
  const { cart, addItem, isInCart } = useContext(CartContext);

  console.log(cart);

  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(1);
  const handleNavigate = () => {
    navigate(-1); //vuelve una posicion para atras
  };

  const pushCart = () => {
    const itemToAdd = {
      id,
      name,
      price,
      img,
      cantidad,
    };

    addItem(itemToAdd);
  };

  return (
    <div className="d-flex flex-wrap m-5 justify-content-center">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="mt-5 mb-5">
            <img src={img} className="img-thumbnail rounded d-block"></img>
          </div>
        </div>
        <div className="col justify-content-center mt-5 mb-5">
          <h1 className="h2">{name} </h1>
          <p>{description}</p>
          <h4>Precio = {price} $</h4>
          <h4>Stock = {stock}</h4>
        </div>
      </div>
      <div className="mt-5 mb-5">
        {!isInCart(id) ? (
          <ItemCount
            stock={stock}
            cantidad={cantidad}
            setCantidad={setCantidad}
            onAdd={pushCart}
          />
        ) : (
          <Link className="btn btn-success m-4" to="/cart">
            Finalizar Compra
          </Link>
        )}
      </div>
      <div className="mt-5 mb-5">
        <button className="btn btn-primary m-4" onClick={handleNavigate}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
