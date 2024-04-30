import React from 'react'
import {Routes, Route} from "react-router-dom"

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Users from '../pages/Users'
import SingleUserPage from '../pages/SingleUserPage'
import About from '../pages/About'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'
import NotFound from '../pages/NotFound'
const AllRoutes = () => {
  return (
    <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/users" element={
    <PrivateRoute>

      <Users/>
    </PrivateRoute>
  }/>
  <Route path ="/users/:id" element={
  <PrivateRoute>

    <SingleUserPage/>
  </PrivateRoute>
  
  }/>
  <Route path ="login" element={<Login/>}/>
  
<Route path="*" element={<NotFound/>}/>
 </Routes>
  )
}

export default AllRoutes