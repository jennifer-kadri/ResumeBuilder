import React, { useState } from 'react'
import InputControl from './InputControl';
import { X } from "react-feather";

const Editor = (props) => {
   const sections = props.sections

   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [title, setTitle] = useState("");
   const [location, setLocation] = useState("");
   const [linkedin, setLinkedin] = useState("");
   const [github, setGithub] = useState("");

   const [activeSectionKey, setActiveSectionKey] = useState(
      Object.keys(sections)[0]
    );

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

   /** PERSONAL INFO DATA **/
   const infoBody = (
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
      </div>
   )

   /** WORK DATA **/
   const workExpBody = (
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

   /** PROJECT DATA **/
   const projectBody = (
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

   /** EDUCATION DATA **/
   const eduBody = (
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

    /** DETAILS DATA **/
    const details = (
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

   const generateBody = () => {
      switch(sections[activeSectionKey]) {
         case sections.basicInfo:
            return infoBody;
         case sections.workExp:
            return workExpBody;
         case sections.project:
            return projectBody;
         case sections.education:
            return eduBody;
         case sections.details:
            return details;
            default: return null;
      }
   };

  return (
    <div className="editor">
      <div className="header">
         {Object.keys(sections)?.map((key) => (
            <div 
               className={`section ${activeSectionKey === key ? "active" : " "}`} 
               key={key}
               onClick={() => setActiveSectionKey(key)}
            >
               {sections[key]}
            </div>
         ))}
      </div>

      <div className="body">
         <InputControl 
            label="Section Title" 
            placeholder="Enter the section title" 
         />

        {generateBody()}
      
         <button>Save</button>
      </div>
    </div>
  )
}

export default Editor