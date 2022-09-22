import React from 'react'

const Body = () => {
   const colors = ["239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];

  return (
      <div className="body container">
         <p className="heading">Resume Builder</p>
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
         <button>Download CV</button>
         </div>
      </div>
  )
}

export default Body