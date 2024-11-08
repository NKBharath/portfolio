import React from 'react'
import './hero.css'
import resume from '../../assets/bharath_resume.pdf'
import profile from'../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Hero() {
  return (
    <div id='hero' className='Hero'>
        <img  className='hero-img'src={profile} alt='profile-img'/>
        <h1><span>I'am Bharath N K,</span> frontend developer</h1>
        <p>I am a frontend developer from India, 
            I am persuving B.Tech Artificial Intelligence and Machine Learning III-rd year</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset = {50} href='#contact'>Connect wiht me</AnchorLink></div>
            <div className="hero-resume">
              <a href={resume} download="Bharath_resume">Download Resume</a>
            </div>
        </div>
    </div>
  )
}

export default Hero