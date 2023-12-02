import React, { useState, useEffect } from "react";
 import "./filtros.css"

 function Todos() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchDatos = async () => {
            try {
                const response = await fetch("https://65577ba4bd4bcef8b612bc04.mockapi.io/producto");
                const datos = await response.json();
                
                setProductos(datos)
                
                setLoading(false);
            } catch (error) {
                console.log(error)
            }
        }
        fetchDatos();
    }, [])
    if (loading) {
        return <p>Cargando...</p>;
    }
   
    return (
        <>
            <div className="info">
                <h3>¡ Amplia variedad !</h3>
            </div>

            <div className="contenedor">
                { productos
                .map((prod) => (
                    <div key={prod.id}
                        className="card" style={{ width: "14rem" }}>
                        <img src={prod.foto} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">{prod.categoria}</p>
                            <a href="#" className="btn btn-warning">
                               Ver
                            </a>
                        </div>
                    </div>
                ))}

            </div>

        </>
    )
}
export default Todos;