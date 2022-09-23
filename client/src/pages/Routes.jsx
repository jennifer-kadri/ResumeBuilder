import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Body from '../components/Body'
import Header from '../components/Header'
import Register from '../pages/Register'
import Login from '../pages/Login'

const Pages = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Header />
      <Body />
    </Routes>
  )  
}

export default Pages