import React from 'react'

function MyImg(props){
  return(
    <>
    <img src={props.src} alt={props.alt} height={props.altura} width={props.ancho}/>
    </>
  )
}

export default MyImg