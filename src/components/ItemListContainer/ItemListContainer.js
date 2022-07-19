import React, { useEffect } from "react";
import { useState } from "react";
import { infoItems } from "../../mocks/productos";
import ItemList from "./ItemList/ItemList.js";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

//El contenedor de la lista de los objetos a la venta
const ItemListContainer = ({frase}) => {
    
    //const[carga, setCarga] = useState(true)
    const [items, setItems] = useState ([])
    const {categoriaId} = useParams();

    useEffect(() => {
        //infoItems
        //.then((res) => {
        //    if (categoriaId){
        //        setItems(res.filter((item) => item.categoria ===  categoriaId))
        //    }else{
        //        setItems(res)
        //    }
        //})
        //.catch((error)=> console.log(error))
        //.finally(() => setCarga(false))

        const db = getFirestore();
        if (categoriaId){
            const loDelFirestore = query(collection(db, "productos"), where("categoria", "==", categoriaId));
            getDocs(loDelFirestore).then((datosProducto) => {
                setItems(datosProducto.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            });
        }else{
            const loDelFirestore = collection(db, "productos");
            getDocs(loDelFirestore).then((datosProducto) => {
                setItems(datosProducto.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            });
        }
        
        
    },[categoriaId])

    return (
        <section className="d-flex flex-column p-5">
            <span>{frase}</span>
            <ItemList items={items}/>
        </section>
    )
}

export default ItemListContainer