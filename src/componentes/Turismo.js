import React from 'react';
import '../hojas-de-estilo/Turismo.css';

function Turismo(props) {
  return (
    <div className='contenedor-turismo'>
      <img 
      className='imagen-turismo' 
      src={require(`../imagenes/turismo-${props.imagen}.jpg`)}
      alt='foto de turismo'/>
      <div className='contenedor-texto-turismo'>
        <p className='nombre-turismo'>San Carlos de Bariloche</p>
        <p className='temporada-turismo'>{props.temporada}</p>
        <p className='texto-turismo'>"{props.turismo}"</p>
        </div>
      </div>
  );
}

export default Turismo;