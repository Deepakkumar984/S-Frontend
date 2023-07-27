import React from 'react'
import USER from '../Images/user.jpeg';
import CEO from '../Images/WhatsApp Image 2023-07-18 at 1.19.41 PM.jpeg'
import Director from '../Images/WhatsApp Image 2023-07-19 at 11.34.29 AM.jpeg'
import mehrab from '../Images/DSC_9083-removebg-preview (1).png'
import deepak from '../Images/WhatsApp Image 2023-07-19 at 11.58.06 AM.jpeg'
import hamza from '../Images/WhatsApp Image 2023-07-20 at 4.01.33 PM.jpeg'

import './Team.css'
import {  FaTeamspeak } from 'react-icons/fa';
export const Team = () => {
    return (
        <div>
        <div className='team'>
        <div className='Heading'><h1>  OUR TEAM &nbsp; <FaTeamspeak size={30} style={{color:'#2fa09c'}} ></FaTeamspeak></h1></div>
                <div className=' card-container-team'>
                    <div className='card-team' >
                        <img src={CEO} alt=''></img>
                        <h3> Fouzia Arshad <br></br> CEO</h3>
                    </div>
                    <div className='card-team' >
                        <img src={Director} alt=''></img>
                        <h3> Nouman A. Janjua <br></br>Director Sales & Marketing</h3>
                    </div>
                    <div className='card-team' >
                        <img src={USER} alt=''></img>
                        <h3> Zeeshan Yousaf <br></br>Business Consultant </h3>
                    </div>
                    <div className='card-team' >
                        <img src={mehrab} alt=''></img>
                        <h3> Mehrab Azum <br></br> Developer</h3>
                    </div>
                    <div className='card-team' >
                        <img src={hamza} alt=''></img>
                        <h3> Hamza Dawood <br></br>Developer </h3>
                    </div>
                    <div className='card-team' >
                        <img src={deepak} alt=''></img>
                        <h3> Deepak Kumar <br></br>Frontend Developer</h3>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
