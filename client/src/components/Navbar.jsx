import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Feather, User, LogOut } from "react-feather";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));
  const location = useLocation()

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [location, token]);

  const handleClick = () => {
    alert("It works");
    {
      <>
      <Link to="/login" >Login</Link>
      <Link to="/login" >Signup</Link>
      </>
    }
  }

  return (
    <>
      <NavBar id="navbar-main">
        <Container id="navbar">
          <HeroWrapper id="navbelt" className="wrapper d-flex">
            <Brand className="brand">
              <Link id="logo" to="/">
                 Resume Builder
              </Link>
            </Brand>

              <Div className="auth">
                <Button className="hide btn">
                  <Link to="/create" className="icon"><Feather /></Link>
                </Button>
                <Button className="btn">
                  <Link to="/create" className="create">Create Resume</Link> 
                </Button>
              {!isLoggedIn && (
                <>
                  <Div className="hide btn">
                    <Button
                      className="icon" 
                      onClick={handleClick}
                    ><User />
                  </Button>
                  </Div>
                  <Button className="btn">
                    <Link to="/login" className="signin">Login</Link>
                  </Button>
                  <Button className="btn">
                    <Link to="/signup" className="signup">Signup</Link>
                  </Button>
                </>
              )}
              {isLoggedIn && (
                <>
                  <Button className="hide btn">
                    <Link to="/signup" className="icon"><LogOut /></Link>
                  </Button>
                </>
              )}
            </Div>
          </HeroWrapper>
        </Container>
      </NavBar>
    </>
  )
}

const NavBar = styled.nav``
const Container = styled.div``
const HeroWrapper = styled.div``
const Div = styled.div``
const Brand = styled.h1`font-size: 1.4rem;`
const Button = styled.small`word-break: break-word;`

export default Navbar