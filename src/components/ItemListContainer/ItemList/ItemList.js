import React from "react";
import Item from "./Item/Item";

const ItemList = ({items}) => {
    

    const lista = items.map((item) =>
        <li className="shadow-lg bg-light p-3 rounded " key={item.id}>
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