import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthService from "../components/Auth/auth.service";

const Register = ({ required, validEmail, validPassword, validUsername }) => {
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   
   const [message, setMessage] = useState("");
   const [submitted, setSubmitted] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      if (confirmPassword !== password) {
         if (password === confirmPassword) setError(false);
            else setError(true);
      }
   }, [confirmPassword]);

   const handleFirstname = (event) => {
      setFirstname(event.target.value);
      setSubmitted(false);
   };

   const handleLastname = (event) => {
      setLastname(event.target.value)
      setSubmitted(false);
   };

   const handleUsername = (event) => {
      setUsername(event.target.value)
      setSubmitted(false);
   };

   const handleEmail = (event) => {
      setEmail(event.target.value);
      setSubmitted(false);
   };

   const handlePassword = (event) => {
      setPassword(event.target.value);
      setSubmitted(false);
   };
   
   const handleConfirmPassword = (event) => {
      setConfirmPassword(event.target.value);
      setSubmitted(false);
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      setMessage("");
      setSubmitted(false);

      if (!error) {
         AuthService.register(firstname, lastname, username, email, password, confirmPassword).then(
            (response) => {
               console.log(response.data.message);
               setSubmitted(true);
            },
            (error) => {
               const Msg = (
                  error.response && error.response.data && error.response.data.message
               ) || error.message || error.toString();

               setMessage(Msg);
               setSubmitted(false);
            }
         )
      }
   };

   const successMessage = () => {
      return (
         <div 
            className="success"
            style={{ display: submitted ? '' : 'none', }}
         >
            <h1>User {username} successfully registered !</h1>
         </div>
      );
   };

   const errorMessage = () => {
      return (
         <div 
            className="errror"
            style={{ display: error ? '' : 'none', }}
         >
            <h1>Please enter all the fields.</h1>
         </div>
      );
   };

   return (
      <>
         <div id="register">
            <div className="div"><h1>Sign Up</h1></div>

            <div className="messages">
               {errorMessage()}
               {successMessage()}
            </div>

            <form className="form">
               <input 
                  type="text" 
                  className="form-input" 
                  name="firstname"
                  placeholder="Firstname"
                  value={firstname} 
                  onChange={handleFirstname} 
                  validations={[required]}
               />
            
               <input 
                  type="text" 
                  className="form-input" 
                  name="lastname" 
                  placeholder="Lastname"
                  value={lastname} 
                  onChange={handleLastname} 
                  validations={[required]}
               />

               <input 
                  type="text" 
                  className="form-input" 
                  name="username" 
                  placeholder="Username"
                  value={username} 
                  onChange={handleUsername} 
                  validations={[required]}
               />

               <input 
                  type="text" 
                  className="form-input" 
                  name="email" 
                  placeholder="Email"
                  value={email} 
                  onChange={handleEmail} 
                  validations={[required, validEmail]}
               />

               <input 
                  type="text" 
                  className="form-input" 
                  name="password" 
                  placeholder="Password"
                  value={password} 
                  onChange={handlePassword} 
                  validations={[required, validPassword]}
               />

               <input 
                  type="text" 
                  className="form-input" 
                  name="confirm-password" 
                  placeholder="Confirm password"
                  value={confirmPassword} 
                  onChange={handleConfirmPassword}
                  validations={[required]}
               />
            
               <button type="submit" onClick={handleSubmit} className="btn btn-submit">Register</button>

               <div className="account">
                  <span>Already have an account?</span>
                  <Link to="/login">Log in</Link>
               </div>
            </form>
         </div>
      </> 
   )  
 }
 
 export default Register