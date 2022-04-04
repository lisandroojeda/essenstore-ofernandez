import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from "./ItemCount";

const ItemDetail = ({ id, name, description, img, stock, price }) => {

  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(1);

  const handleNavigate = () => {
    navigate(-1) //vuelve una posicion para atras
  }
  const pushCart = (cantidad) => {
    
    const itemToAdd = {
      id,
      name,
      price,
      img,
      cantidad
    }
    console.log(itemToAdd)
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
        <ItemCount 
          stock={stock} 
          cantidad = {cantidad}
          setCantidad = {setCantidad}
          onAdd = {pushCart}
        />
      </div>
      <div className="mt-5 mb-5">
        <button className="btn btn-primary" onClick={handleNavigate}>Volver</button>
      </div>
    </div>



  )
}

export default ItemDetail


