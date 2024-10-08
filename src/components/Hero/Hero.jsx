import React from 'react'
import './hero.css'
import profile from'../../assets/profile_img.png'
function Hero() {
  return (
    <div className='Hero'>
        <img  src={profile} alt='profile-img'/>
        <h1><span>I'am Bharath N K,</span> frontend developer</h1>
        <p>I am a frontend developer from India, 
            I am persuving B.Tech Artificial Intelligence and Machine Learning III-rd year</p>
        <div className="hero-action">
            <div className="hero-connect">Connect wiht me</div>
            <div className="hero-resume">Download resume</div>
        </div>
    </div>
  )
}

export default Hero