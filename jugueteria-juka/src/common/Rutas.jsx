import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ABMForm from '../pages/abm/ABMForm';
import Contactanos from '../pages/contactanos/Contactanos';
import Inicio from '../pages/inicio/Inicio';
import About from '../pages/about/About';
import Login from '../pages/login/Login';
import Todos from '../pages/filtros/todos';
import FiltroCateg from '../pages/filtros/filtroCateg';
import ProductsDetails from '../pages/productDetails/productsDetails';

export function Rutas(){
  return(
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactanos" element={<Contactanos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/abm" element={<ABMForm />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/filtro/:categoria" element={<FiltroCateg />} />
      <Route path="/details/:idProd/:categoria" element={<ProductsDetails />} />
    </Routes>
  );
}

export default Rutas;