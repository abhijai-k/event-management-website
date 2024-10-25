// src/components/AboutUs.js
import React from 'react';
import './CSS/Offers.css';

const Offers = () => {
  return (
    <div className='offers'>
        <div className="statistic">
          <h3>200+</h3>
          <p>Events Done</p>
        </div>
        <div className="statistic">
          <h3>10+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="statistic">
          <h3>200+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="statistic">
          <h3>10+</h3>
          <p>Trusted Vendors</p>
        </div>
    </div>
  );
};

export default Offers;
