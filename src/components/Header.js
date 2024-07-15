import React from 'react';
import "./Header.css";
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return(
        <nav className="Header" >
            <NavLink to ="/" > Home </NavLink>
            <NavLink to ="/About" >About</NavLink>
            <NavLink to = "/Skills" >Skills</NavLink>
            <NavLink to = "/Projects" >Projects</NavLink>
            
        </nav>
    );
};
 export default Header;

  