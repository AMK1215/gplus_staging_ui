import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginRegister.css';
import BASE_URL from '../hooks/baseURL';
import { AuthContext } from '../contexts/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { updateProfile } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(BASE_URL + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          user_name: username,
          password: password,
        }),
      });
      const result = await res.json();
      if (!res.ok || !result.data || !result.data.token) {
        setError(result.message || 'Login failed');
        setLoading(false);
        return;
      }
      // Save token and update profile
      localStorage.setItem('token', result.data.token);
      // Notify AuthContext of token change
      window.dispatchEvent(new Event('tokenChange'));
      if (updateProfile) updateProfile(result.data.user);
      setLoading(false);
      navigate('/');
    } catch (err) {
      setError('Network error');
      setLoading(false);
    }
  };

  return (
    <div className="auth-bg">
      <form className="auth-card" onSubmit={handleLogin}>
      <div className="auth-logo">
        <img
    src={process.env.PUBLIC_URL + 'https://gplus-staging-ui.vercel.app/assets/logo-P-jbhPrl.png'}
    alt="Slot Logo"/>
      </div>
        {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
        <div className="auth-input-group">
          <span className="auth-icon"><i className="fas fa-user"></i></span>
          <input
            className="auth-input"
            type="text"
            placeholder="အကောင့်အမည်"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <div className="auth-input-group">
          <span className="auth-icon"><i className="fas fa-lock"></i></span>
          <input
            className="auth-input"
            type="password"
            placeholder="စကားဝှက်"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <button className="auth-btn gold" type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'အကောင့်ဝင်မည်'}
        </button>
        <button
          className="auth-btn outline"
          type="button"
          onClick={() => navigate('/register')}
          disabled={loading}
        >
          စာရင်းသွင်းမည်
        </button>
      </form>
    </div>
  );
};

export default LoginPage; 