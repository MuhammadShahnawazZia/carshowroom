import React from 'react';
import './FeatureSection.css';
import ContactUs from '../Contact/ContactUs';

import carImage from '../../assets/car.png';
import engineIcon from '../../assets/feature-1.png';
import turboIcon from '../../assets/feature-2.png';
import coolingIcon from '../../assets/feature-3.png';
import suspensionIcon from '../../assets/feature-4.png';
import electricalIcon from '../../assets/feature-5.png';
import brakesIcon from '../../assets/feature-6.png';
import CarOffers from '../Offers/CarOffers';

const features = [
  { name: 'Engine', icon: engineIcon },
  { name: 'Turbo', icon: turboIcon },
  { name: 'Cooling', icon: coolingIcon },
  { name: 'Suspension', icon: suspensionIcon },
  { name: 'Electrical', icon: electricalIcon },
  { name: 'Brakes', icon: brakesIcon },
];

const FeatureSection = () => {
  return (
    
    <section className="feature-section">
      <div className="feature-left">
        <h2>Our Feature</h2>
        <h4>We Are a Trusted Name In Auto</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="feature-buttons">
          <button className="primary-btn">About Us</button>
          <button className="secondary-btn">Our Partners</button>
        </div>
      </div>

      <div className="feature-center">
        <img src={carImage} alt="Car" className="feature-1" />
      </div>

      <div className="feature-right">
        {features.map((item) => (
          <div className="feature-item" key={item.name}>
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <CarOffers/>
      <ContactUs />
   <></></section>
   
  );
};

export default FeatureSection;
