import React from "react";
import { useContext } from "react";
import { carrito } from "../../../../context/cartContext";
import close from "../../../media/close.png";

//Se muestra el objeto en el carrito
const ItemCart = ({producto}) => {

    const {sacarDelCarrito} = useContext(carrito)

    return (
        
        <div className="d-flex flex-row justify-content-around align-items-center enCarrito p-2 m-2">
            <img src={producto.img} alt="imagen-producto" />
            <p className="align-middle font-weight-bold">{producto.producto}</p>
            <div className="d-flex flex-column justify-content-around align-items-center enCarrito p-2 m-2">
                <p className="align-middle">Llevando {producto.cantidad}</p>
                <p className="align-middle">Total:</p>
                <p className="align-middle">ARG$ {producto.precio}</p>
            </div>
            <button onClick={sacarDelCarrito}><img src={close} alt="close"/></button>
        </div>
    )
}

export default ItemCart