import React from 'react';
import Nav from './Nav.jsx';
import Main from './Main.jsx';

const AppWrapper = () => {
  return (
    <div className='w-full h-full static bg-gradient-to-b from-[#FFD749] via-white to-[#57ACED] overflow-x-hidden overflow-y-scroll'>
      <div className='w-full h-16'>
        <Nav />
      </div>
      <div className='subpixel-antialiased w-full'>
        <Main/>
      </div>
    </div>
  );
};

export default AppWrapper;
