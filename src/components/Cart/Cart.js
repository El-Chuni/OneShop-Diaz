import React, { useContext }  from 'react';
import { carrito } from '../../context/cartContext';
import { ListCart } from './ListCart/ListCart';


export const Cart = () => {
    
  const { contenido, totalCarrito, resetearCarrito, sacarDelCarrito } = useContext(carrito)

  return (
    <>
      <section className='d-flex flex-row m-2'>
        
        {(contenido.length === 0) ?
          <h2>Este carrito está vacio, vuelva a acceder cuando haya decidido que comprar.</h2>
          :
          <>
            <div className='d-flex flex-column m-2'>
                <ListCart />
                
            </div>
            <div className='d-flex flex-column m-2'>
              <p>Total: ARG$ {totalCarrito()}</p>
              <button onClick={resetearCarrito}>Vaciar carrito</button>
            </div>
          </>
        }
        
      </section>
    </>

    
  )
}
