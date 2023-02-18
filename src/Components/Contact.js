import React,{useState} from "react";
import './CSS/Contact.css';

function Contact(){
    
    const [user_name,setuser_Name] = useState("");
    const [Email,set_Email] = useState("");
    const [Message, set_Message] = useState("");
    const handlesend = (event) => {
        event.preventDefault();
        alert(`Username : ${user_name}  Email :${Email}  Message :${Message}`)
    }
    return(
        <div className="contactus-body">
            <h1 className="contactus-h1">Contact-Us</h1>
        <div className="contactus-container2">
          <div className="contactus-content2">
            <div className="contactus-left-side">
              <div className="contactus-icon-box">
                  <div className="contactus-icon-size">
              <i className="bi bi-geo-alt-fill"></i>
              </div>
                <div className="contactus-topic">Address</div>
                <div className="contactus-text-one">Kapurthala</div>
                <div className="contactus-text-two">Punjab</div>
              </div>
              <div className="contactus-icon-box">
              <div className="contactus-icon-size">
              <i className="bi bi-telephone-fill"></i>
              </div>
                <div className="contactus-topic">Phone</div>
                <div className="contactus-text-one">+9198 9893 5647</div>
                <div className="contactus-text-two">+9196 3434 5678</div>
              </div>
              <div className="contactus-icon-box">
              <div className="contactus-icon-size">
              <i className="bi bi-envelope-paper-fill"></i>
              </div>
                <div className="contactus-topic">Email</div>
                <div className="contactus-text-one">experthub@gmail.com</div>
                <div className="contactus-text-two">info.hub@gmail.com</div>
              </div>
            </div>
            <div className="contactus-right-side">
              <div className="contactus-topic-text">Send us a message</div>
              <p className="contactus-send-message-p"> If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
            <form onSubmit={handlesend}>
              <div className="contactus-input-box">
                <input type="text" placeholder="Enter your name" value={user_name} onChange={(e) => setuser_Name(e.target.value)}/>
              </div>
              <div className="contactus-input-box">
                <input type="email" placeholder="Enter your email" value={Email} onChange={(e) => set_Email(e.target.value)}/>
              </div>
              <div className="contactus-input-box message-box">
                <input type="text" placeholder="Enter your message" value={Message} onChange={(e) => set_Message(e.target.value)}/>
              </div>
              <div className="contactus-button">
                <input type="submit" value="Send Now"/>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    )
    
}
export default Contact;