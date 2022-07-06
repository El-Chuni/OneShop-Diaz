import React from "react";
import ItemCount from "../../ItemListContainer/ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="productoDetallado shadow-lg bg-light p-3 rounded">
            <img src={item.img} alt={item.producto}/>
            <div className="d-flex flex-column m-2">
                <h2 className="align-middle">{item.producto}</h2>
                <p className="align-middle">{item.descripcion}</p>
            </div>
            <div className="d-flex flex-column m-2 align-self-end">
                <p className="align-middle">ARG$ {item.precio}</p>
                <ItemCount stock={item.stock} añadido={0} porAñadir={0} className="align-middle" />
            </div>
            
        </div>
    )  
}

export default ItemDetail