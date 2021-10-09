import React from "react";
import "../Styles/Sidebar.css";

export default function Left(props) {
  return (
    <div style={props.styles} id='menu-sidebar'>
      <img id='sidebar-icon' src='/images/projects.png' alt='Projects' />
      <img id='sidebar-icon' src='/images/info.png' alt='Info' />
    </div>
  );
}
