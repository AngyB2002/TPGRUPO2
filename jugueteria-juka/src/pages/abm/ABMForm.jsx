import React, { useState, useEffect } from 'react';
import './ABMStyle.css';

const API_URL = 'https://65577ba4bd4bcef8b612bc04.mockapi.io/producto';

const ABMForm = ({ actualizarProductos }) =>{
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    categoria: '',
    edad: '',
    foto: '',
  });

  const [productoEditando, setProductoEditando] = useState(null);

  useEffect(() =>{
    const fetchProductos = async () =>{
      try{
        const response = await fetch(API_URL);
        const datos = await response.json();
        setProductos(datos);
      } catch (error){
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProductos();
  }, []);
  
  const handleAgregarProducto = async () =>{
    try{
      const response = await fetch(API_URL,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoProducto),
      });

      if (!response.ok){
        throw new Error('Error al agregar producto');
      }

      const productoAgregado = await response.json();
      setProductos([...productos, productoAgregado]);
      setNuevoProducto({ nombre: '', categoria: '', edad: '', foto: '' });

      actualizarProductos(productoAgregado);
    } catch (error){
      console.error('Error al agregar producto:', error);
    }
  };

  const handleEliminarProducto = async (id) =>{
    try{
      const response = await fetch(`${API_URL}/${id}`,{
        method: 'DELETE',
      });

      if (!response.ok){
        throw new Error('Error al eliminar producto');
      }

      const productosFiltrados = productos.filter((prod) => prod.id !== id);
      setProductos(productosFiltrados);

      actualizarProductos();
    } catch (error){
      console.error('Error al eliminar producto:', error);
    }
  };

  const handleEditarProducto = (producto) =>{
    setProductoEditando(producto);
    setNuevoProducto({
      nombre: producto.nombre,
      categoria: producto.categoria,
      edad: producto.edad,
      foto: producto.foto,
    });
  };

  const handleCancelarEdicion = () =>{
    setProductoEditando(null);
    setNuevoProducto({ nombre: '', categoria: '', edad: '',foto: '' });
  };

  const handleGuardarEdicion = async () =>{
    try{
      const response = await fetch(`${API_URL}/${productoEditando.id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoProducto),
      });

      if (!response.ok){
        throw new Error('Error al editar producto');
      }

      const productoActualizado = await response.json();
      const productosActualizados = productos.map((prod) =>
        prod.id === productoActualizado.id ? productoActualizado : prod
      );

      setProductos(productosActualizados);
      setProductoEditando(null);
      setNuevoProducto({ nombre: '', categoria: '', edad: '', foto: '' });

      actualizarProductos();
    } catch (error){
      console.error('Error al editar producto:', error);
    }
  };

  return(
    <div className="abm-container">
      <h2 className='tituloABM'>ABM PRODUCTOS</h2>
      <div className="form-container">
        <h3>{productoEditando ? 'Editar Producto' : 'Agregar Nuevo Producto'}</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={nuevoProducto.nombre}
          onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })}
        />

        <input
          type="text"
          placeholder="Categoría"
          value={nuevoProducto.categoria}
          onChange={(e) => setNuevoProducto({ ...nuevoProducto, categoria: e.target.value })}
        />

        <input
          type="number"
          placeholder="Edad"
          value={nuevoProducto.edad}
          onChange={(e) => setNuevoProducto({ ...nuevoProducto, edad: parseInt(e.target.value, 10) })}
        />

        <input
          type="text"
          placeholder="URL de la Foto"
          value={nuevoProducto.foto}
          onChange={(e) => setNuevoProducto({ ...nuevoProducto, foto: e.target.value })}
        />

        {productoEditando ?(
          <>
            <button className="btn-editar" onClick={handleGuardarEdicion}>
              Guardar Edición
            </button>
            <button className="btn-eliminar" onClick={handleCancelarEdicion}>
              Cancelar Edición
            </button>
          </>
        ) : (
          <button className="btn-agregar" onClick={handleAgregarProducto}>
            Agregar Producto
          </button>
        )}

      </div>
      
      <div className="productos-container">
        <h3>Lista de Productos</h3>
        {productos.map((prod) =>(
          <div key={prod.id} className="producto">
            <p>{prod.nombre}</p>
            <p>{prod.categoria}</p>
            <img src={prod.foto} alt={prod.nombre} />
            <button className="btn-eliminar" onClick={() => handleEliminarProducto(prod.id)}>
              Eliminar
            </button>
            <button className="btn-editar" onClick={() => handleEditarProducto(prod)}>
              Editar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ABMForm;