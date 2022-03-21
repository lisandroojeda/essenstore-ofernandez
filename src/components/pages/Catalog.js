import React from "react";
import ProductoRandom from "../../assets/images/ollaRandom.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemCount from "./ItemCount";

const stock = 10;
const initial = 0;

const onAdd = (contador) => {
    console.log("Agrega al Carrito la cantida de ", contador);
};


const catalog = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="mt-5 mb-5">
                            <img src={ProductoRandom} className="img-thumbnail rounded d-block" ></img>
                            <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
                        </div>
                    </div>
                    <div className="col justify-content-center mt-5 mb-5">
                        <p>
                            <h1 className="h2">Cacerola 18cm con mango </h1>
                            Estas Cacerolas con mango son ideales para preparaciones
                            de platos pequeños en familias entre 2 y 3 integrantes o como
                            complemento de piezas más grandes ya que en ellas se pueden realizar
                            rellenos o salsas de forma práctica. Poseen una pequeña base,
                            paredes laterales altas y mango lo que facilita el manejo de las piezas.
                            Junto a la Sartén y la Cacerola de 24 cm, permiten resolver cocciones
                            que van desde una entrada o un plato principal hasta un postre. Su uso es
                            muy versátil ya que permite cocinar panes, tortas, carnes, cremas y salsas.
                            Además tienen la opción de incorporar un complemento: Savarín: Para la cocción de flanes, budines, soufflés, etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default catalog;