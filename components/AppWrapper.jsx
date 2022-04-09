import React from 'react'
import Nav from './Nav.jsx';
import Main from './Main.jsx';
// import { useState } from 'react';
// import OnImagesLoaded from 'react-on-images-loaded';

const AppWrapper = () => {
  // const [show, setshow] = useState('home');  
  return (
    // <OnImagesLoaded
    //   onLoaded={() => setshow(true)}
    //   onTimeout={() => setshow(true)}
    //   timeout={1000}
    // >
      <div  id='contain' className=' w-screen h-screen bg-gradient-to-b from-[#FFD749] via-white to-[#57ACED]  overflow-x-hidden overflow-y-scroll '>
        <Nav r={false} />
        <Main/>
      </div>
    // </OnImagesLoaded>
  ); 
};

export default AppWrapper;
