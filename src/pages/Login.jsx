import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom';

const Login = () => {
const {isAuth, login}=useContext(AuthContext);
 if(isAuth){
    return  <Navigate to="/"/>
 }
  return (
    <button disabled={isAuth} onClick={login}>Login</button>
  )
}

export default Login