import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Pages/Projects.css';

const gsap = window.gsap;
export default function ProjectsList({ projects, num }) {
  let listRef = useRef(null);
  useEffect(() => {
    console.log(listRef);
    console.log(gsap);

    gsap.to(listRef, { duration: 1, transform: 'translate(-50%,-50%)' });
  }, [null]);
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

  return (
    <div
      ref={(el) => {
        listRef = el;
      }}
      id='projectsWrapper'>
      {projectsArr}
    </div>
  );
}
