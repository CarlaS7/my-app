import React from 'react'
import logo from './logo.png'

const NavBar = () => {
  return (
    <nav className='NavBar'>
        <img className='logo' src={logo} alt="brc" />

        <a href="aboutme">Nosotros</a>
        <a href="/contact">Actividades</a>
        <a href="#footer">Contactame</a>
    </nav>
  )
}

export default NavBar