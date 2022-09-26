import React, { useState, useRef } from "react";
import { ArrowDown } from "react-feather";
import Editor from "../components/Editor";
import ReactToPrint from "react-to-print";

const Create = () => {
   const colors = ["239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];

   const sections = {
      basicInfo: "Infos",
      workExp: "Work",
      project: "Projects",
      education: "Education",
      details: "Details",
   };

   const resumeRef = useRef();

   const [activeColor, setActiveColor] = useState(colors[0]);
   const [resumeInformation, setResumeInformation] = useState({
      [sections.basicInfo]: {
        id: sections.basicInfo,
        sectionTitle: sections.basicInfo,
        detail: {},
      },
      [sections.workExp]: {
        id: sections.workExp,
        sectionTitle: sections.workExp,
        details: [],
      },
      [sections.project]: {
        id: sections.project,
        sectionTitle: sections.project,
        details: [],
      },
      [sections.education]: {
        id: sections.education,
        sectionTitle: sections.education,
        details: [],
      },
      [sections.details]: {
        id: sections.details,
        sectionTitle: sections.details,
        points: [],
      },
   });

   
  return (
      <div className="create container">
         <div className="toolbar">
            <div className="hide heading">
               <h1>Create your resume</h1>
            </div>
            <div className="colors">
               {colors.map((item) => ( 
                     <span
                        key={item}
                        style={{ backgroundColor: item }}
                        className={`color ${activeColor === item ? "active" : ""}`}
                        onClick={() => setActiveColor(item)}
                     />
                  ))}
            </div>
            <div className="show heading">
               <h1>Create your resume</h1>
            </div>
            <ReactToPrint
               trigger={() => {
                  return (
                  <button>
                     Download <ArrowDown />
                  </button>
                  );
               }}
               content={() => resumeRef.current}
            />
         </div>
         <div className="main">
            <Editor sections={sections} information={resumeInformation} setInformation={setResumeInformation} />
         </div>
      </div>
  )
}

export default Create