import React from 'react'
import './TituloSection.css'

function TituloSection(props){
  return(
    <div>
        <h1 className='tituloSetion'>{props.titulo}</h1>
    </div>
  )
}

export default TituloSection