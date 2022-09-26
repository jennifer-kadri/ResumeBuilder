import React from "react";
import { ArrowDown } from "react-feather";
import Editor from "../components/Editor";

const Create = () => {

   const sections = {
      basicInfo: "Infos",
      workExp: "Work",
      project: "Projects",
      education: "Education",
      techno: "Details",
   };

   const colors = ["239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
   
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
                        className="color"
                     />
                  ))}
            </div>
            <div className="show heading">
               <h1>Create your resume</h1>
            </div>
            <button>Download CV <ArrowDown /></button>
         </div>
         <div className="main">
            <Editor sections={sections} />
         </div>
      </div>
  )
}

export default Create