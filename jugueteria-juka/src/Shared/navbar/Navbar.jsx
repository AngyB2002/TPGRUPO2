import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <div>
        <ul className='navbar'>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Sobre nosotros</Link></li>
            <li><Link to="/contactanos">Contactenos</Link></li>
        </ul>
    </div>
  )
}

export default Navbar