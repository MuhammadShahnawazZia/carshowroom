// src/AboutUs.js
import React from 'react';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us-page">

      {/* Main About Us container */}
      <div className="about-us-container">
        <h1>About Us</h1>

        {/* Breadcrumb navigation */}
        <div className="breadcrumb">
          <span>Home</span> &gt; <span>About Us</span>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="about-us-content">
        <p>
          We are a team of passionate individuals committed to delivering the best services to our clients.
          With years of experience in the industry, we believe in innovation, creativity, and efficiency to
          help our customers succeed.
        </p>
        <p>
          Our team is dedicated to providing high-quality solutions, whether it's building web applications, 
          providing customer support, or collaborating with other professionals. We're here to make a difference.
        </p>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member-1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="team-member-2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
          {/* Add more team members as needed */}
        </div>
        {/* Feature Highlights Section */}
<div className="features-section">
  <div className="feature-card">
    <h3>Quality Assurance System</h3>
    <p>
      It seems though that some of the biggest problems with the internet advertising trends are the lack of
    </p>
  </div>
  <div className="feature-card">
    <h3>Accurate Testing Processes</h3>
    <p>
      Where do you register your complaints? How can you protest in any form against companies whose
    </p>
  </div>
  <div className="feature-card">
    <h3>Infrastructure Integration Technology</h3>
    <p>
      So in final analysis: it’s true, I hate peeping Toms, but if I had to choose, I’d take one any day over an
    </p>
  </div>
</div>

      </div>
      
    </div>
  );
};

export default AboutUs;
