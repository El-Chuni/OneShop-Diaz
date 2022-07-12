import React from "react";

//La interfaz para añadir cosas al carrito
const ItemCount = ({compras, añadirItem, quitarItem, añadirAlCarrito}) => {

    

    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-around" id="itemsCarrito">
                    <button onClick={quitarItem}>-</button>
                    <p>{compras}</p>
                    <button onClick={añadirItem}>+</button>
            </div>
            <button onClick={añadirAlCarrito} className="bg-secondary rounded my-2 p-2">Añadir al carrito</button>
        </div>
    )
}

export default ItemCount