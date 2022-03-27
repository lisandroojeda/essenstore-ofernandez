import React from "react"
const Item = ({ product }) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={product.img} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <p className="card-text">{product.name}</p>
                    <p className="card-text">{product.description}</p>
                </div>
            </div>
        </div>
    )
}
export default Item;