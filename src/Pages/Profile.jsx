import React from 'react'
import '../components/Profile.css'
import qincho1 from '../img/qincho1.jpg'

const Profile = () => {
  return (
    <div>
        <div className="perfil">
        <h1>PERFIL</h1>
        <img src={qincho1} alt="" />
        <p>usuario</p>
        <h2>Julanito</h2>
        <div className="linea"></div>
        <p>Contacto</p>
        <h2>########</h2>
        <div className="linea"></div>
        <h2>nose que dice</h2>
        </div>
        <div className="contenido">
          <h1>RESERVAS</h1>
        </div>
      </div>
  );
};

export default Profile;
