import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { auth, loading } = useContext(AuthContext);
  if (loading) {
    return <div style={{color: '#ffd700', textAlign: 'center', marginTop: '3rem'}}>Loading...</div>;
  }
  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute; 