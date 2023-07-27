import React from 'react';
import Logo from './Images/logo.png'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import {   FaWhatsappSquare } from 'react-icons/fa'
import './I.css';
import { Link } from 'react-scroll';


const content = [
  {
    title: 'Hi! Welcome To  ',
    head:
      'Synergy Integrated Solution',

    button: 'Contact Us',
    // image: 'https://img.freepik.com/premium-photo/computer-shop-service-work-desk-with-pc-components-copy-space-middle_176814-589.jpg?w=740',

  },
  {
    title: 'Website Designing & Development  ',
    description:
      'Website Designing and Development is a critical aspect of establishing a strong online presence for businesses and individuals. A well-designed and functional website serves as a virtual storefront, representing the brand, conveying information, and engaging with visitors. Website design involves the visual aesthetics, layout, and user interface, while website development focuses on the technical implementation and functionality. Here is an overview of our services in website designing and development:    ',
    list: [
      <li>Website Design</li>,
      <li>Responsive Design</li>,
      <li>Custom Web Development</li>,
      <li>E-commerce Development</li>,
      <li>Website Maintenance and Support</li>,

    ],
    button: 'Contact Us',
    image: 'https://img.freepik.com/premium-photo/top-view-laptop-concept-with-blue-desk-concept-background-3d-rendering_626958-393.jpg?w=900',

  },
  {
    title: 'Software Development  ',
    description:
      'At Synergy Integrated Solutions, we specialize in providing comprehensive App design and development services. Our team of skilled designers and developers work closely with clients to create visually appealing, user-friendly,  with their brand identity and business objectives. Here is an overview of our services in App designing and development:    ',
    list: [
      <li>CRM (Customer Resource Management)</li>,
      <li>ERP (Enterprise Resource Planning)
      </li>,

      <li>Integrated School Management System</li>,

      <li>Accounts Management System</li>,
    ],
    button: 'Contact Us',
    image: 'https://img.freepik.com/free-photo/new-laptop-balancing-with-geometric-shapes_23-2150296461.jpg?w=740&t=st=1689598822~exp=1689599422~hmac=b7c04706278f2dde5449fbe0dda76b7f4c8eb97ade8f1132800b795898b97bc0',

  },
  {
    title: 'Mobile  Application Development  ',
    description:
      'Mobile apps offer various functionalities and services to users, ranging from productivity tools and entertainment apps to social networking platforms and e-commerce solutions. They are developed using programming languages and frameworks specific to the target operating system, such as Swift or Objective-C for iOS and Java or Kotlin for Android.',
    list: [
      <li>App Development Platforms</li>,
      <li>Backend as a Service (Baas)</li>,
      <li>	App Testing and Quality Assurance</li>,
      <li>	App Analytics and Performance Monitoring</li>,
      <li>App Deployment and Distribution</li>,
      <li>	Mobile App Security</li>,
      <li>App Performance Optimization</li>,
      <li>App Maintenance & Update</li>,

    ],
    button: 'Contact Us',
    image: 'https://i.imgur.com/DCdBXcq.jpg',

  },
  {
    title: 'Digital & Social Media Marketing    ',
    description:
      'Digital marketing services refer to the professional services provided by Synergy Integrated Solutions to help businesses promote their products or services through various digital channels and platforms. These services are aimed at increasing brand visibility, driving website traffic, generating leads, and ultimately, achieving business objectives. Here are some offered digital marketing services;',
    list: [
      <li >	Search Engine Optimization (SEO)</li>,
      <li>	Pay- Per- Click Advertising (PPC)</li>,
      <li>	Social Media Marketing</li>,
      <li>	Content Marketing</li>,
      <li>	Email Marketing</li>,
      <li>	Social Media Advertising</li>,
      <li>Analytics and Reporting</li>

    ],
    button: 'Contact Us',
    image: 'https://img.freepik.com/premium-photo/top-view-workspace-with-tablet-camera-supplies-copy-space-home-office-room_67155-13383.jpg?w=826',

  },


];

export const I = () => {

  return (
    <div id='OurServices' >


<Slider className='slider-wrapper' autoplay={3000}>
        {content.map((item, index) => (
          <div
            key={index}
            className='slider-content'
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            {index === 0 ? ( // Check if it's the first welcome page
              <div className='inner-welcome'>
                <div className='welcome-left'>
                  <h2>{item.title}</h2>
                  <h1>{item.head}</h1>
                  <Link to='Contact' spy={true} smooth={true}>
                    <button className='I-button'>{item.button}</button>
                  </Link>
                </div>
                <div className='welcome-right'>
                  {/* Add your logo here */}
                  <img src={Logo} alt='Logo' />
                </div>
              </div>
            ) : (
              // For other slides, use the original layout
              <div className='inner'>
                <h1>{item.title}</h1>
                <h1>{item.head}</h1>
                <p>{item.description}</p>
                <p>{item.list}</p>
                <Link to='Contact' spy={true} smooth={true}>
                  <button className='I-button'>{item.button}</button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </Slider>
      <div className='I-watsap'>
      <a href='https://wa.me/+923302637568' target='blank' > <FaWhatsappSquare size={50} style={{ color: '#25D366'}}></FaWhatsappSquare></a>
      <span style={{color:'#25D366', fontWeight:'bold'}}>Chat With Us</span>

      </div>

    </div>
  );
}

