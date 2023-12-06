import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./productsDetails.css";

export function PrpductsDetails() {
    const { idProd, categoria } = useParams();
    const [producto, setProducto] = useState([]);
    useEffect(() => {
        const fetchDatos = async () => {
            try {
                const response = await fetch("https://65577ba4bd4bcef8b612bc04.mockapi.io/producto");
                const datos = await response.json();
                const filter = await datos.filter((x) => x.id === idProd);
                setProducto(filter);
                console.log(producto)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDatos();

        // Función de limpieza
        return () => {
            // Realizar limpieza si es necesario
            setProducto([]);
        };

    }, [])

    return (
        <div className="container-details">
            {producto && producto.map((prod) => (
                <div key={prod.id}
                    className="card card-details">
                    <img src={prod.foto} className="card-img-top" alt="..." />
                    <div className="card-body card-contein">
                        <h2 className="card-title">{prod.nombre}</h2>
                        <p className="card-text">{prod.categoria}</p>
                        <h6>{prod.detalles}</h6>
                        <p><b>Precio : $$$</b></p>
                        <button className="btn btn-warning"><Link to={`/filtro/${categoria}`}>Cerrar</Link>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default PrpductsDetails;