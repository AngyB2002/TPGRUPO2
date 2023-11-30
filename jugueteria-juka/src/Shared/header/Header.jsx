import React from 'react'
import './Header.css';
import Navbar from '../navbar/Navbar';
import logo from '../../assets/logo.png'
import MyImg from '../MyImg/MyImg';
import { Link } from 'react-router-dom';

export default function Header(){
  return(
    <div className='header'>
      <div className='centerElement'><MyImg src={logo} altura="50" ancho="80" alt="Logo compania"/></div>
      <div><Navbar></Navbar></div>
      <div className='centerElement'><button className='button-login'><Link to="/login">Login</Link></button></div>
    </div>
  )
};