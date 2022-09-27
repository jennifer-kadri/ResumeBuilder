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