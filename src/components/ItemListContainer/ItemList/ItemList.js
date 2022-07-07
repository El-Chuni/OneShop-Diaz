import React from "react";
import Item from "./Item/Item";

//Muestra lo que hay a la venta
const ItemList = ({items}) => {

    const lista = items.map((item) =>
        <li className="shadow-lg bg-light p-3 rounded my-2" key={item.id}>
            <Item item={item}/>
        </li>
    )

    return (
        <div className="d-flex flex-row justify-content-around flex-wrap">
            {lista}
        </div>
    )
}

export default ItemList