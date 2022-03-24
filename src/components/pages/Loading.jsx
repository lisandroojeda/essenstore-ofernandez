import React from 'react'
import { Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const loading = () => {
    return (
        <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default loading