import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Contactanos from '../pages/contactanos/Contactanos'
import Inicio from '../pages/inicio/Inicio';
import About from '../pages/about/About';
import Login from '../pages/login/Login';
function Rutas() {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactanos' element={<Contactanos/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  </div>
  )
}

export default Rutas