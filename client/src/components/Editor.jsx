import React, { useState } from 'react'
import InputControl from './InputControl';
import { X } from "react-feather";
// import styles from "./Editor.module.css";

const Editor = (props) => {
   const sections = props.sections;
   const information = props.information;

   const [activeSectionKey, setActiveSectionKey] = useState(
      Object.keys(sections)[0]
   );
   const [activeInformation, setactiveInformation] = useState(
      information[sections[Object.keys(sections)[0]]]
   );

   const [activeDetailIndex, setActiveDetailIndex] = useState(0);
   const [sectionTitle, setSectionTitle] = useState(
      sections[Object.keys(sections)[0]]
   )

   const [values, setValues] = useState({
      firstname: activeInformation?.detail?.firstname || "",
      lastname: activeInformation?.detail?.lastname || "",
      title: activeInformation?.detail?.title || "",
      linkedin: activeInformation?.detail?.linkedin || "",
      github: activeInformation?.detail?.github || "",
      phone: activeInformation?.detail?.phone || "",
      email: activeInformation?.detail?.email || "",
   });

   const handlePointUpdate = (value, index) => {
      const tempValues = { ...values };
      if (!Array.isArray(tempValues.points)) tempValues.points = [];
      tempValues.points[index] = value;
      setValue(tempValues);
   }

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

   /** PROJECT DATA **/
   const infoBody = (
      <div className="detail">
         <h4>Personal Informations</h4>
         <div className="row">
            <InputControl 
               label="Firstname*"
               placeholder="Enter your firstname"
               required="required"
            />
            <InputControl 
               label="Lastname"
               placeholder="Enter your lastname"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Title"
               placeholder="Enter your title eg. Frontend Developer"
            />
            <InputControl 
               label="Location"
               placeholder="Enter your location"
            />
         </div>
         <div className="row">
            <InputControl 
               label="Email Address"
               placeholder="Enter your email address"
            />
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
            <InputControl 
               label="Github Link"
               placeholder="Enter your github profile link"
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
         case sections.techno:
            return techBody;
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
            value={sectionTitle}
            onChange={(event) => setSectionTitle(event.target.value)}
         />

         <div className="chips">
            {activeInformation?.details
               ? activeInformation?.details.map((item, index) => (
                  <div 
                     className={`chip ${activeDetailIndex === index ? "active" : ""}`}
                     key={item.title + index}
                     onClick={() => setActiveDetail(index)}
                  >
                     <p>{sections[activeSectionKey]} {index + 1}</p>
                     <X
                        onClick={(event) => {
                           event.stopPropagation();
                           handleDeleteDetail(index);
                        }}
                     />
                </div>
              ))
            : ""}
          {activeInformation?.details &&
          activeInformation?.details?.length > 0 ? (
            <div className="new" onClick={handleAddNew}>
              +New
            </div>
          ) : (
            ""
          )}
        </div>

        {generateBody()}
      
         <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  )
}

export default Editor