import React, {useState} from "react";

const ItemCount = () => {

    const [compras, setCompras] = useState(0);

    let stockActual = 6;

    const añadirItem = () => {
        if (compras<stockActual) {
            setCompras(compras + 1);
        }
    }

    const quitarItem = () => {
        if (compras>0) {
            setCompras(compras - 1);
        }
    }

    return (
        <>
            <p className="rounded"></p>

            <div className="d-flex flex-row justify-content-around" id="itemsCarrito">
                    <button onClick={quitarItem}>-</button>
                    <p>{compras}</p>
                    <button onClick={añadirItem}>+</button>
            </div>
        </>
    )
}

export default ItemCount