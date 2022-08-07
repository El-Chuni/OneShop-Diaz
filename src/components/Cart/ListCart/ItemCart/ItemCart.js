import React from "react";
import { useContext } from "react";
import { carrito } from "../../../../context/cartContext";
import close from "../../../media/close.png";

//Se muestra el objeto en el carrito y cuanto quiere llevarse
const ItemCart = ({producto}) => {

    const { sacarDelCarrito } = useContext(carrito)

    return (
        
        <div className="d-flex flex-row justify-content-around align-items-center enCarrito shadow-lg p-3 my-2 rounded">
            <img src={producto.img} alt="imagen-producto" />
            <p className="align-middle font-weight-bold">{producto.producto}</p>
            <div className="d-flex flex-column justify-content-around align-items-center p-2 m-2">
                <div>
                    <strong className="align-middle">Llevando:</strong>
                    <p className="align-middle">{producto.cantidad}</p>
                </div>
                <div>
                    <strong className="align-middle">Total:</strong>
                    <p className="align-middle">ARG$ {producto.precio}</p>
                </div>
            </div>
            <button onClick={() => sacarDelCarrito(producto.id)}><img src={close} alt="close"/></button>
        </div>
    )
}

export default ItemCart