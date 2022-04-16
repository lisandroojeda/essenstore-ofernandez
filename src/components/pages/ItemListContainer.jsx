import React, { useEffect, useState } from "react";

import ItemList from "./ItemList";
import Loading from "./Loading";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import { collection, getDocs,query,where } from "firebase/firestore";
import { db } from "../../firebase/config";

function ItemListContainer() {


  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  //siempre que se actualice la vista
  useEffect(() => {
    setLoading(true);

    // referencia ,que quiero traer, que coleccionada
    const productsRef = collection(db, "products");

    const q = categoryId ? query(productsRef,where ("category", "==", categoryId)) : productsRef;
    // llaamamos a esa referencia
    getDocs(q)
      .then((resp) => {
        //retorno un objeto compuesto de una promesa conformada por id y todos los datos del firebase con un spread
        const items = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(items);
        setListProduct(items);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);
  return (
    <div>
      <h1>Listado de Productos</h1>
      {loading ? <Loading /> : ""}
      <ItemList listProduct={listProduct} />
    </div>
  );
}
export default ItemListContainer;
