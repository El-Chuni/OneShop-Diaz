import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../../ItemListContainer/ItemCount/ItemCount";
import { carrito } from "../../../context/cartContext";


//Donde se detalla el producto más la opcion de comprar en item
const ItemDetail = ({item}) => {

    const { llenarCarrito } = useContext(carrito)

    //Para poder registrar cuanto vamos a añadir al carrito desde acá
    function onAdd(paraAniadir){
        console.log(paraAniadir);
        console.log(item.id);
        llenarCarrito(item.id, paraAniadir)
    }

    const [compras, setCompras] = useState(0);
    const [aniadido, setAniadido] = useState(false);
    const navegar = useNavigate();

    const añadirItem = () => {
        if (compras<(item.stock)) {
            setCompras(compras + 1);
        }
    }

    const quitarItem = () => {
        if (compras>0) {
            setCompras(compras - 1);
        }
    }

    const añadirAlCarrito = () => {
        onAdd(compras);
        setCompras(0);
        setAniadido(true);
    }

    return (
        <div className="productoDetallado shadow-lg bg-light p-3 rounded">
            <img src={item.img} alt={item.producto}/>
            <div className="d-flex flex-column m-2">
                <h2 className="align-middle">{item.producto}</h2>
                <p className="align-middle">{item.descripcion}</p>
            </div>
            <div className="d-flex flex-column m-2 align-self-end">
                <h4 className="align-middle">ARG$ {item.precio}</h4>
                <p className="align-middle">Queda(n) {item.stock} en stock</p>
                {aniadido ?
                <div className="d-flex flex-column">
                    <button className="bg-secondary rounded my-2 p-2" onClick={() => {navegar('/carrito')}}>Ver tu carrito</button>
                    <button className="bg-secondary rounded my-2 p-2" onClick={() => {navegar('/')}}>Seguir comprando</button>
                </div>
                :<ItemCount compras={compras} añadirItem={añadirItem} quitarItem={quitarItem} añadirAlCarrito={añadirAlCarrito} className="align-middle" />}
            </div>
            
        </div>
    )  
}

export default ItemDetail