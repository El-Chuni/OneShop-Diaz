import React from "react";
import ItemCount from "../../ItemListContainer/ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div>
            <img src={item.img} alt={item.producto}/>
            <h2 className="align-middle">{item.producto}</h2>
            <p className="align-middle">{item.descripcion}</p>
            <p className="align-middle">ARG$ {item.precio}</p>
            <ItemCount stock={item.stock} añadido={0} porAñadir={0} className="align-middle" />
        </div>
    )  
}

export default ItemDetail