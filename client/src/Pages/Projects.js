import React from 'react';
import '../Styles/Pages/Projects.css';
import img from '../background-curves/layered-waves-projects.svg';

const Projects = () => {
  const round = (word) => {
    const splitWord = word.split('');
    const rounded = splitWord.map((obj, i) => {
      const num = obj === 'J' ? (i + 1) * 14 : (i + 1) * 13;
      console.log(`rotate(${num}deg)`);
      return (
        <span
          key={i}
          style={{
            transform: `rotate(${num}deg)`,
            color: 'rgba(255, 255, 255, 0.225)',
            display: 'block',
            transformOrigin: 'bottom center',
            position: 'absolute',
            width: 2 + 'vw',
            // height: "500px",
            height: '30vw',
            fontSize: 5 + 'vw',
          }}>
          {obj}
        </span>
      );
    });
    console.log(rounded);
    return rounded;
  };

  return (
    <div id='projects-wrapper'>
      <img src={img} alt='projects bg' id='bg' />
      <div id='projects-header'>
        {/* <span style={{ color: 'white', transform: 'rotate(6deg)' }}>
          Projects
        </span> */}
        <div id='header-wrapper'>{round('PROJECTS')}</div>
      </div>
    </div>
  );
};

export default Projects;
