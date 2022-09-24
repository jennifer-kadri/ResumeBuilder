import React from "react";
import { ArrowDown } from "react-feather";
import Editor from "./Editor";

const Body = () => {

   const sections = {
      basicInfo: "Personal Infos",
      workExp: "Work Experience",
      project: "Projects Developed",
      education: "Education Details",
      achievements: "Achievements",
      extra: "Other",
   };

   const colors = ["239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
   
  return (
      <div className="body container">
         <p className="heading">Try it now</p>
         <div className="toolbar">
            <div className="colors">
               {colors.map((item) => ( 
                     <span
                        key={item}
                        style={{ backgroundColor: item }}
                        className="color"
                     />
                  ))}
            </div>
            <button>Download CV <ArrowDown /></button>
         </div>
         <div className="main">
            <Editor sections={sections} />
         </div>
      </div>
  )
}

export default Body