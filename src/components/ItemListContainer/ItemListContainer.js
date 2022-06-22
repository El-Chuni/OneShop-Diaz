import React from "react";
import { useState } from "react";

const ItemListContainer = ({frase}) => {
    
    return (
        <div className="d-flex flex-column">
            <span>{frase}</span>
            <div>
                <li>
                    <p>"Bandera de Luffy (poster)"</p>
                </li>
            </div>
        </div>
    )
}

export default ItemListContainer