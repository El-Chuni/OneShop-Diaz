import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ContainerItemList from "./ContainerItemList/containerItemList";

const SearchItemList = () => {

    const [carga, setCarga] = useState(true)
    const [items, setItems] = useState ([])
    const [busqueda, setBusqueda]= useState('')
    const [resultado, setResultado] = useState ([])

    const {searchId} = useParams();

    const filtro = (nombreProducto) => {
        let filtrarItems = items.filter((producto) => producto.producto.toLowerCase().startsWith(nombreProducto.trim().toLowerCase()));
        setResultado(filtrarItems)
    }

    //Se filtran cuales productos tienen el nombre que busco
    //Ojo, no es perfecto, hay que ser especifico con las palabras completas, aunque solo es necesaria la primera
    useEffect(() => {
        const db = getFirestore();
        const loDelFirestore = collection(db, "productos");
        getDocs(loDelFirestore).then((datosProducto) => {
            setItems(datosProducto.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        })
        .catch((error)=> console.log(error))
        .finally(() => setCarga(false));
    },[])

    useEffect(() => {
        setResultado(items);
    },[items])

    const handleChange = (e) => {
        setBusqueda(e.target.value)
        filtro(e.target.value)
    }
    


    //Muestra los resultados de tu busqueda
    return (
        <section className="d-flex flex-column p-5">
            <input className="form-control me-2" type='text' name='nombre' onChange={handleChange} placeholder="Busca tu producto..." aria-label="Busca tu producto..." />    
                        
            <ContainerItemList resultado={resultado}/>
            
        </section>
    )
}

export default SearchItemList