import React from 'react'
import "../components/Home.css"
import qincho1 from '../img/qincho1.jpg'
import qincho2 from '../img/qincho2.jpg'
import qincho3 from '../img/qincho3.jpg'
import qincho4 from '../img/qincho4.jpg'

const Home = () => {
  return (

    <div className="card-container">
      <div>
        <img src={qincho1} alt="" className='card-img' />
        <div className='contenido'>
          <h1 className='card-title'>My title</h1>
          <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sequi, adipisci laborum numquam possimus illum officia impedit aliquam est error similique veniam quos? Consequatur temporibus aliquid incidunt deleniti! Eum, et.</p>
          <a href="cardpage" className='card-btn'>Disponible</a>
        </div>
      </div>

      <div>
        <img src={qincho1} alt="" className='card-img' />
        <div className='contenido'>
          <h1 className='card-title'>My title</h1>
          <p className="card-description">desceipcion</p>
          <a href="cardpage" className='card-btn'>Disponible</a>
        </div>
      </div>

      <div>
        <img src={qincho1} alt="" className='card-img' />
        <div className='contenido'>
          <h1 className='card-title'>My title</h1>
          <p className="card-description">desceipcion</p>
          <a href="cardpage" className='card-btn'>Disponible</a>
        </div>
      </div>

      <div>
        <img src={qincho1} alt="" className='card-img' />
        <div className='contenido'>
          <h1 className='card-title'>My title</h1>
          <p className="card-description">desceipcion</p>
          <a href="cardpage" className='card-btn'>Disponible</a>
        </div>
      </div>
    </div>

  )

};

export default Home;
