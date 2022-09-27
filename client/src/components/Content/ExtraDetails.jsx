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
         <h4>Skills / Languages</h4>
         <div className="row">
            <InputControl 
               label="Skill 1"
               placeholder="Enter your skill"
            />
            <InputControl 
               label="Skill 2"
               placeholder="Enter your skill"
            />
            <InputControl 
               label="Skill 3"
               placeholder="Enter your skill"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Skill 4"
               placeholder="Enter your skill"
            />
            <InputControl 
               label="Skill 5"
               placeholder="Enter your skill"
            />
            <InputControl 
               label="Skill 6"
               placeholder="Enter your skill"
            />
         </div>
         <h4>Interests / Hobbies </h4>
         <div className="row">
            <InputControl 
               label="Interest 1"
               placeholder="Enter your interest"
            />
            <InputControl 
               label="Interest 2"
               placeholder="Enter your interest"
            />
            <InputControl 
               label="Interest 3"
               placeholder="Enter your interest"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Interest 4"
               placeholder="Enter your interest"
            />
            <InputControl 
               label="Interest 5"
               placeholder="Enter your interest"
            />
            <InputControl 
               label="Interest 6"
               placeholder="Enter your interest"
            />
         </div>
      </div>
   )
}