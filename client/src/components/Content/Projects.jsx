import React, { useState } from 'react'
import InputControl from '../InputControl';

export const ProjectBody = (props) => {

   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [title, setTitle] = useState("");
   const [location, setLocation] = useState("");
   const [linkedin, setLinkedin] = useState("");
   const [github, setGithub] = useState("");

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

   const handleSubmit = () => {
      console.log("it works");
   }

   return (

      <div className="detail">
         <h4>Projects Details</h4>
         <div className="row">
            <InputControl 
               label="Title"
               placeholder="Enter title eg. Chat Application"
            />
            <InputControl 
               label="Overview"
               placeholder="Enter basic overview of project"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Deployed Link"
               placeholder="Enter deployment link if existing"
            />
            <InputControl 
               label="Location"
               placeholder="Enter Github link of project"
            />
         </div>

         <div className="column">
            <label>Enter project description</label>
            <InputControl placeholder="Line 1" />
            <InputControl placeholder="Line 2" />
            <InputControl placeholder="Line 3" />
            <InputControl placeholder="Line 4" />
         </div>
      </div>
   )
}