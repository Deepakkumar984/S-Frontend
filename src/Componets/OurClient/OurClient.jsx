import React from 'react'
import './OurClient.css'
import USER from '../Images/al-khair-logo-black.png';
import USER2 from '../Images/WhatsApp Image 2023-07-25 at 6.37.05 PM.jpeg';

import { FaUserFriends } from 'react-icons/fa'
export const OurClient = () => {
    return (
        <div>
            <div className='client' id='OurClients'>

                <div className='Heading-client'><h1>  OUR CLIENTS &nbsp; <FaUserFriends size={30} style={{ color: '#2fa09c' }} ></FaUserFriends></h1></div>
                <div className=' card-container-client'>
                    <div className='card-client' >
                        <img src={USER} alt=''></img>
                        <h3> AL-KHAIR</h3>
                    </div>
                    <div className='card-client' >
                        <img src={USER2} alt=''></img>
                        <h3>SUPERIOR CONSULTING</h3>
                    </div>
                    {/* <div className='card-client' >
                        <img src={USER} alt=''></img>
                        <h3> AL-KHAIR</h3>
                    </div>
                    <div className='card-client' >
                        <img src={USER} alt=''></img>
                        <h3> AL-KHAIR</h3>
                    </div> */}

                </div>
            </div>
        </div>
    )
}
