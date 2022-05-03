import React from "react"
import Item from "./item/Item"

const ItemList = ({ listProduct }) => {
  return (
    <div className='d-flex flex-wrap mb-5 justify-content-center container'>
      {listProduct.map((product) => <Item product={product} key={product.id} />)}
    </div>
  );
}

export default ItemList;