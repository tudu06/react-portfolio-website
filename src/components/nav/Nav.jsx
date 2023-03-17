import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {FaUserAstronaut, FaUserCircle} from 'react-icons/fa'
import {MdLaptopChromebook} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" 
      onClick={() => setActiveNav('#')} 
      className={activeNav === '#' ? 'active' : '' }><GoHome /></a>
      <a href="#about" 
      onClick={() => setActiveNav('#about')} 
      className={activeNav === '#about' ? 'active' : '' }><FaUserAstronaut /></a>
      <a href="#experience" 
      onClick={() => setActiveNav('#experience')} 
      className={activeNav === '#experience' ? 'active' : '' }><MdLaptopChromebook /></a>
      <a href="#contact" 
      onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : '' }><FaUserCircle /></a>
    </nav>
  )
}

export default Nav