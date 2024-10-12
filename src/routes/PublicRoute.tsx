// import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  if(token) return <Navigate to="/dashboard" />
  else {
    return <>{children}</>
  }
};

export default PublicRoute;