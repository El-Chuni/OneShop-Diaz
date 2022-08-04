import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail/ItemDetail.js';
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

//Donde se contiene el detalle del objeto seleccionado
const ItemDetailContainer = () => {
    
    const[item, setItem]= useState({})
    const[carga, setCarga] = useState(true)

    const {productoId} = useParams();

    useEffect(() => {
        const db = getFirestore();

        const loDelFirestore = doc(db, "productos", productoId);
        getDoc(loDelFirestore).then((datosProducto) => {
            setItem({id: datosProducto.id, ...datosProducto.data()});
        })
        .catch((error)=> console.log(error))
        .finally(() => setCarga(false));
    },[productoId])

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer