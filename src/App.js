import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Login from './Components/Login';
import About from './Components/About';
import User from './Components/User';
import Contact from './Components/Contact';
import Mentors from './Components/Mentors';
import Footer from './Components/Footer';
import Features from './Components/Features';
import FAQs from './Components/FAQs';
import Services from './Components/Services';
import Partner from './Components/Partner';
import Blogs from './Components/Blogs';
import Slidermain from './Components/Slidermain';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
       <Routes>
          <Route exact path="/"></Route>
          <Route exact path="/mentors"  element={<Mentors/>} />
          <Route exact path="/aboutus" element={<About/>} />
          <Route exact path="/user"  element={<User/>} />
          <Route exact path="/contactus" element={<Contact/>} />
          <Route exact path="/login" element={<Login/>} /> 
      </Routes>
    </Router>
    <Slidermain/>
    <About/>
    <Services/>
    <Features/>
    <Mentors/>
    <Partner/>
    <Blogs/>
    <FAQs/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
