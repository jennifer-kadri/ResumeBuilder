import React, { useState } from 'react'
import InputControl from './InputControl';

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