import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/d_mode.css'
import About from '../components/About'
import News from '../components/News'
import What_we_offer from '../components/What_we_offer'
import Intro_video from '../components/Intro_video'
import Footer from '../components/Footer'
import Call_to_action from '../components/Call_to_action'
const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <div className='onlineClasses'>
        <p >Online and Face to Face classes and camps</p>
        </div>
        <div>
            <img src='https://yetiacademy.com/wp-content/uploads/2023/03/learning-to-code.jpg' className='hero_img' />
        </div>
        <Call_to_action/>
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