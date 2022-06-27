import React from "react";
import Item from "./Item/Item";

const ItemList = ({items}) => {
    

    const lista = items.map((item) =>
        <li className="d-flex justify-content-around">
            <Item item={item}/>
        </li>
    )

    return (
        <div className="shadow-lg bg-light p-3 rounded producto">
            {lista}
        </div>
    )
}

export default ItemList