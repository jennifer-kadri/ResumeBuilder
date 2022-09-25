import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Register = ({ required, validEmail, validPassword, validUsername }) => {
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   
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
      if (email === "" || 
         password === "" || 
         confirmPassword === "" || 
         firstname === "" || 
         lastname === "" ||
         username === ""
      ) {
         setError(true);
      } else {
         setSubmitted(true);
         setError(false);
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
               <label className="form-label">Firstname</label>
               <input type="text" onChange={handleFirstname} className="form-input" value={firstname} />
            
               <label className="form-label">Lastname</label>
               <input type="text" onChange={handleLastname} className="form-input" value={lastname} />

               <label className="form-label">Username</label>
               <input type="text" onChange={handleUsername} className="form-input" value={username} />

               <label className="form-label">Email</label>
               <input type="text" onChange={handleEmail} className="form-input" value={email} />

               <label className="form-label">Password</label>
               <input type="text" onChange={handlePassword} className="form-input" value={password} />

               <label className="form-label">Confirm Password</label>
               <input type="text" onChange={handleConfirmPassword} className="form-input" value={confirmPassword} />
            
               <button type="submit" onClick={handleSubmit} className="btn btn-submit">Register</button>
            </form>
         </div>
      </> 
   )  
 }
 
 export default Register