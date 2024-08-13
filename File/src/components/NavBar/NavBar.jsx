import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavBar = () => {

  const[menu,setMenu] = useState("home");

  return (
    <div className = "Navbar">
        <img height = "150px" width = "150px" src = {logo} alt = ""/>
        <ul className='nav-menue'>
            <li><AnchorLink className ='anchor-link' href='#home'><p>Home</p></AnchorLink></li>
            <li><AnchorLink className ='anchor-link' offset = {50} href='#about'><p>About me</p></AnchorLink></li>
            <li><AnchorLink className ='anchor-link' offset = {50} href='#services'><p>Services</p></AnchorLink></li>
            <li><AnchorLink className ='anchor-link' offset = {50} href='#work'><p>Portfolio</p></AnchorLink></li>
            <li><AnchorLink className ='anchor-link' offset = {50} href="#contact"><p>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className ='anchor-link' offset = {50} href="#contact">connect with me</AnchorLink></div>
    </div>
  )
}

export default NavBar
