import React from 'react'
import './About.css'
import Profile from '../../assets/Profile.svg'

const About = () => {
  return (
    <div id = 'about' className='about'>
      <div className="about-title">
           <h1>About me</h1><hr/>
           {/* <img width = "400px" height = "400" src ={Profile} alt=""/> */}
      </div>
      <div className="about-section">
           <div className='about-left'>
              <img width = "400px" height = "400" src ={Profile} alt=""/> 
           </div>

           <div className="about-right">
                <div className="about-para">
                    <p>I am a experienced Frontend Developer with 5 years of excellance .I have worked at Microsoft,Apple and Adobe </p>
                    <p>My passion for for frontend devoloping is very hudge and I have skills about various technologys about frontend devoloping</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div> 
                    <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>NextJs</p><hr style={{width:"50%"}}/></div>
                </div>
           </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
           <h1>10+</h1>
           <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
           <h1>90+</h1>
           <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
           <h1>15+</h1>
           <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
