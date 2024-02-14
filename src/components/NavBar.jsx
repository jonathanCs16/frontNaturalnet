import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { BiLogIn } from "react-icons/bi";
import { TiThMenu } from "react-icons/ti";
import  logo  from '../img/logo.png'


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      
      <div className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <TiThMenu
        color='119F27'
        size={50}
        padding={30}
        background-color='262525'
        />
      </div>
      <img src={logo} alt="" />
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/Qincho">Qincho</NavLink>
        </li>
        <li>
          <NavLink to="/Profile">Perfil</NavLink>
        </li>
        <li>
          <NavLink to="/Add">Agregar</NavLink>
        </li>
      </ul>
    </nav>

  );

};

export default NavBar