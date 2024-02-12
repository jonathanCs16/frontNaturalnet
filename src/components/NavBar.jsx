import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const links = [
  {
    link: '/',
    text: 'Home',
    id: 1,
  },
  {
    link: '/Add',
    text: 'Add',
    id: 2,
  },
  {
    link: '/Qincho',
    text: 'Qincho',
    id: 3,
  },
  {
    link: '/Profile',
    text: 'Profile',
    id: 4,
  },
];

const NavBar = () => {
const [isMenuOpen, setMenuOpen] = useState(false);

const [windowDimesion, setWindowDimension] = useState({
  innerHeight: window.innerHeight,
  innerWidth: window.innerWidth,
});

const detectSize = () => {
  setWindowDimension({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });
};

  useEffect(() =>{
    window.addEventListener("resize", detectSize);
    return () => {
      window.addEventListener("resize", detectSize);
    };
  },[windowDimesion.innerWidth]);

  return (
    <div className='flex w-full px-4 justify-center bg-slate-500'>
      <Link to={"/"} className='text-white font-semibold text-x1 p-2'>
        Logo
      </Link>
      {
        !isMenuOpen ?
        <AiOutlineMenu/>
      }
    </div>
  );
};

export default NavBar