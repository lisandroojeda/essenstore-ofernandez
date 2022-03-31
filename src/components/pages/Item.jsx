import React from "react"
import {Link} from "react-router-dom"
const Item = ({ product }) => {
    let id = product.id;
    return (
        <div clasName=" m-3">
            <Link to={'/ItemDetailContainer/'+ id}>
            <button >
                <div className="card border-info m-3" style={{ width: '18rem' }}>
                    <img src={product.img} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                        <p className="card-text">{product.name}</p>
                        <p className="card-text">{product.descriptionShort}</p>
                    </div>
                </div>
            </button>
            </Link>
        </div>
    )
}
export default Item;

