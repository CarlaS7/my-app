import React from 'react'
import Brc from './Brc.png'
const NavBar = () => {
  return (
    <nav className='NavBar'>
        <img className='brc' src={Brc} alt="brc" />

        <a href="aboutme">About me</a>
        <a href="/contact">Contact</a>
        <a href="#footer">Redes</a>
    </nav>
  )
}

export default NavBar