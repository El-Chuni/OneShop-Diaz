import React, { useContext }  from 'react';
import { carrito } from '../../../context/cartContext'


const CartWidget = () => {

    const { contenido, cantidadTotal } = useContext(carrito)

    return (
        <>
            
            {(contenido.length === 0) ? <></>
            :<>
                <span className="material-icons-outlined bg-light rounded mx-2">add_shopping_cart</span>
                <span className='bg-danger text-white rounded'>{cantidadTotal()}</span>
            </>
            }
        </>
    )
}

export default CartWidget