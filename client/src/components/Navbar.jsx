import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { API_BASE_URL } from "../config";
import styled from "styled-components";
import { User, Feather } from "react-feather";

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

  var config = {
    method: "get",
    url: `${API_BASE_URL}/category/list`,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  };

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
                  <Link to="/create" className="create"><Feather /></Link>
                </Button>
                <Button className="btn">
                  <Link to="/create" className="create">Create Resume</Link> 
                </Button>
              {!isLoggedIn && (
                <>
                  <Button className="hide btn">
                    <Link to="/login" className="user"><User /></Link>
                  </Button>
                  <Link>
                  </Link>
                  <Button className="btn">
                    <Link to="/login" className="signin">Login</Link>
                  </Button>
                  <Button className="btn">
                    <Link to="/signup" className="signup">Signup</Link>
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