import React, { useEffect, useState } from "react";
import { infoItems } from "../../mocks/productos";
import ItemDetail from './ItemDetail/ItemDetail.js';


const ItemDetailContainer = () => {
    
    const[item, setItem]= useState({})
    const[carga, setCarga] = useState(true)

    useEffect(() => {
        infoItems
        .then((res) => setItem(res.find((producto) => producto.id === 1)))
        .catch((error)=> console.log(error))
        .finally(() => setCarga(false))
    },[])

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer