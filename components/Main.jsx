import React from 'react';
import Footer from './Footer';
import Info from './Info';
import Events from './Events';
import Sponsors from './Sponsors';
const Main = () => {
  return( 
      <div className='bg-transparent h-full w-full flex flex-col items-center pt-10'>
        <Info/>
        <Events/>
        <Sponsors/>
        <Footer/>
      </div>
  );
};

export default Main;
