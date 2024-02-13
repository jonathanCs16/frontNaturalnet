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

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.addEventListener("resize", detectSize);
    };
  }, [windowDimesion.innerWidth]);

  return (
    <div className='flex items-center w-full px-4 justify-around bg-slate-500'>
      <Link to={"/"} className='text-white font-semibold text-x1 p-2'>
      <img src='/frontNaturalnet/src/img/lofo.png'></img>
      </Link>
      {
        windowDimesion.innerWidth > 768 ?
          links.map(l => (
            <Link 
            className="text-x1 text-white font-semiboul" 
            to={l.link} 
            key={l.id}
            >
              {l.text}
            </Link>
          )) :
          isMenuOpen && links.map(l => (
              <Link 
              className="text-x1 text-white font-semiboul" 
              to={l.link} 
              key={l.id}
              >
                {l.text}
              </Link>
            ))
      }
      {!isMenuOpen ? (
        <AiOutlineMenu
          size={24}
          color='#f2f2f2'
          onClick={() => setMenuOpen(true)}
        />
      ) : (
        <AiOutlineClose
          size={24}
          color='#f2f2f2'
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );  
};

export default NavBar