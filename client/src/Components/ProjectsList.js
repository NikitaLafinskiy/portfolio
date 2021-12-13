import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Pages/Projects.css';
import { Link, useHistory } from 'react-router-dom';

const gsap = window.gsap;
export default function ProjectsList({ projects, num }) {
  const { go, push } = useHistory();
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

  const nextNum = projects[parseInt(num) + 2] ? parseInt(num) + 1 : 0;
  const prevNum = projects[parseInt(num) - 1]
    ? parseInt(num) + -1
    : projects.length / 2;
  const handleUpdate = () => {
    push(`/projects/${prevNum}`);
  };
  return (
    <div
      ref={(el) => {
        listRef = el;
      }}
      id='projectsWrapper'>
      <Link onClick={handleUpdate} to={`/projects/${prevNum}`}>
        <a>
          <img
            className='arrow-projects'
            id='leftArrow'
            src='/images/arrow.png'
            alt='previous'
          />
        </a>
      </Link>
      {projectsArr}
      <Link onClick={handleUpdate} to={`/projects/${nextNum}`}>
        <a>
          <img className='arrow-projects' src='/images/arrow.png' alt='next' />{' '}
        </a>
      </Link>
    </div>
  );
}
