import React from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from "./ItemCount";

const onAdd = (contador) => {
  console.log("Agrega al Carrito la cantida de ", contador);
};
const ItemDetail = ({ id, name, description, img, stock, price }) => {
  const initial = 0;
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(-1) //vuelve una posicion para atras
  }
  return (

    <div className="d-flex flex-wrap m-5 justify-content-center">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="mt-5 mb-5">
            <img src={img} className="img-thumbnail rounded d-block" ></img>

          </div>
        </div>
        <div className="col justify-content-center mt-5 mb-5">
          <h1 className="h2">{name} </h1>
          <p>
            {description}
          </p>
          <h4>Precio = {price} $</h4>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
      </div>
      <div className="mt-5 mb-5">
        <button className="btn btn-primary" onClick={handleNavigate}>Volver</button>
      </div>
    </div>



  )
}

export default ItemDetail


