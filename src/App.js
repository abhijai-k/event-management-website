import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Features from './Components/Pages/Features';
import About from './Components/Pages/About';
import Offers from './Components/Pages/Offers';
import Services from './Components/Pages/Services';
import Footer from './Components/Pages/Footer';


const App = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Hero/>
        <Features/>
        <About/>
        <Offers/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default App;