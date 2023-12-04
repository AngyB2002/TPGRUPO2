import React, { useState, useEffect } from "react";
import "./filtros.css";
import { useParams } from 'react-router-dom';//Esto sirve para obtener parametro de la URL de categoria.

 function FiltroCateg() {
    const { categoria } = useParams();

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const fetchDatos = async () => {
            try {
                const response = await fetch("https://65577ba4bd4bcef8b612bc04.mockapi.io/producto");
                const datos = await response.json();

                setProductos(datos);
            } catch (error) {
                console.log(error)
            }
        }
        fetchDatos();
    }, [])

    const prodFiltrados = (categoria) => {
        return productos.filter((prod) => prod.categoria === categoria|| prod.edad===categoria)
    }


    const rango = "";
    const view = {
        "Montessori": { filtro: () => prodFiltrados("Montessori"), rango: "Montessori" },
        "Didactico": { filtro: () => prodFiltrados("Didactico"), rango: "Didactico" },
        "Otros": { filtro: () => prodFiltrados("Otros"), rango: "Otros" },
        "1": { filtro: () => prodFiltrados(1), rango: "0-3 Meses" },
        "2": { filtro: () => prodFiltrados(2), rango: "3-6 Meses" },
        "3": { filtro: () => prodFiltrados(3), rango: "6-12 Meses" },
        "4": { filtro: () => prodFiltrados(4), rango: "+1 Año" },
        "5": { filtro: () => prodFiltrados(5), rango: "+3 Años" }

    }

    const result = view[categoria] ? view[categoria].filtro() : [];
    const rangoMostrado = view[categoria] ? view[categoria].rango : "";

    return (
        <>
            <div className="info">
                <h3>{rangoMostrado} </h3>
            </div>

            <div className="contenedor">
                {result.map((prod) => (
                    <div key={prod.id}
                        className="card">
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
export default FiltroCateg;