import React, { createContext, useState } from "react";

export const carrito = createContext({});
const { Provider } = carrito;

const ContextoCompras = ({children}) => {

    const [contenido, setContenido] = useState([{itemId: 0, cantidad: 0}]);

    const llenarCarrito = (contenidoDeOnAdd) =>{
        if (contenido[0].itemId === 0){
            setContenido({itemId: contenidoDeOnAdd.id, cantidad: contenidoDeOnAdd.cantidad})
        }
    };

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