import React from "react";
import "../Styles/Sidebar.css";

export default function Left(props) {
  return (
    <div style={props.styles} id='menu-sidebar'>
      {props.children}
    </div>
  );
}
