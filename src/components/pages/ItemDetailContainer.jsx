import React, { useEffect, useState } from 'react'
import { getProducts } from '../../mocks/FakeApi'
import ItemDetail from './ItemDetail'
import Loading from './Loading'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({}); //inicializacion de un obejto vacio
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        setLoading(true);
        getProducts
            .then((res) => setProductDetail((res).find((item) => item.id === id))) //seteo el producto'''))))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [id]);
    return (

        <div>
            {loading ? <Loading /> : <ItemDetail {...productDetail} />}
        </div>
    )
}

export default ItemDetailContainer