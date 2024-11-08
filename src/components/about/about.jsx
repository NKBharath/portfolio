import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'
function About() {
  return (
    <div id="about" className='about-me'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="about theme img" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="profile img" />
            </div>
            <dic className="about-right">
                <div className="about-right-para">
                    <p>I am a under graaduate student, from Tamil Nadu, India</p>
                    <p>My area of interest is to work in web developement</p>
                </div>
                <div className="about-right-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'50%'}}/></div>
                <div className="about-skill"><p>Java Script</p><hr style={{width:'70%'}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:'40%'}}/></div>
                <div className="about-skill"><p>c & c++</p><hr style={{width:'80%'}}/></div>
                </div>
            </dic>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>00yr</h1>
                <p>EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>002</h1>
                <p>PROJECTS</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>000</h1>
                <p>CLIENTS</p>
            </div>
        </div>
    </div>
    
  )
}

export default About