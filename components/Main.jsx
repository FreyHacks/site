import React from 'react';
import Footer from './Footer';
import Info from './Info';
import Events from './Events';
import Sponsors from './Sponsors';
import Faq from './Faq';
import Hero from './Hero';
import { Element } from 'react-scroll';



const Main = () => {

  return( 
      <div className=' bg-transparent subpixel-antialiased h-full w-full mt-14 sm:mt-0 flex flex-col items-center pt-0 sm:pt-10'>
        <Element name='home' className='w-full flex-col flex items-center'><Hero/></Element>
        <Element name='about' className='w-full flex-col flex items-center'><Info/></Element>
        <Element name='events' className='w-full flex-col flex items-center'> <Events/></Element>
        <Element name='sponsors' className='w-full flex-col flex items-center'> <Sponsors/></Element>
        <Faq/>
        <Footer r={false}/>
      </div>
  );
};

export default Main;
