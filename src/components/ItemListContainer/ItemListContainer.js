import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList/ItemList.js";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

//El contenedor de la lista de los objetos a la venta
const ItemListContainer = () => {
    
    const[carga, setCarga] = useState(true)
    const [items, setItems] = useState ([])
    const {categoriaId} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const loDelFirestore = categoriaId ?
        query(collection(db, "productos"), where("categoria", "==", categoriaId))
        : collection(db, "productos");
        getDocs(loDelFirestore).then((datosProducto) => {
            setItems(datosProducto.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        })
        .catch((error)=> console.log(error))
        .finally(() => setCarga(false));
        
        
        
    },[categoriaId])

    return (
        <section className="d-flex flex-column p-5">
            <ItemList items={items}/>
        </section>
    )
}

export default ItemListContainer