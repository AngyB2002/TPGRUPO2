import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Rutas from "./common/Rutas.jsx";
import { Header } from "./Shared/header/Header.jsx";
import { Footer } from "./Shared/footer/Footer.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <div className="header">
      <Header />
    </div>
      <div className="vistas">
        <Rutas />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </BrowserRouter>
  </>
)