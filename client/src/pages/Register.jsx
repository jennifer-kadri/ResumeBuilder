import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
import AuthService from "../components/Auth/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

const required = (value) => {
   if (!value) {
      return (
         <div className="error">
            This field is required.
         </div>
      );
   };
};

const validEmail = (value) => {
   if (!isEmail(value)) {
      return (
         <div className="error">
            This email address is not valid.
         </div>
      );
   };
};

const validPassword = (value) => {
   if (value.length < 6 || value.length > 40) {
      return (
         <div className="error">
            The password must be between 6 and 40 characters long.
         </div>
      );
   };
};

const validUsername = (value) => {
   console.log(value);
   if (value === null | value === "") {
      return (
         <div>
            The username is required.
         </div>
      );
   };
};

const Register = (props) => {
   const navigate = useNavigate();
   const form = useRef();
   const checkBtn = useRef();

   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [message, setMessage] = useState("");
   const [successful, setSuccessful] = useState(false);
   const [errorMessage, setErrorMessage] = useState(false);
   const [isDirty, setIsDirty] = useState(false);

   useEffect((password, isDirty) => {
      if (isDirty) {
         if (password === confirmPassword) {
            setErrorMessage(false);
         } else {
            setErrorMessage(true);
         }
      }
   }, [confirmPassword]);

   const handleFirstname = (event) => {
      setFirstname(event.target.value);
   };

   const handleLastname = (event) => {
      setLastname(event.target.value)
   };

   const handleUsername = (event) => {
      setUsername(event.target.value)
   };

   const handleEmail = (event) => {
      setEmail(event.target.value);
   };

   const handlePassword = (event) => {
      setPassword(event.target.value);
   };
   
   const handleConfirmPassword = (event) => {
      setConfirmPassword(event.target.value);
      setIsDirty(true);
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      setMessage("");
      setSuccessful(false);

      form.current.validateAll();

      if (!errorMessage) {
         AuthService.register(firstname, lastname, username, email, password, confirmPassword).then(
            (response) => {
               console.log(response.data.message);
               setMessage(response.data.message);
               setSuccessful(true);
               setTimeout(() => {
                  navigate("/")
               }, 2000)
            },
            (error) => {
               const resMessage = (
                  error.response && error.response.data && error.response.data.message
               ) || error.message || error.toString();

               setMessage(resMessage);
               setSuccessful(false);
            }
         );
      }
   };

   return (
      <>
         <div id="register">
            <div className="container">
               <div className="div"><h1>Create your account</h1></div>
               <Form className="form" onSubmit={handleSubmit} ref={form}>
                  {!successful && (
                     <>
                        <div className="form-group">
                           <Input type="text" onChange={handleFirstname} className="form-input" value={firstname} validations={[required]}/>
                        </div>
                     
                        <div className="form-group">
                           <Input type="text" onChange={handleLastname} className="form-input" value={lastname} validations={[required]}/>
                        </div>

                        <div className="form-group">
                           <Input type="text" onChange={handleUsername} className="form-input" value={username} validations={[required, validUsername]}/>
                        </div>

                        <div className="form-group">
                           <Input type="text" onChange={handleEmail} className="form-input" value={email} validations={[required, validEmail]}/>
                        </div>

                        <div className="form-group">
                           <Input type="text" onChange={handlePassword} className="form-input" value={password} validations={[required, validPassword]}/>
                        </div>

                        <div className="form-group">
                           <Input type="text" onChange={handleConfirmPassword} className="form-input" value={confirmPassword} validations={[required]}/>
                           {errorMessage && isDirty ? 
                              <div className="invalid">
                                 Password did not match
                              </div> : ""
                           }
                        </div>
                     
                        <button type="submit" className="btn btn-submit">Register</button>
                     </>
                  )}
               </Form>

               {message && (
                  <div className="form-group">
                      <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert" >
                          {message}
                     </div>
                  </div>
               )}
                    

               <div className="account">
                  <span>Already have an account?</span>
                  <Link to="/login">Log in</Link>
               </div>
            </div>
         </div>
      </> 
   )  
 }
 
 export default Register