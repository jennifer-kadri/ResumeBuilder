import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ submenus, dropdown }) => {
  return (
   <ul className={`dropdown ${dropdown ? "show" : ""} `}>
      {submenus.map((submenu, index) => {
         <li key={index} className="menu-items">
            <a href={submenu.url}>eeee</a>
         </li>
      })}
   </ul>
  )
}

export default Dropdown