import React from "react";
import ItemCount from "../../ItemListContainer/ItemCount/ItemCount";

//Donde se detalla el producto más la opcion de comprar en item
const ItemDetail = ({item}) => {
    //Para poder registrar cuanto vamos a añadir al carrito desde acá
    function onAdd(evt){
        console.log(evt)
    }

    return (
        <div className="productoDetallado shadow-lg bg-light p-3 rounded">
            <img src={item.img} alt={item.producto}/>
            <div className="d-flex flex-column m-2">
                <h2 className="align-middle">{item.producto}</h2>
                <p className="align-middle">{item.descripcion}</p>
            </div>
            <div className="d-flex flex-column m-2 align-self-end">
                <h4 className="align-middle">ARG$ {item.precio}</h4>
                <p className="align-middle">Queda(n) {item.stock} en stock</p>
                <ItemCount stock={item.stock} añadido={0} onAdd={onAdd} className="align-middle" />
            </div>
            
        </div>
    )  
}

export default ItemDetail