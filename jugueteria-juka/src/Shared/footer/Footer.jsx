import React from 'react';
import './Footer.css'; 
import QRwpp from '../../assets/QRwpp.png'
import MyImg from '../MyImg/MyImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Footer(){
    return(
      <footer className="footer1">
      <div className="contenedor1">
        <div className="columnas">
          <h6>Escanea el QR para consultas rápidas:</h6>
          <MyImg src={QRwpp} altura="100" ancho="100" alt="Logo compania"/>
        </div>

        <div className="columnas">
          <h6>Síguenos en redes sociales:</h6>
          <div className="social-links">
            <a href="https://twitter.com/Usuario" className="link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://facebook.com/Usuario" className="link2" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com/Usuario" className="link3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="columnas">
          <h6>Encuentra nuestro local:</h6>
          <iframe
            title="Localización en Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.6287507924994!2d-60.10194322403832!3d-38.03243354656714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9592310663fcc3c7%3A0xf6d9015cef58a2a7!2sPlaza%2025%20de%20Mayo!5e0!3m2!1ses-419!2sar!4v1701386971212!5m2!1ses-419!2sar"
            width="100"
            height="100"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
        <div className="columnas">
          <div className="datos">
            <p>Desarrollado por Juka  </p>
            <p> &copy; 2023 Juka. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
}