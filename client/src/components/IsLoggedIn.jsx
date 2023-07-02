import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
const IsLoggedIn = () => {
	const item = JSON.parse(localStorage.getItem('user'));
	const token = item?.accessToken;
  
	return token ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

export default IsLoggedIn;