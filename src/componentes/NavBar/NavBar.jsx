import React from 'react'
import logo from './logo.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='NavBar'>
        <img className='logo' src={logo} alt="brc" />

        <a href="aboutme">Temporadas</a>
        <a href="/contact">Actividades</a>
        <a href="#info">Datos Interesantes</a>
        <a href="#Promo">Promociones</a>
        <a href="#Footer">Contactanos</a>
    </nav>
  )
}

export default NavBar