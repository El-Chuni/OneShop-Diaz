import React, { useEffect } from "react";
import { useState } from "react";
import posterLuffy from "../media/posterLuffy.jpg";
import ItemList from "./ItemList/ItemList.js";

const ItemListContainer = ({frase}) => {
    
    const promesaDeTiempo = new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(listaItems)
        }, 2000)
    )

    useEffect(() => {
        promesaDeTiempo
        .then((res) => setItems(res))
    }, [])

    const listaItems = [
        {id: 1, producto: "Poster 'Se Busca' de Luffy (Post-WCI) 40x60cm", precio: 319.99, img: posterLuffy},
        {id: 2, producto: "Poster 'Se Busca' de Luffy (Post-WCI) 80x120cm", precio: 599.99, img: posterLuffy}
    ]

    const [items, setItems] = useState ([])

    return (
        <section className="d-flex flex-column p-5">
            <span>{frase}</span>
            <ItemList items={items}/>
        </section>
    )
}

export default ItemListContainer