import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/d_mode.css'
import Cta from '../components/cta'
import About from '../components/About'
import News from '../components/News'
import What_we_offer from '../components/What_we_offer'
import Intro_video from '../components/Intro_video'
import Footer from '../components/Footer'
const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <p className='onlineClasses'>Online and Face to Face classes and camps</p>
        <div>
            <img src='https://yetiacademy.com/wp-content/uploads/2023/03/learning-to-code.jpg' />
        </div>
       <Cta/>
       <About/>
       <News/>
       <What_we_offer/>
       <hr className='divider'/>
       <Intro_video/>
       <Footer/>
    </div>
  )
}

export default Homepage