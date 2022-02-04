import React from 'react';
import Footer from './Footer';
import Info from './Info';
import Events from './Events';
import Sponsors from './Sponsors';
import Faq from './Faq';
import Hero from './Hero';
const Main = () => {
  return( 
      <div className='bg-transparent h-full w-full flex flex-col items-center pt-3 sm:pt-10'>
        <Hero/>
        <Info/>
        <Events/>
        <Sponsors/>
        <Faq/>
        <Footer/>
      </div>
  );
};

export default Main;
