import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useSelector } from "react-redux";

function Navbar() {
    const data = useSelector((state) => state.todo);
  return<nav className="nav">
    <Link to="/" className="title">Todo</Link>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
        <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li >
   <div style={{color:'white' }}>
     <> <NotificationsActiveIcon style={{color:'white'}}/>{data.length}</>
    </div>
      </li>
    </ul>
  </nav>
}

export default Navbar;
