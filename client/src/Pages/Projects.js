import React from 'react';
import '../Styles/Pages/Projects.css';
import img from '../background-curves/layered-waves-projects.svg';
import ProjectsList from '../Components/ProjectsList';
import { useHistory, useParams } from 'react-router';

const Projects = () => {
  const { push } = useHistory();
  const { num } = useParams();
  console.log(num);
  const round = (word) => {
    const splitWord = word.split('');
    const rounded = splitWord.map((obj, i) => {
      const num = obj === 'J' ? (i + 1) * 14 : (i + 1) * 13;
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
    return rounded;
  };
  const projectsObj = [
    {
      title: 'YouTube No Ads Player',
      link: '',
      img: '/images/caramel-player.png',
      description: 'wfeafdasdfae',
    },
    {
      title: 'Wallpaper Constructor',
      link: '',
      img: '',
      description: 'asdfasdfafw',
    },
    {
      title: 'Social Media',
      link: '',
      img: '',
      description: 'wefdsafawef',
    },
    {
      title: 'UpWork Tutorial',
      link: '',
      img: '',
      description: 'wafadsasaf',
    },
  ];
  return (
    <div id='projects-wrapper'>
      <ProjectsList num={num} projects={projectsObj} />
      <img src={img} alt='projects bg' id='bg' />
      <div id='projects-header'>
        <div id='header-wrapper'>{round('PROJECTS')}</div>
      </div>
    </div>
  );
};

export default Projects;
