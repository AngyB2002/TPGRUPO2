import React from 'react'
import './Header.css';
import logo from '../../assets/logo.png'
import MyImg from '../MyImg/MyImg';
import { Link } from 'react-router-dom';

export  function Header(){
  return(
  <div className='container-header'>
    <div className='header1'>
      <div className='centerElement'><MyImg src={logo} altura="50" ancho="80" alt="Logo compania"/></div>
      <div className='centerElement2'><button className='button-login'><Link to="/login">Login</Link></button></div>
    </div>
    <div className='header2'>
      <h1>ESPACIO DE CANDE</h1>
    </div>
    </div>
  )
}
export default Header;