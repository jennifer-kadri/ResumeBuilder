import React, { useState } from "react";
import { User } from "react-feather";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const MenuItems = ({ items }) => {
   const [dropdown, setDropdown] = useState(false);

   const handleHover = () => {
      window.innerWidth > 960 && setDropdown(true);
   }

   const handleLeave = () => {
      window.innerWidth > 960 && setDropdown(false);
   }
   return (
      <li className="menu-items" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
         {items.submenu ? (
            <>
               <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}
               >
                  {items.title}{" "}
               </button>
               <Dropdown submenus={items.submenu} dropdown={dropdown} />
            </>
         ) : (
            <a href={items.url}>{items.title}</a>
         )}
      </li>
   )
}

export default MenuItems;