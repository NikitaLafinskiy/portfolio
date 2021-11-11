import React from "react";
import "../../Styles/Pages/Landing.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/yonce.css";
import "codemirror/mode/jsx/jsx";
import { Controlled as Code } from "react-codemirror2";

export default function LandingProfile() {
  const options = {
    lineWrapping: true,
    lint: true,
    mode: "jsx",
    lineNumbers: true,
    theme: "yonce",
  };
  const value = `
  import React from "react";
  import Left from "../../Components/Sides/Left";
  import Right from "../../Components/Sides/Right";
  import Sidebar from "../../Components/Sidebar";
  import LandingProfile from "./LandingProfile";
  import "../../Styles/Pages/Landing.css";
  import Main from "../../Components/Main";
  import LandingCode from "./LandingCode";
  import "../../Styles/Pages/Landing.css";
  import "codemirror/lib/codemirror.css";
  import "codemirror/theme/yonce.css";
  import "codemirror/mode/jsx/jsx";
  import { UnControlled as Code } from "react-codemirror2";

  const Landing = () => {

    const options = {
      lineWrapping: true,
      lint: true,
      mode: "jsx",
      lineNumbers: true,
      theme: "yonce",
    };

    return (
      <Main>
        <Left>
        <>
        <div id='profile'>
          <div id='profile-heading'>Nikita Lafinskiy</div>
          <div id='profile-about'>
            Student of the Kyiv Institute of International Relations. I love
            coding , and I aspire to become a great developer. I currently code
            every day developing projects.
          </div>
        </div>
      </>
        </Left>
        <Right>
        <>
        <Code className='codeMirror' options={options} value={value} />
      </>
        </Right>
      </Main>
    );
  };
  
  export default Landing;
  `;
  return <Code className='codeMirror' options={options} value={value} />;
}
