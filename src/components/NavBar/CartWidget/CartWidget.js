import React, { useContext }  from 'react';
import { carrito } from '../../../context/cartContext'


const CartWidget = () => {

    const { contenido, cantidadTotal } = useContext(carrito)

    return (
        <>
            
            {(contenido.length === 0) ? <></>
            :<>
                <span className="material-icons-outlined bg-light rounded">add_shopping_cart</span>
                <p>{cantidadTotal}</p>
            </>
            }
        </>
    )
}

export default CartWidget