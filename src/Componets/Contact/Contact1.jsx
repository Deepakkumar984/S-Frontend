import React, { useState } from 'react';

import './Contact.css'
export const Contact1 = () => { 
  const [formData, setFormData] = useState({
    name: '',
    lastname:'',
    number:'',
    email: '',
    message: '',
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://synergyintegratedsolutions.pk/send_email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        // Clear the form after successful submission
        setFormData({
          name: '',
          lastname:'',
          number:'',
          email: '',
          message: '',
        });
      } else {
        alert('Failed to send the message.');
      }
    } catch (error) {
      console.error('Error sending the message:', error);
      alert('Failed to send the message.');
    }
  };

  return (
    <div id='Contact'>
    <section id="section-wrapper">
      <div className="box-wrapper">
        <div className="info-wrap">

        </div>
        <div className="form-wrap">
          <form onSubmit={handleSubmit}>
            <h2 className="form-title">Send Us Message</h2>
            <div className="form-fields">
              <div className="form-group">
                <input type="text" onChange={handleChange} className="fname" name="name" value={formData.name} placeholder="First Name"></input>
              </div>
              <div className="form-group">
                <input type="text" onChange={handleChange} className="lname" name="lastname" value={formData.lastname} placeholder="Last Name"></input>
              </div>
              <div className="form-group">
                <input type="email" onChange={handleChange} className="email" name="email" value={formData.email} placeholder="Mail"></input>
              </div>
              <div className="form-group">
                <input type="number" onChange={handleChange} className="phone" name="number" value={formData.number} placeholder="Phone"></input>
              </div>
              <div className="form-group">
                <textarea name="message" onChange={handleChange} id=""  value={formData.message} placeholder="Write your message"></textarea>
              </div>
            </div>
            <input type="submit" value="Send Message" className="submit-button"></input>
          </form>
        </div>
      </div>
    </section>


  </div>
  );
};