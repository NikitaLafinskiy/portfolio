import React from "react";
import "../../Styles/Landing/Code.css";

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
    "",
  ];
  const punctuationMarksArr = ["(", ")", ";", ".", ",", "{", "}", "[", "]"];
  const numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const codeText = `import React from "react";import "../../Styles/Landing/Landing.css";export default function LandingProfile() {;
    return (;
      <>;
        <div id='profile'>;
          <h1> Nikita Lafinskiy </h1>;
          <div>;
            Student of the Kyiv Institute of International Relations. I love;
            coding , and I aspire to become a great developer. I currently code;
            every day developing projects.;
          </div>;
        </div>;
      </>;
    );
  };`;
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
      } else if (numbersArr.includes(obj)) {
        return { val: obj, color: "number" };
      } else if (obj.includes(`"`)) {
        return {
          val: obj,
          color: "string",
        };
      } else {
        return {
          val: obj,
          color: "variable",
        };
      }
    });

    const jsxConverted = coloredCode.map((obj) => {
      // console.log(obj);
      return <span className={obj.color}>{obj.val + " "}</span>;
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
  console.log(res);
  return <div style={{ color: "white" }}>{res}</div>;
}
