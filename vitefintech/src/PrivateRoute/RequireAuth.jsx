import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
  const isAuth = useSelector((store) => store.AuthReducer.ADMIN.Auth);
  console.log(isAuth);
  const navigate=useNavigate()
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to={"/admin"} state={{ from: location }}></Navigate>;
  } 
  navigate("/dashboard")
}

export default RequireAuth