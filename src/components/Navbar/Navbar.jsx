import React, { useRef, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {

  const [menu, setmenu] = useState("home");
  const menuref = useRef();

  const menuopen = () =>{
    menuref.current.style.right='0px';
  }

  const menuclose = () =>{
    menuref.current.style.right='-350px'
  }

  return (
    <div id='home' className='navbar'>
        <img onClick={menuopen} src={menu_open} alt="" className="nav-mob-open" />
        <ul ref={menuref} className="nav-menu">
            <img onClick={menuclose} src={menu_close} alt="" className="nav-mob-close" />
            <li><AnchorLink className="anchor-link"  href='#home'><p onClick={()=> setmenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline}/>:<></>}</li>
            <li><AnchorLink className="anchor-link" offset = {50} href='#about'><p onClick={()=> setmenu("about")}>About me</p></AnchorLink>{menu==="about"?<img src={underline}/>:<></>}</li>
            <li><AnchorLink className="anchor-link" offset = {50} href='#services'><p onClick={()=> setmenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline}/>:<></>}</li>
            <li><AnchorLink className="anchor-link" offset = {50} href='#work'><p onClick={()=> setmenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={underline}/>:<></>}</li>
            <li><AnchorLink className="anchor-link" offset = {50} href='#contact'><p onClick={()=> setmenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline}/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className="anchor-link" offset = {50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar