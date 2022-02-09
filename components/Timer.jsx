import React, { useLayoutEffect } from 'react';
import { useTimer } from  "reactjs-countdown-hook";

const timer = () => {
  const d=()=>{
    var t1 = new Date();
    var t2 = new Date(2022,7,15, 0, 0, 0, 0);
    var dif = t1.getTime() - t2.getTime();
    var Seconds_from_T1_to_T2 = dif / 1000;
    return Math.round(Math.abs(Seconds_from_T1_to_T2));
  }
  
  const{days,minutes,hours} = useTimer(d())
  return( 
    <div className='w-full flex flex-col items-center text-white -ml-[100%] mt-16'>
    <p className='text-4xl md:text-5xl font-bold text-center py-2 md:py-4'>Countdown</p>
    <div className='border-white border-2 h-20 md:h-28 w-3/4 md:w-1/2 flex flex-wrap items-center justify-between px-4 md:px-8  font-medium'>
      <div className='flex flex-col items-center'>
        <p className='text-3xl md:text-5xl'>{days}</p>
        <p className='text-lg md:text-3xl'>days</p>
      </div>
      <p className='text-5xl'> : </p>
      <div className='flex flex-col items-center'>
        <p className='text-3xl md:text-5xl'>{hours}</p>
        <p className='text-lg md:text-3xl'>hours</p>
      </div>
      <p className='text-5xl'> : </p>
      <div className='flex flex-col items-center'>
        <p className='text-3xl md:text-5xl'>{minutes}</p>
        <p className='text-lg md:text-3xl'>minutes</p>
      </div>
    </div>
  </div>
  );
};

export default timer;
