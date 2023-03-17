import React from 'react'
import './footer.css'
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Portfolio</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='http://facebook.com' target="_blank"><BsFacebook /></a>
        <a href='http://instagram.com' target="_blank"><BsInstagram /></a>
        <a href='http://twitter.com' target="_blank"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATER Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer