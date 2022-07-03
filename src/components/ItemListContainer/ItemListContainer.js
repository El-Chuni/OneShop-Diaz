import React, { useEffect } from "react";
import { useState } from "react";
import { listaItems } from "../../mocks/productos";
import ItemList from "./ItemList/ItemList.js";

const ItemListContainer = ({frase}) => {
    
    const promesaDeTiempo = new Promise((resolve, reject) =>
        setTimeout(() => {
            let seActivoElTimeout = true;
            if (seActivoElTimeout) {
                resolve(listaItems)
            }else{
                reject("Esto no se ejecutó como se esperaba.")
            }
        }, 2000)
    )

    useEffect(() => {
        promesaDeTiempo
        .then((res) => setItems(res))
    }, [])

    const [items, setItems] = useState ([])

    return (
        <section className="d-flex flex-column p-5">
            <span>{frase}</span>
            <ItemList items={items}/>
        </section>
    )
}

export default ItemListContainer