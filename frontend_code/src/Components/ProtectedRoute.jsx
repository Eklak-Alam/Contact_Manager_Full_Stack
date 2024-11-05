import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ProtectedRoute = ({ children }) => {
  const isLogin = localStorage.getItem('isLogin') === 'true'; // Check if the user is logged in

  if (!isLogin) {
    toast.error("You have to login first."); // Show error notification if not logged in
    return <Navigate to="/login" replace />; // Redirect to login page
  }

  return children; // Render the protected content if logged in
};

export default ProtectedRoute; // Export ProtectedRoute component
