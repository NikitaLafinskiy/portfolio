import React from "react";
import "../Styles/Sidebar.css";
import { Link } from "react-router-dom";

export default function Left(props) {
  return (
    <div style={props.styles} id='menu-sidebar'>
      <Link to='/'>
        <img id='sidebar-icon' src='/images/home.png' alt='Home' />
      </Link>
      <Link to='/projects/0'>
        <img id='sidebar-icon' src='/images/projects.png' alt='Projects' />
      </Link>
      <Link to='/info'>
        <img id='sidebar-icon' src='/images/info.png' alt='Info' />
      </Link>
      <Link to='/contact'>
        <img id='sidebar-icon' src='/images/contact.png' alt='Contact' />
      </Link>
    </div>
  );
}
