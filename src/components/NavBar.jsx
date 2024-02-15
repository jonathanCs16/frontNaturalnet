import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../img/logo.png'
import "./NavBar.css"
import { TiThMenu } from "react-icons/ti";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>

      <img src={logo} alt="" />
      <div className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <TiThMenu className="burguer" />
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/Qincho">Qincho</NavLink>
        </li>
        <li>
          <NavLink to="/Add">Agregar</NavLink>
        </li>
        <li>
          <NavLink to="/Profile">Perfil</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
