import React from 'react'
import './footer.css'
import footerlogo from '../../assets/footer_logo.svg'
import usericon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <hr />
                <p>SUBSCRIBE FOR UPDATES</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={usericon} alt="" />
                    <input type="email" name="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">2024 Bharath. All is Well</p>
            <p className="footer-bottom-right">
                <p className='footer-400px'>Term of Service</p>
                <p className='footer-400px'>privacy Policy</p>
                <p >Connect With me</p>
            </p>
        </div>
    </div>
  )
}

export default Footer