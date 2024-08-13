import React from 'react'
import './Contact.css'
import gmail from '../../assets/mail_icon.svg'
import telephone from '../../assets/call_icon.svg'
import location from '../../assets/location_icon.svg'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "61101b9f-b0ed-46ad-8f9f-b89dff670c97");
    
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
          console.log("Success", res);
        }
    }
  return (
    <div id = "contact" className='contact'>
        <div className="contact-title">
            <h1 className='one'>Get </h1>
            <h1 className='two'> In touch</h1>
        </div>
        <div className="horz">
        <hr />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img height = "30px" weight = "30px" src = {gmail} alt=''/>
                        <p>gayashankavishka2@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img height = "30px" weight = "30px" src = {telephone} alt=''/>
                        <p>071 3553579</p>
                    </div>
                    <div className="contact-detail">
                        <img  height = "30px" weight = "30px" src = {location} alt=''/>
                        <p>No 83/6 ,Sri Rathanapala Road,Issadin Town,Matara</p>
                    </div>

                </div>
            </div>
            <form  onSubmit ={onSubmit} className="contact-right">
                <label htmlFor = "">Your Name</label>
                <input type="text" placeholder='Enter your name' name = 'name'/>
                <label htmlFor=''>Your Email</label>
                <input type = "email" placeholder='Enter your Email' name = 'email'/>
                <label htmlFor= ''>Write your message here</label>
                <textarea name ="message" rows="8" placeholder='Enter your message'></textarea>
                <button type = "submit" className='contact-submit'>Submit now</button>
            </form>
        </div>
        
        
      
    </div>
  )
}
export default Contact
