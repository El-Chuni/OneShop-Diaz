import React, { useEffect, useState } from "react";
import { infoItems } from "../../mocks/productos";
import ItemDetail from './ItemDetail/ItemDetail.js';
import { useParams } from "react-router-dom";

//Donde se contiene el detalle del objeto seleccionado
const ItemDetailContainer = () => {
    
    const[item, setItem]= useState({})
    const[carga, setCarga] = useState(true)

    const {productoId} = useParams();

    useEffect(() => {
        infoItems
        .then((res) => setItem(res.find((producto) => producto.id ===  Number(productoId))))
        .catch((error)=> console.log(error))
        .finally(() => setCarga(false))
    },[productoId])

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer