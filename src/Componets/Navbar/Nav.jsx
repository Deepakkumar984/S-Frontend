import React from 'react'
import './Nav.css'
import {  Link } from 'react-scroll'
import logo from '../Images/logo.png'
export const Nav = () => {
 
  return (
    <div className="n-wrapper" id="Home">
      {/* left */}
      <div className="n-left">
        
        <img className='img'  alt='' src={logo}></img>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
          <li>
          <Link to='Home' spy={true} smooth={true}>Home</Link>
        </li>
        <li>
          <Link to='OurServices' spy={true} smooth={true}>Our Services</Link>
        </li>
        <li>
          <Link to='OurClients' spy={true} smooth={true}>Our Clients</Link>
        </li>
        <li>
          <Link to='whoWeAre' spy={true} smooth={true}>About Synergy</Link>
        </li>
        
        <li>
          <Link to='Careers' spy={true} smooth={true}>Careers</Link>
        </li>  
          </ul>
        </div>
        <Link to="Contact" spy={true} smooth={true}>
      <button className=" n-button">Contact</button>
      </Link>
      </div>
    </div>
  );
};