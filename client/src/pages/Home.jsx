import React from "react";
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import Body from "../components/Body";
import styled from "styled-components";

const Home = () => {
   return (
      <>
         <NavBar /> 
         <Header />
         <Main className="body container">
            <Button className="heading">Try it now</Button>
         </Main>
         {/* <Body /> */}
      </> 
   )  
}

const Main = styled.div``
const Button = styled.button``
 
 export default Home