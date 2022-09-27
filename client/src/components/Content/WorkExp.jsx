import React, { useState } from 'react'
import InputControl from '../InputControl';

export const WorkExpBody = (props) => {

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
         <h4>Work Experiences</h4>
         <div className="row">
            <InputControl 
               label="Title"
               placeholder="Enter title eg. Frontend Developer"
            />
            <InputControl 
               label="Company Name"
               placeholder="Enter company name"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Certificate Link"
               placeholder="Enter certificate link"
            />
            <InputControl 
               label="Location"
               placeholder="Enter location eg. Remote"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Start Date"
               type="date"
               placeholder="Enter start date of work"
            />
            <InputControl 
               label="End Date"
               type="date"
               placeholder="Enter end date of work"
            />
         </div>

         <div className="column">
            <label>Enter work description</label>
            <InputControl placeholder="Line 1" />
            <InputControl placeholder="Line 2" />
            <InputControl placeholder="Line 3" />
         </div>
      </div>
   )
}