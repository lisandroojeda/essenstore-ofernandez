import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import Loading from './Loading'
import product1 from '../../assets/images/ollaRandom.png';
function ItemListContainer() {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const products = [
    { id: '01', name: 'olla1', description: 'con mango', img: {product1} },
    { id: '02', name: 'olla2', description: 'sin mango', img: {product1} },
    { id: '03', name: 'olla3', description: 'cacerola', img: {product1} },
    { id: '04', name: 'olla4', description: 'ollita', img: {product1} },
    { id: '05', name: 'olla5', description: 'sarten', img: {product1} }
  ];
  //generacion de promesa
  const getProducts = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else { reject("Problemas tecnicos"); }
  });
  //siempre que se actualice la vista
  useEffect(() => {
    setLoading(true);
    getProducts
      .then((res) => setListProduct(res)) //seteo los productos
      .catch((error) => console.log(error)) //capturo el error
      .finally(() => setLoading(false)); //detengo el loading
  }, []);
  return (
    <div>
      <h1>Listado de Productos</h1>
      {loading ? <Loading /> : ''}
      <ItemList listProduct={listProduct} />
    </div>
  );
}
export default ItemListContainer;


