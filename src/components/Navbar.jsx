import React from "react"
import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div id="barraDeNavegacion">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div id="logoChiquito">
                        <a className="navbar-brand" href="inicio.html">
                            <img
                                src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYYs7CW0E-2xDK4xcUovPWPsmjzHXsWt9jqe7r7hANxNlfWxsLL5wqgJWkp45lzMw-NB37H-WSX64a2Iw1HYWnB5LyJAxy3LTE=w1920-h919-rw-v1"
                                alt="Biomap Isotipo" width="45" height="45" />
                        </a>
                    </div>
                    <a id="nombreBarra" className="navbar-brand" href="inicio.html">BIOMAP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="inicio.html">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="que-es-biomap.html">¿Qué es Biomap?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Quienes_somos.html">Sobre Nosotras</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/mapa-general">BOTON DE PRUEBA</Link>
                            </li>
                        </ul>
                        <form className="container-flex justify-content-end">
                            <button id="botonIniciar" className="btn btn-warning me-2" type="button" href="./login/">Iniciar Sesión</button>
                            <button id="botonRegistrar" className="btn btn-sm btn-danger" type="button">Registrarse</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar