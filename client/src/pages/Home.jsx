import React from "react";
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import Body from "../components/Body";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom"
import Editor from "../components/Editor";

const Home = () => {
   return (
      <>
         <Header />
         <Main className="body container">
            <Link to="/signup" className="heading">Create your resume</Link>
         </Main>
      </> 
   )  
}

const Main = styled.div``
const Button = styled.button``
 
 export default Home