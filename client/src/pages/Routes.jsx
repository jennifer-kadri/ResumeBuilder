import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../components/Navbar'
import Home from '../pages/Home'
import Login from './Login'
import Register from './Register'
import Create from './Create'

const Pages = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signup" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/create" element={<Create />}/>
    </Routes>
    </>
  )  
}

export default Pages