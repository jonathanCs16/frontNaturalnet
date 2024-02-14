import React from 'react'
import "../components/Home.css"
import qincho1 from '../img/qincho1.jpg'
import qincho2 from '../img/qincho2.jpg'
import qincho3 from '../img/qincho3.jpg'
import qincho4 from '../img/qincho4.jpg'

const Home = () => {
  return (
    
    <div className="card-container">
      <div className='card1'>
      <img src={qincho1} alt="" className='card-img' />
      <h1 className='card-title'>My title</h1>
      <p className="card-description">desceipcion</p>
      <a href="cardpage" className='card-btn'>Disponible</a>
      </div>

      <div className='card2'>
      <img src={qincho1} alt="" className='card-img' />
      <h1 className='card-title'>My title</h1>
      <p className="card-description">desceipcion</p>
      <a href="cardpage" className='card-btn'>Disponible</a>
      </div>

      <div className='card3'>
      <img src={qincho1} alt="" className='card-img' />
      <h1 className='card-title'>My title</h1>
      <p className="card-description">desceipcion</p>
      <a href="cardpage" className='card-btn'>Disponible</a>
      </div>

      <div className='card4'>
      <img src={qincho1} alt="" className='card-img' />
      <h1 className='card-title'>My title</h1>
      <p className="card-description">desceipcion</p>
      <a href="cardpage" className='card-btn'>Disponible</a>
      </div>
    </div>

  )

};

export default Home;
