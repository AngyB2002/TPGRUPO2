import React from 'react'
import './Header.css';
import logoJUKA2 from '../../assets/logoJUKA2.png'
import MyImg from '../MyImg/MyImg';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

export function Header(){
  return(
  <div className='container-header'>
    <div className='header1'>
      <div className='centerElement'><Navbar></Navbar></div>
      <div className='centerElement2'><button className='button-login'><Link to="/login">Login</Link></button></div>
    </div>
    <div className='header2'>
      <div><MyImg src={logoJUKA2} altura="150" ancho="300" alt="Logo compania"/></div>
    </div>
  </div>
  )
}
export default Header;