import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from './Login'
import Register from './Register'

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signup" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
  )  
}

export default Pages