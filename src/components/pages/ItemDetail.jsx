import React from 'react'

const ItemDetail = ({ productDetail }) => {
  const { name, description, img, price } = productDetail
  return (
    <div className="d-flex flex-wrap m-5 justify-content-center">
      <div className="card" style={{ width: '18rem' }}>
        <h2>{name}</h2>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <p className="card-text">{name}</p>
          <p className="card-text">{description}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail