<<<<<<< HEAD
import React from 'react';
import '../../Styles/Pages/Landing.css';
import img from '../../blob-scene.svg';
=======
import React from "react";
import "../../Styles/Pages/Landing.css";
import img from "../../background-curves/blob-scene.svg";
>>>>>>> a5c495bc29fd46f9da9ab691f56eeebb0a6abfb0

export default function LandingProfile() {
  return (
    <>
      <div id='profile'>
<<<<<<< HEAD
        <img src={img} alt='blobs' id='landing-img' />
=======
        <img src={img} alt='blobs' id='bg' />
>>>>>>> a5c495bc29fd46f9da9ab691f56eeebb0a6abfb0
        <div id='profile-heading'>Nikita Lafinskiy</div>
        <div id='profile-about'>
          Student of the Kyiv Institute of International Relations. I love
          coding , and I aspire to become a great developer. I currently code
          every day developing projects.
        </div>
      </div>
    </>
  );
}
