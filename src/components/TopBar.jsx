import React, { useState } from 'react';
import './TopBar.css';
import logo from '../assets/logo/logo.png';
import mmFlag from '../assets/flag/mm_flag.png';
import Sidebar from './Sidebar';

const TopBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="topbar bg-black d-flex align-items-center justify-content-between px-4 py-2">
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="topbar-logo me-3" />
        </div>
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-outline-warning btn-sm me-2">LOGIN</button>
          <button className="btn btn-warning btn-sm me-4">JOIN NOW</button>
          <span className="welcome-text me-3">Welcome <span className="text-warning">devtestabc</span></span>
          <span className="balance-box me-3"><i className="fas fa-coins text-warning me-1"></i>5000 MMK</span>
          <button className="btn btn-outline-warning btn-sm me-2"><i className="fas fa-user me-1"></i>PROFILE</button>
          <button className="btn btn-outline-warning btn-sm me-2"><i className="fas fa-bell"></i></button>
          <button
            className="hamburger-menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <span className="ms-3"><img src={mmFlag} alt="Myanmar" style={{width: 28, borderRadius: '4px'}} /></span>
        </div>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default TopBar; 