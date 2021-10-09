import React from "react";
import Left from "../../Components/Sides/Left";
import Right from "../../Components/Sides/Right";
import Sidebar from "../../Components/Sidebar";
import LandingProfile from "./LandingProfile";
import "../../Styles/Landing/Landing.css";
import Main from "../../Components/Main";

const Landing = () => {
  return (
    <Main>
      <Sidebar>
        <h1>hello</h1>
        <h1>hello2</h1>
      </Sidebar>
      <Left>
        <LandingProfile />
      </Left>
      <Right>ass</Right>
    </Main>
  );
};

export default Landing;
