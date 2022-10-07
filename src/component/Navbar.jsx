import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useSelector } from "react-redux";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";

function Navbar() {
    const data = useSelector((state) => state.todo);
    const priority=data.filter((task)=>task.priority);
    const noPriority=data.filter((task)=>!task.priority)
  return<nav className="nav">
    <Link to="/" className="title">Todo</Link>
    <ul>
         <li >
   <div style={{color:'white' }}>
     <> <NotificationsActiveIcon style={{color:'lightblue'}}/>{data.length}</>  
    </div>
      </li>
      <li>
      <div style={{color:'white' }}>
          <> <GppMaybeIcon style={{color:'green' }}/>{noPriority.length}</>  
      </div>
      </li>
  
      <li>
      <div style={{color:'white' }}>
          <> <GppMaybeIcon style={{color:'darkred' }}/>{priority.length}</>  
      </div>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
        <li>
        <Link to="/contact">Contact</Link>
      </li>
        <li>
        <Link to="/analysis">Analysis</Link>
      </li>
      
    </ul>
  </nav>
}

export default Navbar;
