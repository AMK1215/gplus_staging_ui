import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import mmFlag from '../assets/flag/mm_flag.png';
import logo from '../assets/logo/logo.png';

const links = [
  { icon: 'fas fa-th-large', label: 'Home', path: '/' },
  { icon: 'fas fa-arrow-down', label: 'Deposit', path: '/account/deposit' },
  { icon: 'fas fa-arrow-up', label: 'Withdrawal', path: '/account/withdrawl' },
  { icon: 'fas fa-exchange-alt', label: 'Transfer' },
  { icon: 'fas fa-clock', label: 'History' },
  { icon: 'fas fa-user', label: 'Profile', path: '/account/profile' },
  { icon: 'fas fa-wallet', label: 'Banking Detail' },
  { icon: 'fas fa-lock', label: 'Change Password' },
];

const Sidebar = ({ open, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch('https://luckymillion.pro/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      });
    } catch (e) {
      // Ignore error, always clear token
    }
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('tokenChange'));
    navigate('/login');
  };

  return (
    <div className={`sidebar-overlay${open ? ' open' : ''}`} onClick={onClose}>
      <div className="sidebar" onClick={e => e.stopPropagation()}>
        <div className="sidebar-header">
          <img src={logo} alt="Logo" className="sidebar-logo" />
          <button className="sidebar-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <button className="sidebar-lang">
          <img src={mmFlag} alt="Myanmar" /> Myanmar
        </button>
        <div className="sidebar-links">
          {links.map(link =>
            link.path ? (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `sidebar-link${isActive ? ' active' : ''}`
                }
                end={link.path === '/'}
                onClick={onClose}
              >
                <i className={link.icon}></i> {link.label}
              </NavLink>
            ) : (
              <button key={link.label} className="sidebar-link">
                <i className={link.icon}></i> {link.label}
              </button>
            )
          )}
        </div>
        <button className="sidebar-logout" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar; 