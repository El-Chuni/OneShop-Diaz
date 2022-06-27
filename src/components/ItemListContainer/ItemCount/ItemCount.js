import React, {useState} from "react";

const ItemCount = ({stock, añadido, porAñadir}) => {

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
        porAñadir = compras;
        setCompras(0);
    }

    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-around" id="itemsCarrito">
                    <button onClick={quitarItem}>-</button>
                    <p>{compras}</p>
                    <button onClick={añadirItem}>+</button>
            </div>
            <botton onClick={añadirAlCarrito} className="bg-secondary rounded my-2 p-2">Añadir al carrito</botton>
        </div>
    )
}

export default ItemCount