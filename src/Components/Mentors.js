import React from "react";
import './CSS/Mentors.css';
import mentorimg from './Images/men.jpg'

function Mentors(){
return(
    <div className="mentor-body">
        <h2 className="mentors-h2">Our Expert Mentors </h2>
    <div className="mentor-container">
        <div className="mentor-card">
            <div className="mentor-content">
                <div className="imgBx">
                    <img className="mentor-img" src='https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=' alt=""/>
                </div>
                <div className="mentor-contentBx">
                    <h4 >James Ford</h4>
                    <h5 >Specialties</h5>
                </div>
                <div className="sci" >
                    <font className="font-style-mentor" ><center>Stress, Anxiety, relationship issues, trauma and abuse, depression</center> </font>
                </div>
                <a href="https://appointment2022.vercel.app">Book an Appointment</a>
            </div>
        </div>

        <div className="mentor-card">
            <div className="mentor-content">
                <div className="imgBx">
                    <img className="mentor-img" src="https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=" alt=""/>
                </div>
                <div className="mentor-contentBx">
                    <h4 >Terion wick</h4>
                    <h5 >Specialties</h5>
                </div>
                <div className="sci" >
                    <font className="font-style-mentor"><center>Workshop Organiser,Family Planning and Management,Marriage Counsellor</center> </font>
                </div>
                <a href="https://appointment2022.vercel.app">Book an Appointment</a>
            </div>
        </div>

        <div className="mentor-card">
            <div className="mentor-content">
                <div className="imgBx">
                    <img className="mentor-img" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" alt=""/>
                </div>
                <div className="mentor-contentBx">
                    <h4 >Balish Conner</h4>
                    <h5 >Specialties</h5>
                </div>
                <div className="sci" >
                    <font className="font-style-mentor"><center>Carrer Counsellor,Mental Health Expert,College Finder</center> </font>
                </div>
                <a href="https://appointment2022.vercel.app">Book an Appointment</a>
            </div>
        </div>

    </div>
    </div>
    );
}
export default Mentors;