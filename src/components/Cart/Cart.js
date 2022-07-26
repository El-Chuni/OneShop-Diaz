import React, { useContext, useState }  from 'react';
import { carrito } from '../../context/cartContext';
import { ListCart } from './ListCart/ListCart';
import {useNavigate} from 'react-router-dom';

export const Cart = () => {
    
  const { contenido, totalCarrito, resetearCarrito} = useContext(carrito)

  const navegarALaIsla = useNavigate()

  return (
    <>
      <section className='d-flex flex-column m-2'>
        
        {(contenido.length === 0) ?
          <h2>Este carrito está vacio, vuelva a acceder cuando haya decidido que comprar.</h2>
          :
          <div className='d-flex flex-row m-2'>
            <div className='d-flex flex-column m-2'>
                <ListCart />
            </div>
            <div className='d-flex flex-column m-2'>
              <p>Total: ARG$ {totalCarrito()}</p>
              <button onClick={resetearCarrito}>Vaciar carrito</button>
              <button onClick={ () => navegarALaIsla('/checkout') }>Confirmar compra</button>
            </div>
          </div>
        }

      </section>
    </>

    
  )
}
