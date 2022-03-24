import React from "react"
import Item from "./Item"

const ItemList = ({listProduct }) => {
  return (
    <div>
            {listProduct.map((product) => <Item product={product} key={product.id}/>)}
    </div>
  );
}

export default ItemList;