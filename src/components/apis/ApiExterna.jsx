import React, { useEffect, useState } from 'react'
import DatosApi from './DatosApi'

const Fetch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((res) => res.json())
            .then((data) => setData(data.results))
            .catch((error) => console.log(error))

    }, [])


    return (
        <div className='d-flex flex-wrap'>
            {data.map((item) => <DatosApi key={item.id} item={item} />)}
        </div>
    )

    }
export default Fetch