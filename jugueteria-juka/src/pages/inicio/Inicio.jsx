
import React from "react";
import {Sucursal} from "../../Shared/seccion2/sucursal";
import { Novedades } from "../../Shared/novedades/novedades-slider";
import "./inicio.css";

function Inicio() {
 
  return (
      <div className="seccion1-container">
        <Novedades/>
        <Sucursal/>     
      </div>
   
  )
}

export default Inicio;

