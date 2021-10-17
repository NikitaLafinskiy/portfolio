import React from "react";
import "../Styles/index.css";
import Sidebar from "./Sidebar";

export default function Main(props) {
  return <div id='main-wrapper'>{props.children}</div>;
}
