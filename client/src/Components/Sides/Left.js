import React from "react";
import "../../Styles/Sides.css";

export default function Left(props) {
  return (
    <div style={props.styles} id='left-side-bar'>
      {props.children}
    </div>
  );
}
