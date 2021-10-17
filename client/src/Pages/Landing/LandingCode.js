import React from "react";
import "../../Styles/Pages/Landing.css";

export default function LandingProfile() {
  const keyWordsArr = [
    "import",
    "export",
    "const",
    "return",
    "var",
    "let",
    "style=",
    "from",
    "function",
    "if",
    "else",
    "else if",
    "default",
    "id=",
    "className=",
    "</div>",
    "<div>",
    "<>",
    "</>",
    "</h1>",
    "<h1>",
    "<p>",
    "</p>",
    "<span className={obj.color}>",
    "</span>",
  ];
  const punctuationMarksArr = ["(", ")", ";", ".", "{", "}", "[", "]", "()"];
  const numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const methods = ["split", "pop", "map", "includes"];

  const codeText = `import React from "react";
  import Left from "../../Components/Sides/Left";
  import Right from "../../Components/Sides/Right";
  import Sidebar from "../../Components/Sidebar";
  import LandingProfile from "./LandingProfile";
  import "../../Styles/Landing/Landing.css";
  import Main from "../../Components/Main";
  import LandingCode from "./LandingCode";
  
  ;
  const Landing = () => {;
    const codeTextArr = codeText.split(";");
    codeTextArr. pop ( );
    //console.log(codeTextArr);
    const res = codeTextArr. map ((obj) => {;
      const splitLine = obj. split (" ");
      //assigning_the_colors_to_each_element_of_the_array;
      const coloredCode = splitLine. map((obj) => {;
        if (keyWordsArr. includes (obj)) {;
          return {;
            val: obj,;
            color: "keyword",;
          };
        } else if (punctuationMarksArr. includes (obj) ) {;
          return {;
            val: obj,;
            color: "punctuation",;
          };
        } else if (numbersArr. includes (obj)) {;
          return { val: obj, color: "number" };
        } else if (obj. includes (\`"\`)) {;
          return {;
            val: obj,;
            color: "string",;
          };
        } else {;
          return {;
            val: obj,;
            color: "variable",
          };
        };
      });
  
      const jsxConverted = coloredCode. map ((obj) => {;
        //console.log(obj);
        return <span className={obj.color}> { obj.val + " " } </span>;
      });
      return [;
        <img;
          style={{;
            height: "20px",;
            margin: "0px 5px 0px 5px",;
            transform: "rotate(90deg)",;
          }};
          src='/images/line.png';
          alt='';
        />,;
        ...jsxConverted,;
        <br/>,;
      ];
    });
    //console.log(res);
    return (;
      <Main>;
        <Left>;
        <>;
        <div>;
          <h1> Nikita Lafinskiy </h1>;
          <p>;
            Student of the Kyiv Institute of International Relations. I love;
            coding , and I aspire to become a great developer. I currently code;
            every day developing projects.;
          </p>;
        </div>;
      </>;
        </Left>;
        <Right>;
         <div> { res } </div>;
        </Right>;
      </Main>;
    );
  };
  
  export default Landing;`;
  const codeTextArr = codeText.split(";");
  codeTextArr.pop();
  // console.log(codeTextArr);
  const res = codeTextArr.map((obj) => {
    const splitLine = obj.split(" ");
    //assigning the colors to each element of the array
    const coloredCode = splitLine.map((obj) => {
      if (keyWordsArr.includes(obj)) {
        return {
          val: obj,
          color: "keyword",
        };
      } else if (punctuationMarksArr.includes(obj)) {
        return {
          val: obj,
          color: "punctuation",
        };
      } else if (methods.includes(obj)) {
        return { val: obj, color: "method" };
      } else if (obj.includes("//")) {
        return { val: obj, color: "comment" };
      } else if (numbersArr.includes(obj)) {
        return { val: obj, color: "number" };
      } else if (obj.includes(`"`)) {
        return {
          val: obj,
          color: "string",
        };
      } else if (obj.includes("<")) {
        return { val: obj, color: "component" };
      } else {
        return {
          val: obj,
          color: "variable",
        };
      }
    });

    const jsxConverted = coloredCode.map((obj) => {
      // console.log(obj);
      return <span className={obj.color}> {obj.val + " "}</span>;
    });
    return [
      <img
        style={{
          height: "20px",
          margin: "0px 5px 0px 5px",
          transform: "rotate(90deg)",
        }}
        src='/images/line.png'
        alt=''
      />,
      ...jsxConverted,
      <br />,
    ];
  });
  // console.log(res);
  return <div style={{ color: "white" }}>{res}</div>;
}
