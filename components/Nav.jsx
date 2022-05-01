import data from '../lib/register'
import React, { useState } from 'react';
import {scroller} from 'react-scroll';
import { useRouter } from 'next/router';

const Nav = ({external}) => {
  const [open, setopen] = useState(false);
  const router=useRouter()
  const handle=(a)=>{
    if (external){
      router.push(`/#${a}`)
    }else{
      scroller.scrollTo(a, {
        duration: 1500,
        delay: 100,
        smooth: true,
        containerId:'contain'
      })
      setopen(false);
    }
  }
  return (
    <div  className='z-[99999] sticky top-0 w-full h-20'>
      <div className='bg-white relative w-full flex justify-between items-center pr-8 py-1 sm:py-3'>
        <div className='w-[50%] md:w-[40%] my-2 sm:my-0 flex pl-5 items-center justify-start '>
          <object  data="svg/logo.svg" width="300" height="60"/> 
        </div>
        <nav className={" md:flex  hidden  justify-between items-center font-semibold text-2xl align-middle "+(data.open?" w-[70%] md:w-[60%] lg:w-[45%]":"md:w-1/2 lg:w-[30%]")}>
          <span onClick={()=>handle("home")} className="text-black hover:cursor-pointer  w-20">Home</span>
          <span onClick={()=>handle("about")} className="text-black hover:cursor-pointer  w-20">About</span>
          <span onClick={()=>handle("events")} className="text-black  hover:cursor-pointer w-24">Schedule</span>
          {data.open?<a href={data.link} className=' bg-gradient-to-b from-[#5BA558] hover:from-[#83C280] hover:to-[#5BA558] to-[#83C280] focus:ring-2 focus:ring-[#83C280]  text-medium font-medium  text-white rounded-2xl py-2 px-4 lg:px-7'>Register</a>:null}
        </nav>
        <div onClick={()=>setopen(!open)} className='block md:hidden h-10 w-10 '>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/>
        </svg>
        </div >
        <nav className={'bg-white text-center text-black text-xl font-medium absolute top-20 right-0 flex py-4 items-center justify-around w-full '+(open?' block ':' hidden')}>
          <span onClick={()=>handle("home")} >Home</span>
          <span onClick={()=>handle("about")} >About</span>
          <span onClick={()=>handle("events")} >Schedule</span>
        </nav>
      </div>
    </div>
  );
};

export default Nav;