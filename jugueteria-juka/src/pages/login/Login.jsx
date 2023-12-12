import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './LoginForm.css';

const API_URL = 'https://655e9843879575426b43aa94.mockapi.io/api/v1/usuarios';

const LoginForm = () =>{
  const [datos, setDatos] = useState({
    email: '',
    password: '',
    captchaChecked: false,
  });

  const [alerta, setAlerta] = useState('');
  const navigate = useNavigate(); 

  const manejarCambioDeEntrada = (event) =>{
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const mostrarAlerta = (mensaje) =>{
    setAlerta(mensaje);
    setTimeout(() => {
      setAlerta('');
    }, 2000);
  };

  const verificarUsuario = async (email, contraseña) =>{
    try {
      const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Error al obtener usuarios');
    }

    const usuariosPermitidos = await response.json();

    console.log('Usuarios obtenidos de la API:', usuariosPermitidos);

    return usuariosPermitidos.some(
      (usuario) => usuario.email === email && usuario.contrasena === contraseña
    );
    } catch (error) {
      console.error('Error al verificar usuario:', error);
      throw error;
    }
  };

  const manejarLogin = async () =>{
    try {
      if (datos.email === '' || datos.password === ''){
        return false;
      }

      if (!datos.captchaChecked){
        return false;
      }

      const loginExitoso = await verificarUsuario(datos.email, datos.password);

      if (loginExitoso) {
        mostrarAlerta('Inicio de sesión exitoso.');

        navigate('/abm');
      } else {
        mostrarAlerta('Credenciales de inicio de sesión incorrectas.');
      }

      return loginExitoso;
    } catch (error) {
      console.error('Error al manejar el inicio de sesión:', error);
      return false;
    }
  };

  const enviarDatos = async (e) =>{
    e.preventDefault();

    try{
      await manejarLogin();
    } catch (error){
      console.error('Error al enviar datos:', error);
    }
  };

  return(
    <div className="container">
      <div className="login-container">
        <h2 className="loginTitulo">Iniciar Sesión</h2>
        {alerta && <div className="alerta">{alerta}</div>}
        <form className="login-form" id="login-form" onSubmit={enviarDatos}>

          <label htmlFor="email">
            <i className="fas fa-user"></i>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            value={datos.email}
            onChange={manejarCambioDeEntrada}
            required
            autoComplete="email"
          />

          <label htmlFor="password">
            <i className="fas fa-lock"></i>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            value={datos.password}
            onChange={manejarCambioDeEntrada}
            required
            autoComplete="current-password"
          />

          <div className="captcha-container">
            <input
              type="checkbox"
              id="captcha-checkbox"
              name="captchaChecked"
              checked={datos.captchaChecked}
              onChange={manejarCambioDeEntrada}
              required
            />
            <label htmlFor="captcha-checkbox">No soy un robot</label>
          </div>

          <button type="submit">
            Ingresar
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default LoginForm;