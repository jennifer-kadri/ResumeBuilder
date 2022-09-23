import React, { useState } from 'react'
import InputControl from './InputControl';
import WorkExpData from './WorkExpData';

const Editor = (props) => {

   const sections = props.sections;

   const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]
   );

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
               label="Location"
               placeholder="Enter location eg. Remote"
            />
         </div>
      </div>
   )

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
      </div>
    </div>
  )
}

export default Editor