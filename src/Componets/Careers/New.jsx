import React from 'react'
import './New.css'
import pic from '../Images/into-success-group-young-freelancers-office-have-conversation-smiling_146671-13567-removebg-preview.png'
import { FaUmbrella } from 'react-icons/fa';
export const New = () => {
  return ( 
    <div id='Careers'>
    <h1 className='H'> FUTURE WITH US &nbsp; <FaUmbrella style={{ color: '#3da09e' }}></FaUmbrella></h1>
    <div className='new'>
        <div className='new-i'>
          <h1>Careers</h1>
          <p>Our events are conducted by industry experts who cover exciting ideas and current trends in detail.</p>
        </div>
        <div className='new-r'>
        
        <img alt='' src={pic} style={{height:'100%' ,width:'100%'} }></img>
        </div>
        
        </div>
      </div>
      )
}
