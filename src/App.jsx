import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Simulated protected route logic
function ProtectedRoute({ children }) {
  // Replace this with your actual authentication check
  const isLoggedIn = !!localStorage.getItem('loggedIn');
  return isLoggedIn ? children : <LoginPage />;
}

// Sparkle component
function CasinoSparkle() {
  return (
    <div className="casino-sparkle">
      {Array.from({ length: 25 }).map((_, i) => (
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
  );
}

// Example Home page (protected)
function Home() {
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    window.location.reload();
  };
  return (
    <div className="container-fluid">
      <div className="card mt-4">
        <h1>Welcome to Casino!</h1>
        <p>You are logged in. Enjoy your stay!</p>
        <button className="btn-primary" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

// Example Login page
function LoginPage() {
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (user && pass) {
      localStorage.setItem('loggedIn', 'yes');
      window.location.reload();
    } else {
      setError('Please fill all fields.');
    }
  };

  return (
    <div className="container-fluid">
      <form className="login-box" onSubmit={handleSubmit}>
        <h1>Casino Login</h1>
        {error && <div className="mb-2" style={{ color: 'crimson' }}>{error}</div>}
        <label htmlFor="user">Username</label>
        <input
          id="user"
          type="text"
          value={user}
          onChange={e => setUser(e.target.value)}
          autoComplete="username"
        />

        <label htmlFor="pass">Password</label>
        <input
          id="pass"
          type="password"
          value={pass}
          onChange={e => setPass(e.target.value)}
          autoComplete="current-password"
        />

        <button type="submit" className="btn-primary">Login</button>
        <a href="/register" className="login-link">Register</a>
      </form>
    </div>
  );
}

// Example Register page
function RegisterPage() {
  return (
    <div className="container-fluid">
      <div className="login-box">
        <h1>Register</h1>
        <p className="mb-2">Demo only. Registration not implemented.</p>
        <a href="/login" className="login-link">Back to Login</a>
      </div>
    </div>
  );
}

// Example Games page (protected)
function Games() {
  return (
    <div className="container-fluid">
      <div className="card mt-4">
        <h1>Games</h1>
        <p>This is the games page (protected).</p>
      </div>
    </div>
  );
}

// App
function App() {
  return (
    <>
      <div className="casino-bg" aria-hidden="true"></div>
      <CasinoSparkle />
      <div className="main-app">
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/games" element={<ProtectedRoute><Games /></ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
