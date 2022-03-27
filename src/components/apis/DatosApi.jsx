import React from 'react'

const DatosApi = ({item}) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body">
                <p className="card-text">{item.species}</p>
                <p className="card-text">{item.name}</p>
            </div>
        </div>
    )
}

export default DatosApi