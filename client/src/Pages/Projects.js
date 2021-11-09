import React from 'react';
import '../Styles/Pages/Projects.css';
import img from '../layered-waves-projects.svg';

const Projects = () => {
  const round = (word) => {
    const splitWord = word.split('');
    const rounded = splitWord.map((obj, i) => {
      const num = (i + 1) * 12;
      console.log(`rotate(${num}deg)`);
      return (
        <span
          key={i}
          style={{
            transform: `rotate(${num}deg)`,
            color: 'white',
            display: 'block',
            transformOrigin: 'bottom center',
            position: 'absolute',
            width: 2 + 'vw',
            height: '70vh',
            fontSize: 10 + 'vw',
          }}>
          {obj}
        </span>
      );
    });
    console.log(rounded);
    return rounded;
  };
  round('PROEECTS');

  return (
    <div id='projects-wrapper'>
      <img src={img} alt='projects bg' id='bg' />
      <div id='projects-header'>
        {/* <span style={{ color: 'white', transform: 'rotate(6deg)' }}>
          Projects
        </span> */}
        <div
          style={{
            transform: 'rotate(306deg)',
            borderRadius: '50%',
            width: 0 + 'vw',
            position: 'absolute',
            // top: '50%',
            // left: '50%',
            // top: 'calc(-50% - 100vh)',
            left: 0 + '%',
          }}>
          {round('PROJECTS')}
        </div>
      </div>
    </div>
  );
};

export default Projects;
