import React, { useState } from 'react'
import InputControl from '../InputControl';

export const EduBody = (props) => {

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
         <h4>Education Informations</h4>
         <div className="row">
            <InputControl 
               label="Title"
               placeholder="Enter title eg. Bachelor"
            />
            <InputControl 
               label="College/School Name"
               placeholder="Enter name of your college/school"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Start Date"
               type="date"
               placeholder="Enter start date this education"
            />
            <InputControl 
               label="End Date"
               type="date"
               placeholder="Enter start date this education"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Location"
               placeholder="Enter the location of this education"
            />
         </div>
      </div>
   )
}