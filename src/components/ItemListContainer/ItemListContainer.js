import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount/ItemCount.js";
import posterLuffy from "../media/posterLuffy.jpg";

const ItemListContainer = ({frase}) => {
    
    return (
        <section className="d-flex flex-column p-5">
            <span>{frase}</span>
            <div className="shadow-lg bg-light p-3 rounded producto">
                <li className="d-flex justify-content-around">
                    <img src={posterLuffy} />
                    <p className="align-middle">Poster "Se Busca" de Luffy (Post-WCI)</p>
                    <ItemCount stock={6} añadido={0} porAñadir={0} className="align-middle" />
                </li>
            </div>
        </section>
    )
}

export default ItemListContainer