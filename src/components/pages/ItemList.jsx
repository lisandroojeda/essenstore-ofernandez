import React from "react"
import Item from "./Item"

const ItemList = ({listProduct }) => {
  return (
    <div className = 'd-flex mb-5 justify-content-center '>
            {listProduct.map((product) => <Item product={product} key={product.id}/>)}
    </div>
  );
}

export default ItemList;