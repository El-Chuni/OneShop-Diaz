import React from "react"
import ItemList from "../../ItemListContainer/ItemList/ItemList"

const ContainerItemList = ({resultado}) => {

    return (
        <>
            {(resultado.length != 0) ?
                <>
                    <span> Hay {resultado.length} producto/s que coinciden con tu busqueda:</span>
                    <ItemList items={resultado}/>
                </>
            :<span>No se encuentra el item que busca, intente con otro nombre...</span>}
        </>
    )
}

export default ContainerItemList 