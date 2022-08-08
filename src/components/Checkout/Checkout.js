import React, { useContext, useState } from 'react'
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { carrito } from '../../context/cartContext';
import {useNavigate} from 'react-router-dom'

const Checkout = () => {
    const [cliente, setCliente]= useState({})
    const[ordenDeCompra, setOrdenDeCompra]= useState('')
    const navegar = useNavigate()
    const { contenido, totalCarrito, resetearCarrito} = useContext(carrito)

    const handleChange = (e) => {
      setCliente({
        ...cliente,
        [e.target.name] : e.target.value
        
      })
    }
    
      const terminarCompra = () => {
       
        const encargo = {
          cliente,
          items: contenido,
          date: serverTimestamp(),
          total: totalCarrito()
        };
        
        const db = getFirestore();
    
        const coleccionEncargos = collection(db, "encargo");
    
        addDoc(coleccionEncargos, encargo)
        .then((res) =>{
            setOrdenDeCompra(res.id)
            resetearCarrito()
        } )
        .catch((error) => console.log(error))
      }
  return (
    <section className='d-flex flex-column m-2'>
         {!ordenDeCompra ?
          <div className='d-flex flex-column m-2'>
            <p>Ingrese sus datos para terminar:</p>
            <div className='d-flex flex-row m-2'>
                <p>Nombre y apellido:</p>
                <input className='mx-2' type='text' name='nombre' onChange={handleChange} placeholder='Ej.: Monkey D. Luffy'/>
            </div>
            <div className='d-flex flex-row m-2'>
                <p>Telefono:</p>
                <input className='mx-2' type='number' name='telefono' onChange={handleChange} placeholder='Ej.: 2010-1999 (sin guion)'/>
            </div>
            <div className='d-flex flex-row m-2'>
                <p>Mail:</p>
                <input className='mx-2' type='mail' name='mail' onChange={handleChange} placeholder='Ej.: reydelospiratas@hotmail.com'/>
            </div>
            <button onClick={terminarCompra}>Terminar compra</button>
          </div>
        : <>

            <h2>¡Muchas gracias por su compra!</h2>
            <p className='text-center'>(No se lo diremos a la marina)</p>
            <h5>Su codigo de orden: {ordenDeCompra}</h5>
            <button onClick={()=> navegar('/')}>Volver</button>

          </> }
    </section>
  )
}

export default Checkout