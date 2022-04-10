import React, { useEffect, useState } from "react";

const Contact = () => {
    const [isMobile, setIsMobile] = useState(false);
    const checkMobile = () => {
        if (window.visualViewport.width < 552) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(() => {
        checkMobile()

        window.addEventListener('resize', checkMobile) //cada vez que hago una modificacion en pantalla se vuelve a checkear
        return () => {
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    return (
        <div>
            <h1>Hola</h1>
            {isMobile ? <h4>Formulario de Contacto Mobile</h4> : <h4>Formulario de Contacto Desktop</h4>}

        </div>
    )
}
export default Contact
