import React, {useState} from "react";

//La interfaz para añadir cosas al carrito
const ItemCount = ({stock, añadido, onAdd}) => {

    const [compras, setCompras] = useState(0);

    const añadirItem = () => {
        if (compras<(stock-añadido)) {
            setCompras(compras + 1);
        }
    }

    const quitarItem = () => {
        if (compras>0) {
            setCompras(compras - 1);
        }
    }

    const añadirAlCarrito = () => {
        onAdd(compras);
        setCompras(0);
    }

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