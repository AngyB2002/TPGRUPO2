import { BrowserRouter} from 'react-router-dom';
import './App.css';
import MyFooter from './Shared/footer/Footer';
import Header from './Shared/header/Header';
import React from 'react';
import Rutas from './common/Rutas';

function App(){
  return(
    <div className='contenedorEstructura'>
      <BrowserRouter>
      <Header/>
      <Rutas/>
      </BrowserRouter>
      <MyFooter/>
    </div>
  );
}

export default App;