import React, { useEffect, useState } from 'react'
import { getProducts } from '../../mocks/FakeApi'
import ItemDetail from './ItemDetail'
import Loading from './Loading'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({}); //inicializacion de un obejto vacio
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        getProducts
            .then((res) => setProductDetail(res.find((item)=> item.id === '03'))) //seteo el producto'''))))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);
    return (

        <div>
            {loading ? <Loading /> :  <ItemDetail productDetail={productDetail}/>} 
        </div>
    )
}

export default ItemDetailContainer