import React, { useContext, useState }  from 'react';
import { carrito } from '../../context/cartContext';
import { ListCart } from './ListCart/ListCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


export const Cart = () => {
    
  const { contenido, totalCarrito, resetearCarrito} = useContext(carrito)

  const {confirmarCompra, setConfirmarCompra} = useState(false)

  const terminarCompra = () => {
    const nombre = document.getElementById('nombreComprador');
    const telefono = document.getElementById('telefonoComprador');
    const mail = document.getElementById('mailComprador');

    const cliente = {nombre, telefono, mail};

    const encargo = {
      cliente: cliente,
      items: contenido,
      total: totalCarrito
    };
    
    const db = getFirestore();

    const coleccionEncargos = collection(db, "encargo");

    addDoc(coleccionEncargos, encargo).then(({ id }) => setOrderId(id));
  }

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
              <button onClick={ () => setConfirmarCompra(true) }>Confirmar compra</button>
            </div>
          </div>
        }
        {(confirmarCompra === true) ?
          <div className='d-flex flex-column m-2'>
            <p>Ingrese sus datos para terminar:</p>
            <div className='d-flex flex-row m-2'>
                <p>Nombre y apellido:</p>
                <input id='nombreComprador'>Ej.: Monkey D. Luffy</input>
            </div>
            <div className='d-flex flex-row m-2'>
                <p>Telefono:</p>
                <input id='telefonoComprador'>Ej.: 2010-1999 (sin guion)</input>
            </div>
            <div className='d-flex flex-row m-2'>
                <p>Mail:</p>
                <input id='mailComprador'>Ej.: reydelospiratas@hotmail.com</input>
            </div>
            <button onClick={terminarCompra}>Terminar compra</button>
          </div>
        : <></> }
        
      </section>
    </>

    
  )
}
