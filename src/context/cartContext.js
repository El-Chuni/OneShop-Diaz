import React, { createContext, useState } from "react";

export const carrito = createContext({});
const { Provider } = carrito;

const ContextoCompras = ({children}) => {

    
    const [contenido, setContenido] = useState([]);

    const existeEnElCarrito = (item) => {
        if (contenido.find((producto) => producto.id === item.id)) {
            return true
        }else{
            return false
        }
    }

    const llenarCarrito = (productoParaCarrito) =>{
        
        if(existeEnElCarrito(productoParaCarrito)){

            const actualizarCarrito = contenido.map((prod) => {

                if(prod.id === productoParaCarrito.id){

                    return {...prod, cantidad: prod.cantidad + productoParaCarrito.cantidad}

                }else{

                    return prod

                }

            })

            setContenido(actualizarCarrito)

        }else{

            setContenido([...contenido, productoParaCarrito])
        }
        
        console.log(contenido)
    }

    const sacarDelCarrito = (id) => {
        setContenido(contenido.filter(producto => producto.id !== id));
    }

    const cantidadTotal = () =>{
        return contenido.reduce((acc, item)=> acc += item.cantidad, 0)

    }
    const totalCarrito = () => {
        return contenido.reduce((acc, item)=> acc += item.cantidad * item.precio, 0)
    }

    const resetearCarrito = () => {
        setContenido([])
    }


    return (
        <Provider value={{contenido, llenarCarrito, sacarDelCarrito, existeEnElCarrito, totalCarrito, resetearCarrito, cantidadTotal}} >
            {children}
        </Provider>
    )


}


export default ContextoCompras;