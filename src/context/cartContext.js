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

    const totalCarrito = () => {
        const arrayValorTotal = contenido.map((producto) => producto.precio * producto.cantidad).reduce((partialSum, a) => partialSum + a, 0);
        
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