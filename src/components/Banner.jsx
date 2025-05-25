import React, { useState, useEffect } from 'react';
import './Banner.css';

import banner1 from '../assets/banners/banner_1.jpg';
import banner2 from '../assets/banners/banner_2.jpg';
import banner3 from '../assets/banners/banner_3.jpg';
import banner4 from '../assets/banners/banner_4.jpg';

const banners = [banner1, banner2, banner3, banner4];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3500); // Change every 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  const prevBanner = () => setCurrent((current - 1 + banners.length) % banners.length);
  const nextBanner = () => setCurrent((current + 1) % banners.length);

  return (
    <div className="banner-container bg-dark rounded-4 p-3 mb-3 position-relative">
      <button className="banner-arrow left" onClick={prevBanner}><i className="fas fa-chevron-left"></i></button>
      <img src={banners[current]} alt={`Banner ${current+1}`} className="banner-img w-100 rounded-4" />
      <button className="banner-arrow right" onClick={nextBanner}><i className="fas fa-chevron-right"></i></button>
      {/* Add overlay text/buttons as needed */}
    </div>
  );
};

export default Banner; 