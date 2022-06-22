import React from "react";
import ItemCount from "./ItemCount/ItemCount.js";

const CartWidget = () => {
    return (
        <>
            <span className="material-icons-outlined bg-light rounded">add_shopping_cart</span>
            <ItemCount />
        </>
    )
}

export default CartWidget