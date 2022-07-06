import React, { useEffect } from "react";
import { useState } from "react";
import { infoItems } from "../../mocks/productos";
import ItemList from "./ItemList/ItemList.js";
import { useParams } from "react-router-dom";


const ItemListContainer = ({frase}) => {
    
    

    useEffect(() => {
        infoItems
        .then((res) => setItems(res))
        .catch((error)=> console.log(error))
        .finally(() => setCarga(false))
    },[])

    const[carga, setCarga] = useState(true)
    const [items, setItems] = useState ([])
    const {categoriaId} = useParams();

    return (
        <section className="d-flex flex-column p-5">
            <span>{frase}</span>
            <ItemList items={items}/>
        </section>
    )
}

export default ItemListContainer