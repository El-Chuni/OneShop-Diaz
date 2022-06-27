import React from "react";
import ItemCount from "../../ItemCount/ItemCount";

const Item = ({item}) => {
    return (
        <>
            <img src={item.img} />
            <p className="align-middle">{item.producto}</p>
            <p className="align-middle">ARG$ {item.precio}</p>
            <ItemCount stock={6} añadido={0} porAñadir={0} className="align-middle" />
        </>
    )
}

export default Item