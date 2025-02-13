import React from 'react'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import themepattern from '../../assets/theme_pattern.svg'
import './contact.css'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "775daf1c-4d40-4201-aa42-6371c3dbcd26");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
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
        <form  onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" required placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" required placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
          <button className="contact-submit" type='submit'>Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact