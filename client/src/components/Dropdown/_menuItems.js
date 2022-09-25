import { User } from "react-feather";

export const menuItems = [
   {
     title: <User />,
     url: '/profile',
     submenu: [
       {
         title: 'Login',
         url: 'login',
       },
       {
        title: 'Signup',
        url: 'signup',
      },
     ],
   },
 ];
 