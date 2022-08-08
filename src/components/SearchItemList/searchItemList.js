import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ContainerItemList from "./ContainerItemList/containerItemList";

const SearchItemList = () => {

    const [carga, setCarga] = useState(true)
    const [espera, setEspera] = useState(false)
    const [items, setItems] = useState ([])
    const [resultado, setResultado] = useState ([])

    const {searchId} = useParams();

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

        let filtrarItems = items.filter((producto) => producto.producto.toLowerCase().startsWith(searchId.trim().toLowerCase()));
        setResultado(filtrarItems);

        setTimeout(
            setEspera(true)
        , 2000)
    },[searchId])

    


    //Muestra los resultados de tu busqueda
    return (
        <section className="d-flex flex-column p-5">
            {!espera ? 
            <span>Espere un segundo...</span>
            :<ContainerItemList resultado={resultado}/>
            }
        </section>
    )
}

export default SearchItemList