import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Item = ({item}) => {
    const {productoId} = useParams();

    return (
        
        <div className="d-flex flex-column justify-content-around align-items-center producto p-2 m-2">
            <img src={item.img} />
            <p className="align-middle font-weight-bold">{item.producto}</p>
            <p className="align-middle">ARG$ {item.precio}</p>
            <Link to={`/producto/${item.id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item