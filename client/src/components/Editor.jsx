import React, { useState } from "react";
import InputControl from "./InputControl";
import { InfoBody } from "./Content/Infos";
import { WorkExpBody } from "./Content/WorkExp";
import { ProjectBody } from "./Content/Projects";
import { EduBody } from "./Content/Education";
import { ExtraDetails } from "./Content/ExtraDetails";
import { X } from "react-feather";

const required = (value) => {
   if (!value) {
      return (
         <div className="error">
            This field is required.
         </div>
      );
   };
};

const Editor = (props) => {
   const sections = props.sections

   const [activeSectionKey, setActiveSectionKey] = useState(
      Object.keys(sections)[0]
    );

   const handleSubmit = () => {
      console.log("it works");
   }

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
            return <InfoBody />;
         case sections.workExp:
            return <WorkExpBody />;
         case sections.project:
            return <ProjectBody />;
         case sections.education:
            return <EduBody />;
         case sections.details:
            return <ExtraDetails />;
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
      
         <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  )
}

export default Editor