import React, { useState } from "react";
import ResumeService from "../Axios/resume.service";
import InputControl from "../InputControl";

export const InfoBody = (props) => {

   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [title, setTitle] = useState("");
   const [location, setLocation] = useState("");
   const [linkedin, setLinkedin] = useState("");
   const [github, setGithub] = useState("");

   const [message, setMessage] = useState("");
   const [successful, setSuccessful] = useState(false);
   const [errorMessage, setErrorMessage] = useState(false);


   const handleFirstname = (event) => {
      setFirstname(event.target.value);
   };

   const handleLastname = (event) => {
      setLastname(event.target.value)
   };

   const handleEmail = (event) => {
      setEmail(event.target.value);
   };

   const handlePhone = (event) => {
      setPhone(event.target.value);
   };

   const handleTitle = (event) => {
      setTitle(event.target.value)
   };

   const handleLocation = (event) => {
      setLocation(event.target.value);
   };

   const handleLinkedin = (event) => {
      setLinkedin(event.target.value);
   }

   const handleGithub = (event) => {
      setGithub(event.target.value);
   }

   const handleSubmit = (event) => {
     event.preventDefault();

     setMessage("");
     setSuccessful(false);

     if (!errorMessage) {
        ResumeService.create(firstname, lastname, email, phone, title, location, linkedin, github).then(
           (response) => {
              console.log(response.data.message);
              setMessage(response.data.message);
              setSuccessful(true);
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

      <div className="detail">
         <h4>Personal Informations</h4>
         <div className="row">
            <InputControl 
               label="Firstname*"
               placeholder="Enter your firstname"
               value={firstname}
               onChange={handleFirstname}
            />
            <InputControl 
               label="Lastname"
               placeholder="Enter your lastname"
               value={lastname}
               onChange={handleLastname}
            />
         </div>
         <div className="row">
            <InputControl 
               label="Title"
               placeholder="Enter your title eg. Frontend Developer"
               value={title}
               onChange={handleTitle}
            />
            <InputControl 
               label="Location"
               placeholder="Enter your location"
               value={location}
               onChange={handleLocation}
            />
         </div>
         <div className="row">
            <InputControl 
               label="Email Address"
               placeholder="Enter your email address"
               value={email}
               onChange={handleEmail}
            />
            <InputControl 
               label="Mobile Number"
               placeholder="Enter your phone number"
               value={phone}
               onChange={handlePhone}
            />
         </div>
         <div className="row">
            <InputControl 
               label="Linkedin Link"
               placeholder="Enter your linkedin profile link"
               value={linkedin}
               onChange={handleLinkedin}
            />
            <InputControl 
               label="Github Link"
               placeholder="Enter your github profile link"
               value={github}
               onChange={handleGithub}
            />
         </div>

         <div className="column">
            <label>Enter your bio description</label>
            <InputControl placeholder="Line 1" />
            <InputControl placeholder="Line 2" />
            <InputControl placeholder="Line 3" />
         </div>

         <button onClick={handleSubmit}>Save</button>

      </div>
   )
}