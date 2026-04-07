import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    const isLoggedIn = useSelector((state)=>state.Auth.isLoggedIn);
  return isLoggedIn ? children:<Navigate to="/login" />
}

export default ProtectedRoute