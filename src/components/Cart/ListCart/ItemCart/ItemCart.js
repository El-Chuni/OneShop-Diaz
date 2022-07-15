import React from "react";
import { useContext } from "react";
import { carrito } from "../../../../context/cartContext";
import close from "../../../media/close.png";

//Se muestra el objeto en el carrito
const ItemCart = (enCarrito) => {

    const {sacarDelCarrito} = useContext(carrito)

    return (
        
        <div className="d-flex flex-row justify-content-around align-items-center enCarrito p-2 m-2">
            <img src={enCarrito.img} alt="imagen-en-carrito" />
            <p className="align-middle font-weight-bold">{enCarrito.producto}</p>
            <div className="d-flex flex-column justify-content-around align-items-center enCarrito p-2 m-2">
                <p className="align-middle">Llevando {enCarrito.cantidad}</p>
                <p className="align-middle">Total:</p>
                <p className="align-middle">ARG$ {enCarrito.precio}</p>
            </div>
            <img src={close} alt="close" className="quitar" onClick={sacarDelCarrito}></img>
        </div>
    )
}

export default ItemCart