import React from 'react';
import NavBar from '../NavBar/NavBar'; 
import Slideshow from './Slideshow';

const Home = () => {
  return (
    <div className='home'>
      <NavBar /> 
      <h2 className='home-header'>Welcome to SAFIRI where all your travel wishes can come true </h2>
      <Slideshow />
    </div>
  );
};

export default Home;
