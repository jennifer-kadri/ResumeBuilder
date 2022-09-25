import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../components/Navbar'
import Home from '../pages/Home'
import Login from './Login'
import Register from './Register'
import Body from '../components/Body'

const Pages = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signup" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/create" element={<Body />}/>
    </Routes>
    </>
  )  
}

export default Pages