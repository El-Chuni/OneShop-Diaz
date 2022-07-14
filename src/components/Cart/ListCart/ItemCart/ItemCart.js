import React from "react";
import { useContext } from "react";
import { carrito } from "../../../../context/cartContext";
import close from "../../../media/close.png";

//Se cuentan detalles basicos del producto en venta
const ItemCart = ({producto}) => {

    const {sacarDelCarrito} = useContext(carrito)

    return (
        
        <div className="d-flex flex-row justify-content-around align-items-center producto p-2 m-2">
            <img src={producto.item.img} />
            <p className="align-middle font-weight-bold">{producto.item.producto}</p>
            <div className="d-flex flex-column justify-content-around align-items-center producto p-2 m-2">
                <p className="align-middle">Llevando {producto.cantidad}</p>
                <p className="align-middle">Total:</p>
                <p className="align-middle">ARG$ {producto.item.precio}</p>
            </div>
            <img src={close} id="close" onClick={sacarDelCarrito}></img>
        </div>
    )
}

export default ItemCart