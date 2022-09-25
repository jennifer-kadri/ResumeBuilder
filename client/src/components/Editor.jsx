import React, { useState } from 'react'
import InputControl from './InputControl';

const Editor = (props) => {

   const sections = props.sections;

   const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]
   );

   /** WORK DATA **/
   const workExpBody = (
      <div className="detail">
         <div className="row">
            <InputControl 
               label="Title"
               placeholder="Enter title eg. Frontend Developer"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Company Name"
               placeholder="Enter company name eg. YoungTechBusiness"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Certificate Link"
               placeholder="Enter certificate link"
            />
         </div>
         <div className="row">
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
         </div>
         <div className="row">
            <InputControl 
               label="End Date"
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
         <div className="row">
            <InputControl 
               label="Title"
               placeholder="Enter title eg. Chat Application"
            />
         </div>
         <div className="row">
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
         </div>
         <div className="row">
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
         </div>
      </div>
   )

   /** EDUCATION DATA **/
   const eduBody = (
      <div className="detail">
         <div className="row">
            <InputControl 
               label="Title"
               placeholder="Enter title eg. Education"
            />
         </div>
            <InputControl 
               label="College/School Name"
               placeholder="Enter name of your college/school"
            />
         <div className="row">
            <InputControl 
               label="Start Date"
               placeholder="Enter start date this education"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Location"
               placeholder="Enter end date of this education"
            />
         </div>
      </div>
   )

   /** PROJECT DATA **/
   const infoBody = (
      <div className="detail">
         <div className="row">
            <InputControl 
               label="Firstname"
               placeholder="Enter your firstname"
            />
            <InputControl 
               label="Lastname"
               placeholder="Enter your lastname"
            />
            <InputControl 
               label="Title"
               placeholder="Enter your title eg. Frontend Developer"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Email Address"
               placeholder="Enter your email address eg. miyudev@mail.com"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Mobile Number"
               placeholder="Enter your phone number"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Linkedin Link"
               placeholder="Enter your linkedin profile link"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Github Link"
               placeholder="Enter your github profile link"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Location"
               placeholder="Enter Github link of project"
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

    /** PROJECT DATA **/
    const techBody = (
      <div className="detail">
         <div className="row">
            <InputControl 
               label="Skill 1"
               placeholder="Enter your skills"
            />
            <InputControl 
               label="Skill 2"
               placeholder="Enter your skills"
            />
            <InputControl 
               label="Skill 3"
               placeholder="Enter your skills"
            />
            <InputControl 
               label="Skill 4"
               placeholder="Enter your skills"
            />
            <InputControl 
               label="Skill 5"
               placeholder="Enter your skills"
            />
            <InputControl 
               label="Skill 6"
               placeholder="Enter your skills"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Interest 1"
               placeholder="Enter your skills"
            />
            <InputControl 
               label="Interest 2"
               placeholder="Enter your skills"
            />
            <InputControl 
               label="Interest 3"
               placeholder="Enter your skills"
            />
            <InputControl 
               label="Interest 4"
               placeholder="Enter your skills"
            />
            <InputControl 
               label="Interest 5"
               placeholder="Enter your skills"
            />
            <InputControl 
               label="Interest 6"
               placeholder="Enter your skills"
            />
         </div>
      </div>
   )

   const generateBody = () => {
      switch(sections[activeSection]) {
         case sections.basicInfo:
            return infoBody;
         case sections.workExp:
            return workExpBody;
         case sections.project:
            return projectBody;
         case sections.education:
            return eduBody;
         case sections.techno:
            return techBody;
            default: return null;
      }
   };

  return (
    <div className="editor container">
      <div className="header">
         {Object.keys(sections)?.map((key) => (
            <div 
               className={`"section" ${activeSection === key ? "active" : " "}`} 
               key={key}
               onClick={() => setActiveSection(key)}
            >
               {sections[key]}
            </div>
         ))}
      </div>

      <div className="body">
         <InputControl 
            label="Title" 
            placeholder="Enter your title" 
         />
         {generateBody()}
      </div>
    </div>
  )
}

export default Editor