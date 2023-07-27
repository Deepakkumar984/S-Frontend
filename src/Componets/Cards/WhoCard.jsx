import React from 'react'
import { FaLightbulb, FaQuestion, FaUsers } from 'react-icons/fa'
import './WhoCard.css'

export const WhoCard = () => {
  return (
    <>
      <div className='who'  id='whoWeAre'>

        <h1> ABOUT US<FaQuestion style={{color:'#2fa09c'}}></FaQuestion></h1>
        <div className=' card-container'>
          <div className='card-who' >

            <FaUsers size={40} style={{ color: 'gold' }}></FaUsers>
            <h3> WHO WE ARE</h3>
            <span className='bar'></span>
            <p className='text'>
              Synergy Integrated Solutions is a dynamic and innovative company that specializes in providing integrated solutions for various industries. With a strong commitment to excellence and customer satisfaction, we strive to deliver comprehensive and tailored solutions to meet the unique needs of our clients.
            </p>
          </div>
          <div className='card-who' >
            <FaLightbulb size={40} style={{ color: 'gold' }}></FaLightbulb>
            <h3> OUR MISSION</h3>
            <span className='bar'></span>
            <p className='text'>
              Our mission is to empower organizations by leveraging the power of synergy. We aim to combine cutting-edge technologies, industry best practices, and deep domain knowledge to create integrated solutions that enhance efficiency, productivity, and profitability for our clients.    </p>
          </div>

        </div>



      </div>
    </>
  )
}
