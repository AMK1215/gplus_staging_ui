import React from 'react';
import './Marquee.css';

const Marquee = () => (
  <div className="marquee-bar bg-black text-warning py-2 px-3 rounded-3 mt-3">
    <i className="fas fa-star me-2 text-warning"></i>
    <marquee behavior="scroll" direction="left">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est pariatur consequ...
    </marquee>
  </div>
);

export default Marquee; 