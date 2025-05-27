import React, { useState, useContext } from 'react';
import './TopBar.css';
import logo from '../assets/logo/logo.png';
import mmFlag from '../assets/flag/mm_flag.png';
import Sidebar from './Sidebar';
import { AuthContext } from '../contexts/AuthContext';

const TopBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useContext(AuthContext) || {};
  const isLoggedIn = !!user;

  return (
    <>
      <div className="topbar-2line">
        {/* First Row: Logo | App Name | Balance | Hamburger */}
        <div className="topbar-row topbar-row-1">
          <img src={logo} alt="Logo" className="topbar-logo" />
          <span className="topbar-appname">GSPLUS Staging UI</span>
          <span className="balance-box">
            <i className="fas fa-coins text-warning me-1"></i>
            {isLoggedIn ? (user?.balance ?? 0).toLocaleString() : 0} MMK
          </span>
          <button
            className="hamburger-menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* Second Row: Right-aligned actions */}
        <div className="topbar-row topbar-row-2">
          <div className="topbar-actions">
            {!isLoggedIn ? (
              <>
                <button className="btn btn-outline-warning btn-sm topbar-btn">LOGIN</button>
                <button className="btn btn-warning btn-sm topbar-btn">JOIN NOW</button>
              </>
            ) : (
              <>
                <button className="btn btn-outline-warning btn-sm topbar-btn">
                  <i className="fas fa-user me-1"></i>
                </button>
                <button className="btn btn-outline-warning btn-sm topbar-btn">
                  <i className="fas fa-bell"></i>
                </button>
                <button
                  className="btn btn-outline-warning btn-sm topbar-btn"
                  onClick={logout}
                >
                  <i className="fas fa-sign-out-alt me-1"></i>
                </button>
              </>
            )}
            <span className="welcome-text">
               <span className="text-warning">{isLoggedIn ? user?.username : 'Guest'}</span>
            </span>
            <span className="flag-box">
              <img src={mmFlag} alt="Myanmar" />
            </span>
          </div>
        </div>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default TopBar;
