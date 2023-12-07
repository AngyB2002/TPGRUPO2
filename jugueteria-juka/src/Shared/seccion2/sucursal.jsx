import React from "react";
import "./sucursal.css"

export const Sucursal = () =>{
    return(
        <div className="seccion2">
            <div className="container-infografia">
                <img src="/Infografía Valores Collage Café y Beige.png" alt="" />
            </div>
            <div className="container-sucursal">
                <h1>¡ Veni a visitarnos !</h1>
                <div className="imagen-sucursal">
                    <img src="/local.jpg" alt="imagen-local"></img>
                </div>
                <div className="direccion">

                    <h3><span className="material-symbols-outlined" >
                        home_pin
                    </span> Av 9 de Julio 456</h3>
                    <h3><span className="material-symbols-outlined">
                        timer
                    </span> En el horario de 8 a 13 hs. y de 17 a 20 hs.</h3>
                </div>
            </div>
        </div>
    )
}
export default Sucursal;