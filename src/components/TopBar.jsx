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
  const balance = user?.balance ?? 0;
  const username = user?.username ?? 'Guest';

  return (
    <>
      <div className="topbar-2line">
        <div className="topbar-row topbar-row-1">
          <img src={logo} alt="Logo" className="topbar-logo" />
          <span className="topbar-appname">GSPLUS Staging UI</span>
          <span className="balance-box">
            <i className="fas fa-coins text-warning me-1"></i>
            {balance.toLocaleString()} MMK
          </span>
          <button
            className="hamburger-menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="topbar-row topbar-row-2">
          <div className="topbar-row2-right">
            <span className="welcome-text">
              Welcome <span className="text-warning">{username}</span>
            </span>
            <button className="btn btn-outline-warning btn-sm topbar-btn">
              <i className="fas fa-user me-1"></i>PROFILE
            </button>
            <button className="btn btn-outline-warning btn-sm topbar-btn">
              <i className="fas fa-bell"></i>
            </button>
            <span className="flag-box">
              <img src={mmFlag} alt="Myanmar" />
            </span>
            <button
              className="btn btn-outline-warning btn-sm topbar-btn"
              onClick={logout}
            >
              <i className="fas fa-sign-out-alt me-1"></i>LOGOUT
            </button>
          </div>
        </div>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default TopBar;
