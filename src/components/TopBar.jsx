import React, { useState, useContext } from 'react';
import './TopBar.css';
import logo from '../assets/logo/logo.png';
import mmFlag from '../assets/flag/mm_flag.png';
import Sidebar from './Sidebar';
// Example: Replace with your own AuthContext, Redux, or state.
import { AuthContext } from '../contexts/AuthContext';

const TopBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useContext(AuthContext) || {};
  const isLoggedIn = !!user; // Adjust per your actual logic

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <img src={logo} alt="Logo" className="topbar-logo" />
        </div>
        <div className="topbar-right">
          {!isLoggedIn ? (
            <>
              <button className="btn btn-outline-warning btn-sm topbar-btn">LOGIN</button>
              <button className="btn btn-warning btn-sm topbar-btn">JOIN NOW</button>
            </>
          ) : (
            <button
              className="btn btn-outline-warning btn-sm topbar-btn"
              onClick={logout}
            >
              <i className="fas fa-sign-out-alt me-1"></i>LOGOUT
            </button>
          )}
          <span className="welcome-text">
            Welcome{' '}
            <span className="text-warning">
              {isLoggedIn ? user?.username : 'Guest'}
            </span>
          </span>
          <span className="balance-box">
            <i className="fas fa-coins text-warning me-1"></i>
            {isLoggedIn ? (user?.balance ?? 0) : 0} MMK
          </span>
          {isLoggedIn && (
            <>
              <button className="btn btn-outline-warning btn-sm topbar-btn">
                <i className="fas fa-user me-1"></i>PROFILE
              </button>
              <button className="btn btn-outline-warning btn-sm topbar-btn">
                <i className="fas fa-bell"></i>
              </button>
            </>
          )}
          <button
            className="hamburger-menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <span className="flag-box">
            <img src={mmFlag} alt="Myanmar" />
          </span>
        </div>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default TopBar;
