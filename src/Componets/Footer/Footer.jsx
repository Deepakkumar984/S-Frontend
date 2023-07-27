import React from 'react'
import './Footer.css'
import { FaBuilding, FaMailBulk, FaPhone, FaFacebook, FaLinkedinIn, FaInstagram, FaTwitter, FaWhatsapp, FaRegCopyright } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='F-L'>
                <div className='F-L2'>
                    <div className='number'>
                        <h4 className='marg'>
                            <FaPhone size={20} style={{ color: 'white', marginRight: '2rem' }}></FaPhone>
                            021-34542587 , 0330-2637568
                        </h4>
                    </div>
                    <div className='email'>
                        <h4 className='marg2'>
                            <FaMailBulk size={20} style={{ color: 'white', marginRight: '2rem' }}></FaMailBulk>
                            connect@synergyintegratedsolutions.pk                </h4>
                    </div>
                    <div className='location'>
                        <p>
                            <FaBuilding size={20} style={{ color: 'white', marginRight: '2rem' }}></FaBuilding>
                            Office No.505, 5th Floor, Ibrahim Trade Tower, M.C.H.S., Sharah-e-Faisal, Karachi-Pakistan</p>
                    </div>
                </div>
                <br />
                <br />
                <div className='icons' >
                    <a href='https://www.facebook.com/'> <FaFacebook size={30} style={{ color: '#3b5998' }}></FaFacebook></a>
                    &nbsp; &nbsp; &nbsp;
                    <a href=''> <FaInstagram size={30} style={{ color: 'purple' }}></FaInstagram></a>
                    &nbsp; &nbsp; &nbsp;

                    <a href=''>  <FaLinkedinIn size={30} style={{ color: '#0072b1 ' }}></FaLinkedinIn></a>
                    &nbsp; &nbsp; &nbsp;

                    <a href=''> <FaTwitter size={30} style={{ color: '#00acee' }}></FaTwitter></a>
                    &nbsp; &nbsp; &nbsp;


                    <a rel='noreferrer' href='https://wa.me/+923302637568' target="blank"> <FaWhatsapp size={30} style={{ color: '#25D366' }}></FaWhatsapp></a>


                </div>

                <div className='bar'></div>
                &nbsp;
                <p ><FaRegCopyright style={{padding:'1.5px'}}></FaRegCopyright>All copyrights reserved by Synergy Integrated Solution 2023 </p>
            
            </div>



        </div>
    )
}
