import React , {useState} from "react";
import CartWidget from "./CartWidget/CartWidget.js";
import {Link} from "react-router-dom";

//Lo que nos permite navegar en el sitio, cada Link hace que aparezcan objetos de una categoria en particular
const NavBar = () => {
    const [busqueda, setBusqueda]= useState('')

    const handleChange = (e) => {
        setBusqueda(e.target.value)
    }

    return (
        <nav className='barraPrincipal navbar navbar-expand-sm fixed-top bg-dark'>
            <div className="container-fluid">
                <button className="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to={'/'}>Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Articulos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to={`/categoria/ropa`}>Ropa</Link></li>
                                <li><Link className="dropdown-item" to={`/categoria/accesorios`}>Accesorios</Link></li>
                                <li><Link className="dropdown-item" to={`/categoria/volumenes`}>Volumenes</Link></li>
                                <li><Link className="dropdown-item" to={`/categoria/otros`}>Otros</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to={`/busqueda`}>Buscar</Link>
                        </li>
                    </ul>
                    <li>
                        <Link to='/carrito'>
                            <CartWidget />
                        </Link>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default NavBar