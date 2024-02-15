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
          <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facilis veniam aut ratione ducimus dolor quidem sapiente esse consectetur ut corrupti officia animi, mollitia accusamus quaerat saepe eos, eius alias.</p>
          <div>
            <a href="cardpage" className='card-btn'>Disponible</a>
          </div>
        </div>
      </div>

      <div>
        <img src={qincho2} alt="" className='card-img' />
        <div className='contenido'>
          <h1 className='card-title'>My title</h1>
          <p className="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero distinctio explicabo expedita atque, voluptatum similique aliquam nesciunt deleniti amet odit enim officiis illum soluta rerum error velit debitis rem Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, distinctio.</p>
          <div>
            <a href="cardpage" className='card-btn'>Disponible</a>
          </div>
        </div>
      </div>

      <div>
        <img src={qincho3} alt="" className='card-img' />
        <div className='contenido'>
          <h1 className='card-title'>My title</h1>
          <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde atque neque et officiis, aperiam corrupti magnam assumenda, optio earum perferendis. Harum atque ullam voluptates, exercitationem a deserunt. Accusantium, officiis.</p>
          <div>
            <a href="cardpage" className='card-btn'>Disponible</a>
          </div>
        </div>
      </div>

      <div>
        <img src={qincho4} alt="" className='card-img' />
        <div className='contenido'>
          <h1 className='card-title'>My title</h1>
          <p className="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nisi rem temporibus necessitatibus, doloribus numquam? Aut officiis earum, qui eos nobis placeat dolorem maxime quo modi laborum soluta vitae dolores.</p>
          <div>
            <a href="cardpage" className='card-btn'>Disponible</a>
          </div>
        </div>
      </div>
    </div>

  )

};

export default Home;
