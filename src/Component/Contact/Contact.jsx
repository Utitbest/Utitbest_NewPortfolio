import React from 'react'
import './Contact.css'
// import { msg_icon, mail_icon, phone_icon, location_icon, white_arrow } from '../../assets'
const Contact = () => {
    const [result, setResult] = React.useState("")

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....")
    const formData = new FormData(event.target);

    formData.append("access_key", "92424037-39a0-4db4-af49-7c08701cb12d");

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
      setResult(res.message)
      event.target.reset(); 
    }else{
        console.log("Error", res);
        setResult(res.message)
    }
  };

  return (
    <div className='contact1' name="contact">

            <div className="Stitle sss" style={{marginBottom:'2em', marginTop: '2em'}}>
                <span className='oweag' style={{width: 'unset', textAlign:'center'}}>Contact me</span>
                <h3  style={{textAlign:'center'}}>Let's talk business plain</h3>
            </div>

            <div className='contactinfo'>
              <div className="contact-col">
                  <h3>Send us a message</h3>
                  <p>Feel free to reach out through contact form or find our contact 
                      information below. Your feedback, questions, and suggestion are 
                      important to us as we strive to provide exceptional 
                      service to our university community.
                  </p>
                  <ul>
                      <li>utitbesta@gmail.com</li>
                      <li>+234 8063308044</li>
                      <li>293 Nwaniba, Uyo<br/> Akwa Ibom State, Nigeria </li>
                  </ul>
              </div>
              <div className="contact-col">
                  <form onSubmit={onSubmit}>
                      <label>Your Name</label>
                      <input type="text" name='name' placeholder='Enter your name' required/>
                      <label>Phone Number</label>
                      <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                      <label htmlFor="">Write your message here</label>
                      <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
                      <button type='submit' className='btn dark-btn'>Submit Now </button>
                  </form>
                  <span>{result}</span>
              </div>
            </div>
    </div>
  )
}

export default Contact