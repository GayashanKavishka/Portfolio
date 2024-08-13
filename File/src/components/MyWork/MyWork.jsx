import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data.js'
import right_arrow from '../../assets/right_arrow.png'

const MyWork = () => {
  return (
    <div id = 'work' className='mywork'>
        <div className="mywork-title">
            <h1>My Work</h1>
            <hr/>
        </div>
        <div className="mywork-container">
             {mywork_data.map((work,index)=>{
                     return <img  height="300px" width= "300px" key={index} src = {work.w_img} alt=''/>
             })}
        </div>
        <a  href='https://github.com/GayashanKavishka' target='blank'>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img height="40px" width = "50px" src ={right_arrow} alt =''/>
        </div>
        </a>
      
    </div>
  )
}

export default MyWork
