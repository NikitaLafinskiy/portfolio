import React, { useState, useEffect } from "react";
import "../Styles/Pages/Projects.css";

export default function ProjectsList({ projects, num }) {
  const arr = [projects[num], projects[parseInt(num) + 1]];
  const projectsArr = arr.map((obj, i) => {
    return (
      <div key={i} className='listElement'>
        <div className='topWrapper'>
          <h1 className='elementHeader'>{obj.title}</h1>
          <div className='imgOverflow'></div>
          <img
            className='elementImg'
            src={obj.img}
            alt='preview of the projects'
          />
        </div>
        <p className='elementP'> {obj.description}</p>
      </div>
    );
  });

  return <div id='projectsWrapper'>{projectsArr}</div>;
}
