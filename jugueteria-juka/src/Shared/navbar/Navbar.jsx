import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {

    const [menuAbierto, setMenuAbierto] = useState(false);
    const menuRef = useRef(null);
    const manejarAlternarMenu = () => {
        setMenuAbierto(!menuAbierto);
    };
    const handleClickFuera = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuAbierto(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickFuera);
        return () => {
            document.removeEventListener('mousedown', handleClickFuera);
        };
    }, []);



    return (
        <div className="container-nav">
            <div className="icono-menu" onClick={manejarAlternarMenu}>
                <span className={`material-symbols-outlined ${menuAbierto ? 'abierto' : ''}`}>
                    menu
                </span>
            </div>

            <div ref={menuRef} className={`contenedor-menu ${menuAbierto ? 'activo' : ''}`}>
                <nav className="menu">
                    <ul>
                        <li ><Link to="/">Inicio</Link></li>
                        <li ><Link to="/about">Nosotros</Link></li>
                        <li ><Link to="/Contactanos">Contáctanos</Link></li>
                        <li ><Link to="/todos">Ver todos</Link></li>

                        <li><button className="btn btn-secondary btn-sm dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false"  >
                            Buscar por edad
                        </button>
                            <ul className="dropdown-menu">
                                <li><Link to="/filtro/1">0-3 Meses</Link></li>
                                <li><Link to="/filtro/2">0-6 Meses</Link></li>
                                <li><Link to="/filtro/3">6-12 Meses</Link></li>
                                <li><Link to="/filtro/4">+ 1 Año</Link></li>
                                <li><Link to="/filtro/5">+ 3 Años</Link></li>
                            </ul>
                        </li>
                        <li><button className="btn btn-secondary btn-sm dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false"  >
                            Buscar por categoria
                        </button>
                            <ul className="dropdown-menu">
                                <li><Link to="/filtro/Montessori"> Montessori</Link></li>
                                <li><Link to="/filtro/Didactico">Didacticos</Link></li>
                                <li><Link to="/filtro/Otros">Otros</Link></li>
                            </ul>
                        </li>

                    </ul>
                </nav>

            </div>
        </div>
    );
};
export default NavBar;

