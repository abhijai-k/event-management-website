import React from 'react'
import './Hero.css'
import hero from '../Assets/hero.jpg'


const Hero = () => {
  return (
    <div className='hero'>
        <img src={hero} alt="" />
        <div className="hero-text">
          <h1>Transforming Ideas Into <span className='highlight'> Unforgettable</span> Experiences</h1>
          <button className="button">LET'S GET STARTED</button>
        </div>
        </div>
  )
}

export default Hero