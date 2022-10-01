import React from 'react'
import './styles/Footer.scss'
import Logo from './../logo/logo.png'

export const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with Love and <b>React.js</b>
      </span>
    </footer>
  )
}
