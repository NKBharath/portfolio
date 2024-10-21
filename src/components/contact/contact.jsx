import React from 'react'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import themepattern from '../../assets/theme_pattern.svg'
import './contact.css'
const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={themepattern} />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I am available to work for intern or as a freelancer</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>bharathnkwork@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+91 80722 95598</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /><p>124/E lakshmi nagar, pothanur post, p.velur, namakkal dt, Tamil Nadu, 638181</p>
            </div>
          </div>
        </div>
        <form  className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="messafe" rows='8' placeholder='Enter your message'></textarea>
          <button className="contact-submit" type='submit'>Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact