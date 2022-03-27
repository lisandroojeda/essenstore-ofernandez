import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import Loading from './Loading'
import { getProducts } from '../../mocks/FakeApi'; //siempre que exporto si no es desde el default lo importa con llaves 
import ItemDetailContainer from './ItemDetailContainer'
function ItemListContainer() {
  
const [listProduct, setListProduct] = useState([]);
const [loading, setLoading] = useState(false);
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
      <ItemDetailContainer />
    </div>
  );
}
export default ItemListContainer;


