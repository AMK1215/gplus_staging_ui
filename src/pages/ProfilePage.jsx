import React, { useState, useContext } from 'react';
import TopBar from '../components/TopBar';
import Sidebar from '../components/Sidebar';
import './DepositPage.css';
import { AuthContext } from '../contexts/AuthContext';

const ProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div style={{ color: '#ffd700', textAlign: 'center', marginTop: '3rem' }}>Loading...</div>;
  }
  return (
    <>
      <TopBar onSidebarOpen={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="deposit-layout">
        <div className="deposit-content">
          <div className="deposit-form-card" style={{ maxWidth: 600 }}>
            <h2 style={{ color: '#ffd700', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>Profile</h2>
            <form className="deposit-form">
              <div className="deposit-form-row">
                <div className="deposit-form-label">Username</div>
                <div className="deposit-form-value">
                  <input className="deposit-input" value={user.user_name || ''} readOnly />
                </div>
              </div>
              <div className="deposit-form-row">
                <div className="deposit-form-label">Name</div>
                <div className="deposit-form-value">
                  <input className="deposit-input" value={user.name || ''} readOnly />
                </div>
              </div>
              <div className="deposit-form-row">
                <div className="deposit-form-label">Phone</div>
                <div className="deposit-form-value">
                  <input className="deposit-input" value={user.phone || ''} readOnly />
                </div>
              </div>
              <div className="deposit-form-row">
                <div className="deposit-form-label">Email</div>
                <div className="deposit-form-value">
                  <input className="deposit-input" value={user.email || ''} readOnly />
                </div>
              </div>
              <div className="deposit-form-row">
                <div className="deposit-form-label">Balance</div>
                <div className="deposit-form-value">
                  <input className="deposit-input" value={user.balance || ''} readOnly />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage; 