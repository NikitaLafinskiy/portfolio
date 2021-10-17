import React from "react";
import Left from "../../Components/Sides/Left";
import Right from "../../Components/Sides/Right";
import Sidebar from "../../Components/Sidebar";
import LandingProfile from "./LandingProfile";
import "../../Styles/Pages/Landing.css";
import Main from "../../Components/Main";
import LandingCode from "./LandingCode";

const Landing = () => {
  return (
    <Main>
      <Left>
        <LandingProfile />
      </Left>
      <Right>
        <LandingCode />
      </Right>
    </Main>
  );
};

export default Landing;
