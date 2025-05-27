import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginRegister.css';
import logo from '../assets/logo/slot logo.png'; // Use your logo path

const RegisterPage = () => {
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referral, setReferral] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: handle register logic
  };

  return (
    <div className="auth-bg">
      <div className="casino-sparkle">
  {Array.from({ length: 18 }).map((_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        animationDelay: `${Math.random() * 4}s`
      }}
    />
  ))}
</div>

      <form className="auth-card animated-fade-in" onSubmit={handleRegister}>
        <div className="auth-logo">
          <img src={logo} alt="Slot Logo" />
        </div>
        <h2 className="auth-title">စာရင်းသွင်းရန်</h2>
        <div className="auth-input-group">
          <span className="auth-icon"><i className="fas fa-phone"></i></span>
          <input
            className="auth-input"
            type="text"
            placeholder="ဖုန်းနံပါတ်ထည့်ရန်"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="auth-input-group">
          <span className="auth-icon"><i className="fas fa-user"></i></span>
          <input
            className="auth-input"
            type="text"
            placeholder="အကောင့်အမည်ထည့်ရန်"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="auth-input-group">
          <span className="auth-icon"><i className="fas fa-lock"></i></span>
          <input
            className="auth-input"
            type="password"
            placeholder="စကားဝှက်ထည့်ရန်"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="auth-input-group">
          <span className="auth-icon"><i className="fas fa-lock"></i></span>
          <input
            className="auth-input"
            type="password"
            placeholder="စကားဝှက်ပြန်ထည့်ရန်"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="auth-input-group">
          <span className="auth-icon"><i className="fas fa-chevron-left"></i></span>
          <input
            className="auth-input"
            type="text"
            placeholder="ရင်းနှီးသူအမည် (optional)"
            value={referral}
            onChange={e => setReferral(e.target.value)}
          />
        </div>
        <button className="auth-btn gold" type="submit">စာရင်းသွင်းမည်</button>
        <div className="auth-link-row">
          <span style={{color: '#888'}}>အကောင့်ရှိပြီးသားလား?</span>
          <button
            type="button"
            className="auth-link-btn"
            onClick={() => navigate('/login')}
          >
            အကောင့်ဝင်မည်
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
