import React, { useState } from "react";
import { Link } from "react-router-dom";
import './CSS/Navbar.css';
// import logo1 from './Images/logo.jpeg';
import logo2 from './Images/logos.jpeg';


function Navbar(){
   const [check, setCheck] = useState(false); 
   const handleChange = () => { 
     setCheck(!check);  
   }; 
   const handleChange1 = () => { 
     setCheck(!check);  
   }; 
  
return (
<nav className="navbar">
      <div className="logo">
         <Link to="/">
         <img src={logo2} className='logoimg1'onClick={handleChange1}/>
         </Link>
      </div>
      
      <input type="checkbox" id="click" checked={check}/>
      <label for="click" className="menu-btn">
      <i className="fas fa-bars" onClick={handleChange}></i>
      </label>
      <ul>
         <li ><Link to="/" onClick={handleChange1} >Home</Link></li>
         <li ><Link to="/mentors" onClick={handleChange1} >Experts</Link></li>
         <li><Link to="/aboutus" onClick={handleChange1}> About Us</Link></li>
         <li><Link to="/contactus" onClick={handleChange1}>Contact us</Link></li>
         <li><Link to="/login" onClick={handleChange1}>Login</Link></li>
      </ul>
   </nav>
   );

  }
  export default Navbar;