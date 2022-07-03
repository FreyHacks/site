import data from '../lib/register'
import React, { useState } from 'react';
import {scroller} from 'react-scroll';
import { useRouter } from 'next/router';

const EmptyNav = ({external}) => {
  const [open, setopen] = useState(false);
  const router=useRouter()
  const handle=()=>{
    window.location.replace('/');
  }
  return (
    <div  className='z-[99999] sticky top-0 sm:static w-full h-20'>
      <div className='bg-white relative w-full flex justify-between items-center pr-8 py-1 sm:py-3'>
        <div className='w-[50%] md:w-[40%] my-2 sm:my-0 flex pl-5 items-center justify-start '>
          <object  data="../svg/logo.svg" width="300" height="60"/> 
        </div>
        <nav className={" md:flex  hidden  justify-between items-center font-semibold text-2xl align-middle "}>
          <span onClick={()=>handle("home")} className="text-black hover:cursor-pointer  w-20">Home</span>
        </nav>
        <nav className={'bg-white text-center text-black text-xl font-medium absolute top-20 right-0 flex py-4 items-center justify-around w-full '+(open?' block ':' hidden')}>
          <span onClick={handle} >Home</span>
        </nav>
      </div>
    </div>
  );
};

export default EmptyNav;