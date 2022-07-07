import React from "react";
import CartWidget from "./CartWidget/CartWidget.js";
import {Link} from "react-router-dom";

//Lo que nos permite navegar en el sitio, cada Link hace que aparezcan objetos de una categoria en particular
const NavBar = () => {
    return (
        <nav className='barraPrincipal navbar navbar-expand-lg fixed-top bg-dark'>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to={'/'}>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Carrito</a>
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
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    <li>
                        <CartWidget />
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default NavBar