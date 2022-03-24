import React from "react"

import product1 from '../../assets/images/ollaRandom.png'; //coloque la imagen desde aca porque no me la este referenciando desde el itemListContainer.jsx
const Item = ({ product }) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={product1} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <p className="card-text">{product.name}</p>
                    <p className="card-text">{product.description}</p>
                </div>
            </div>
        </div>
    )
}
export default Item;