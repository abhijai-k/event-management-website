// src/components/Services.js
import React from 'react';
import './CSS/Services.css';

// Import your service logos
import s1 from '../Assets/s1.png'; // Replace with actual paths
import s2 from '../Assets/s2.png';
import s3 from '../Assets/s3.png';
import s4 from '../Assets/s4.png';


const Services = () => {
  return (
    <section id='services'>
    <div className="services">
      <h2>Our Services</h2>
      <div className="service">
        <img src={s1} alt="Customizable Event Packages" className="service-logo" />
        <h3>Event Planning & Coordination</h3>
        <p>Complete planning and seamless coordination for a worry-free event.</p>
      </div>
      <div className="service">
        <img src={s2} alt="On-Site Coordination" className="service-logo" />
        <h3>Venue Sourcing & Management</h3>
        <p>Find and manage the perfect venue to match your event's style and needs.</p>
      </div>
      <div className="service">
        <img src={s3} alt="Vendor Management" className="service-logo" />
        <h3>Creative Design & Decor</h3>
        <p>Customized decor to bring your vision to life with stunning, memorable designs.</p>
      </div>
      <div className="service">
        <img src={s4} alt="Vendor Management" className="service-logo" />
        <h3>Catering & Culinary</h3>
        <p>Delicious, tailored menus to satisfy every guest’s taste and dietary needs.</p>
      </div>
    </div>
    </section>
  );
};

export default Services;
