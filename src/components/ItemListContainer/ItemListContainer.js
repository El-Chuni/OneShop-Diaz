import React, { useEffect } from "react";
import { useState } from "react";
import { infoItems } from "../../mocks/productos";
import ItemList from "./ItemList/ItemList.js";
import { useParams } from "react-router-dom";


const ItemListContainer = ({frase}) => {
    
    const[carga, setCarga] = useState(true)
    const [items, setItems] = useState ([])
    const {categoriaId} = useParams();

    useEffect(() => {
        infoItems
        .then((res) => {
            if (categoriaId){
                setItems(res.filter((item) => item.categoria ===  categoriaId))
            }else{
                setItems(res)
            }
        })
        .catch((error)=> console.log(error))
        .finally(() => setCarga(false))
    },[categoriaId])

    return (
        <section className="d-flex flex-column p-5">
            <span>{frase}</span>
            <ItemList items={items}/>
        </section>
    )
}

export default ItemListContainer