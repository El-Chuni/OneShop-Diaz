import React from "react";

const Item = ({item}) => {
    return (
        <div className="d-flex flex-column justify-content-around align-items-center producto p-2 m-2">
            <img src={item.img} />
            <p className="align-middle font-weight-bold">{item.producto}</p>
            <p className="align-middle">ARG$ {item.precio}</p>
            <button>Ver detalle</button>
        </div>
    )
}

export default Item