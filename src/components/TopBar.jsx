import React, { useState, useContext, useRef, useEffect } from 'react';
import './TopBar.css';
import logo from '../assets/logo/logo.png';

// Flag imports
import mmFlag from '../assets/flag/mm_flag.png';
import enFlag from '../assets/flag/en_flag.png';
import thFlag from '../assets/flag/th_flag.png';
import zhFlag from '../assets/flag/zh_flag.png';

import Sidebar from './Sidebar';
import { AuthContext } from '../contexts/AuthContext';

const LANGUAGES = [
  { code: 'mm', name: 'Myanmar', flag: mmFlag },
  { code: 'en', name: 'English', flag: enFlag },
  { code: 'th', name: 'Thailand', flag: thFlag },
  { code: 'zh', name: 'Chinese', flag: zhFlag },
];

const TopBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const { user } = useContext(AuthContext) || {};
  const balance = user?.balance ?? 0;

  const langBtnRef = useRef();

  // Close menu on click outside
  useEffect(() => {
    const onClickOutside = (e) => {
      if (langBtnRef.current && !langBtnRef.current.contains(e.target)) {
        setLangMenuOpen(false);
      }
    };
    if (langMenuOpen) document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [langMenuOpen]);

  return (
    <>
      <div className="topbar-oneline">
        <img src={logo} alt="Logo" className="topbar-logo" />
        <span className="balance-box">
          <i className="fas fa-coins text-warning me-1"></i>
          {balance.toLocaleString()} MMK
        </span>
        <button className="btn btn-outline-warning btn-sm topbar-btn">
          <i className="fas fa-bell"></i>
        </button>
        <div className="flag-lang-wrap" ref={langBtnRef}>
          <button
            className="flag-lang-btn"
            onClick={() => setLangMenuOpen((v) => !v)}
          >
            <img src={language.flag} alt={language.name} />
            <span className="lang-caret">&#9662;</span>
          </button>
          {langMenuOpen && (
            <div className="lang-dropdown">
              {LANGUAGES.map((lang) => (
                <button
                  className="lang-dropdown-item"
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang);
                    setLangMenuOpen(false);
                  }}
                >
                  <img src={lang.flag} alt={lang.name} />
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          className="hamburger-menu-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default TopBar;
