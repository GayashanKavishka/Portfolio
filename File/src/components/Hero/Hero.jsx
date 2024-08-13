import React, { Profiler } from 'react'
import './Hero.css'
import Profile from '../../assets/Profile-img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div  id ='home' className = "hero">
      <img height = "400px" width = "400px" src = {Profile} alt=""/>
      <h1><span>I'm Gayashan De Silva,</span> frontend devoloper based in Sri Lanka. </h1>
      <p1>I am  currently a student at University of Moratuwa.I follow Computer Science and Engineering Degree programme.
      </p1>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className ='anchor-link' offset = {50} href="#contact">Conect with me</AnchorLink></div>
        <div className="hero-resume">
          <a  href='https://docs.google.com/document/d/1zRz0HEVddfIfx_dbTrHJVNFY5CiAn61eW7KHWkxYuhI/edit'  target="_blank"> My resume </a>

        </div>
      </div>
    </div>
  )
}

export default Hero
