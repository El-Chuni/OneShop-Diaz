import React, { createContext, useState } from "react";

export const carrito = createContext({});
const { Provider } = carrito;

const ContextoCompras = ({children}) => {

    const [contenido, setContenido] = useState([]);

    const existeEnElCarrito = (item) => {
        if (carrito.find(producto => producto.item === item)) {
            return true
        }else{
            return false
        }
    }

    const llenarCarrito = ( item, cantidad ) =>{
        
        if(existeEnElCarrito){

            const actualizarCarrito = contenido.map((prod) => {

                if(prod.item === item){

                    return {...prod, cantidad: cantidad + prod.cantidad}

                }else{

                    return prod

                }

            })

            setContenido(actualizarCarrito)

        }else{

            setContenido(contenido => [...contenido, {item: item, cantidad: cantidad}])
        }

        console.log(contenido)
    }

    const sacarDelCarrito = (item) => {
        const paraQuitar = item.target.getAttribute("item")
        setContenido(contenido.filter(producto => producto.item !== paraQuitar));
    }

    const totalCarrito = () => {
        const arrayValorTotal = contenido.map((producto) => producto.item.precio * producto.cantidad).reduce((partialSum, a) => partialSum + a, 0);
        
        return arrayValorTotal;
    }

    const resetearCarrito = () => {
        setContenido([])
    }

    return (
        <Provider value={{contenido, llenarCarrito, sacarDelCarrito, existeEnElCarrito, totalCarrito, resetearCarrito}} >
            {children}
        </Provider>
    )


}


export default ContextoCompras;