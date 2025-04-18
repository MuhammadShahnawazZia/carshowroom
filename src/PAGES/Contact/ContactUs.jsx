import React from 'react';
import './ContactUs.css'; // Make sure to create this CSS file

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Have a question or want to work with us? We'd love to hear from you.</p>

        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your Message" required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
