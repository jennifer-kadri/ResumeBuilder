import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../routes/About'
import SEO from '../routes/SEO'
import Services from '../routes/Services'
import Login from './Login'
import Register from './Register'

const Pages = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signup" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="seo" element={<SEO />} />
    </Routes>
    </>
  )  
}

export default Pages