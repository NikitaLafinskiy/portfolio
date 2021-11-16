import React from 'react';
import '../../Styles/Pages/Landing.css';
import img from '../../background-curves/blob-scene.svg';

export default function LandingProfile() {
  return (
    <>
      <div id='profile'>
        <img src={img} alt='blobs' id='bg' />
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
