import React, { createContext, useState } from "react";

export const carrito = createContext({});
const { Provider } = carrito;

const ContextoCompras = ({children}) => {

    const [contenido, setContenido] = useState([]);

    const llenarCarrito = ( id, cantidad ) =>{
        if(contenido.find((producto) => producto.itemId === id)){
            alert("No se puede añadir al carrito porque ya está ahí, si quiere cambiar su cantidad debe quitarlo del carrito primero.")
        }else{
            setContenido(contenido => [...contenido, {itemId: id, cantidad: cantidad}])
        }
    }

    const sacarDelCarrito = (id) => {

    }

    const totalCarrito = () => {

    }

    return (
        <Provider value={{contenido, llenarCarrito, sacarDelCarrito, totalCarrito}} >
            {children}
        </Provider>
    )


}


export default ContextoCompras;