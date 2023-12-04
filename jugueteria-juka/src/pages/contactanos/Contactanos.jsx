import React, { useState } from 'react';
import './Contactanos.css';
import linkedin from '../../assets/linkedin.png';
import MyImg from '../../Shared/MyImg/MyImg';


export  function Contactanos(){
  const redSocial ={
    id: 1,
    altura: '60',
    ancho: '60',
    alt: 24,
    img: linkedin,
    enlace: 'https://www.linkedin.com/in/juanma-arias',
  };

  const estadoInicial ={
    nombre: '',
    apellido: '',
    telefono: '',
    mail: '',
    consulta: '',
  };

  const [formData, setFormData] = useState(estadoInicial);

  const manejarCambio = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const manejarEnvio = (e) =>{
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    limpiarFormulario();
  };

  const limpiarFormulario = () =>{
    setFormData(estadoInicial);
  };

  return(
    <div className='contenedorContactanos'>
      <div>
        <hr />
        <ul className='redes'>
          <li key={redSocial.id}>
            <a href={redSocial.enlace} target="_blank" rel="noopener noreferrer">
              <MyImg src={redSocial.img} altura={redSocial.altura} ancho={redSocial.ancho} alt={redSocial.alt} />
            </a>
          </li>
        </ul>
      </div>
      <form onSubmit={manejarEnvio} className='formularioContacto'>
        <label className='labelForm' htmlFor='nombre'>
          Nombre
        </label>
        <input
          className='inputForm'
          type='text'
          name='nombre'
          id='nombre'
          value={formData.nombre}
          onChange={manejarCambio}
        />

        <label className='labelForm' htmlFor='apellido'>
          Apellido
        </label>
        <input
          className='inputForm'
          type='text'
          name='apellido'
          id='apellido'
          value={formData.apellido}
          onChange={manejarCambio}
        />

        <label className='labelForm' htmlFor='telefono'>
          Telefono
        </label>
        <input
          className='inputForm'
          type='text'
          name='telefono'
          id='telefono'
          value={formData.telefono}
          onChange={manejarCambio}
        />

        <label className='labelForm' htmlFor='mail'>
          Mail
        </label>
        <input
          className='inputForm'
          type='email'
          name='mail'
          id='mail'
          value={formData.mail}
          onChange={manejarCambio}
        />

        <label className='labelForm' htmlFor='consulta'>
          Consulta
        </label>
        <textarea
          className='textAreaForm'
          name='consulta'
          id='consulta'
          cols='30'
          rows='10'
          value={formData.consulta}
          onChange={manejarCambio}
        ></textarea>

        <div className='btnEnviarContenedor'>
          <button type='submit' className='btn-enviar'>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
export default Contactanos;