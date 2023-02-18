import React from "react";
// import logo1 from './Images/logo-a.png';
import logo2 from './Images/logos.jpeg';
import { Link } from "react-router-dom";
import './CSS/Footer.css';

function Footer() {
    return(
        <body className="footer-bo">
    <footer className="foot">
        <div className="footer-row">
            <div className="footer-col">
                <img src= {logo2} className="logo"/>
                <p> Thank you for the visiting our website. All the best for your career. </p>
            </div>
            <div >
                <h3 className="footer-office">Office</h3>
                <p>CB-1 Building</p>
                <p>IKGPTU Main Campus Kapurthala</p>
                <p>Punjab, Pin code -144603, India</p>
                <p className="footer-email-id">experthub@gmail.com</p>
                <h4>+91 - 0123456789</h4>
            </div>
            
            <div className="footer-col">
                <h3>Newsletter</h3>
                <form className="fo">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Enter your email id " required/>
                    <button type="sumbit"> <i className="fas fa-arrow-right"></i> </button>
                </form>
                <div className="social-icons">
                
                    <a href="https://facebook.com">
                   <i className="fab fa-facebook"></i>
                   </a>
                   <a href="https://twitter.com">
                    <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com">
                    <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com">
                    <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>

        </div>
        <hr/>
        <p className="copyright">Amit Mehta &copy; 2022 - All Rights Reserved </p>
    </footer>

</body>
    );
}
export default Footer;