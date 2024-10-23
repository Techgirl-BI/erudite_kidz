import React from 'react'
import ReactPlayer from 'react-player';
import '../styles/intro_video.css'
const Intro_video = () => {
  return (
    <div className='intro_video'>
      <ReactPlayer url="https://youtu.be/A9Dku7qBTMk?list=PLakAmVjYWIY6RoTI8Xm1dCuNTn2zmz44x" className="player" />
    </div>
  )
}

export default Intro_video