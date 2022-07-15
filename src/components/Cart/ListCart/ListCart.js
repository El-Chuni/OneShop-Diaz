import React from "react";
import ItemCart from "./ItemCart/ItemCart";
import { useContext } from "react";
import { carrito } from "../../../context/cartContext";


export const ListCart = () => {

    const {contenido} = useContext(carrito)

    const lista = contenido.map((producto) =>
        <li className="shadow-lg bg-light p-3 rounded my-2" key={producto.id}>
            <ItemCart producto={producto}/>
        </li>
    )

    return (
        <div className="d-flex flex-row justify-content-around flex-wrap">
            {lista}
        </div>
    )

}