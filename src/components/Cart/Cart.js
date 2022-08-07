import React, { useContext }  from 'react';
import { carrito } from '../../context/cartContext';
import { ListCart } from './ListCart/ListCart';
import {useNavigate} from 'react-router-dom';

export const Cart = () => {
    
  const { contenido, totalCarrito, resetearCarrito} = useContext(carrito)

  const navegarALaIsla = useNavigate()

  //El "(contenido.length === 0)" está para saber si el carrito tiene algo, así decide si mostrar la lista o no.
  //El boton de vaciar carrito hace lo que dice, vacía su contenido sin que nadie compre nada
  //El boton de confirmar compra te envía al Checkout 
  return (
    <>
      <section className='d-flex flex-column m-2'>
        
        {(contenido.length === 0) ?
          <h2>Este carrito está vacio, vuelva a acceder cuando haya decidido que comprar.</h2>
          :
          <div className='d-flex flex-row m-2'>
            <div className='container'>
                <div className='column m-2'>
                  <ListCart />
                </div>
            </div>
            <div className='d-flex flex-column m-2 p-2 bg-light rounded'>
              <strong>Total: </strong>
              <p>ARG$ {totalCarrito()}</p>
              <button className='botonCarrito rounded' onClick={resetearCarrito}>Vaciar carrito</button>
              <button className='botonCarrito rounded' onClick={ () => navegarALaIsla('/checkout') }>Confirmar compra</button>
            </div>
          </div>
        }

      </section>
    </>

    
  )
}
