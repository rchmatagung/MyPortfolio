import React from 'react'
import './footer.css'
import {BsInstagram} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {BsLinkedin} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Rachmat Agung</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/rachmat-agung-ananda-013725173/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/rchmatagung" target="_blank"><FaGithub /></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rachmat Agung Ananda. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer