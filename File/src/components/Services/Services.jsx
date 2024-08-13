import React from 'react'
import './Services.css'
import Services_Data from '../../assets/Services_Data.js'
import right_arrow from '../../assets/right_arrow.png'

const Services = () => {
  return (
    <div id = 'services' className = "services">
      <div className="services-title">
        <h1>My Services</h1>
        <hr/>
      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>{
            return <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className='services-readmore'>
                    <p>Read More</p>
                    <img height="40px" width = "50px" src ={right_arrow} alt=""/>
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Services
