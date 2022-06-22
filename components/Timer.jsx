import React from 'react';
import { useTimer } from  "reactjs-countdown-hook";

const d=()=>{
  var t1 = new Date();
  var t2 = new Date(2022,5,24, 10, 0, 0, 0);
  var dif = t1.getTime() - t2.getTime();
  var Seconds_from_T1_to_T2 = dif / 1000;
  return Math.round(Math.abs(Seconds_from_T1_to_T2));
}
const a=d();

const timer = () => {
  
  const{days,minutes,hours,seconds} = useTimer(a)
  return( 
    <div 
     className='w-full flex flex-col items-center text-white -ml-[100%] mt-16 lg:mt-28'>
    {/* {days>=10?
    <p className='text-4xl  lg:text-5xl font-bold text-center py-2 lg:py-4'>{`${days} days to go...`}</p>
    :<> */}
    <p className='text-4xl  lg:text-5xl font-bold text-center -mt-2 pb-1'>Countdown</p>
    <div className='border-white border-2 lg:h-[100px] w-[90%] md:w-[65%] lg:w-[50%] flex flex-wrap items-center justify-between py-1 md:py-1.5 px-4 md:px-8  font-medium'>
      <div className='flex flex-col items-center'>
        <p className='my-0 text-2xl md:text-4xl lg:text-5xl'>{days}</p>
        <p className='my-0 text-md md:text-3xl'>days</p>
      </div>
      <p className='text-4xl sm:text-5xl sm:-mt-4'> : </p>
      <div className='flex flex-col items-center'>
        <p className='my-0 text-2xl md:text-4xl lg:text-5xl'>{hours}</p>
        <p className='my-0 text-md md:text-3xl'>hours</p>
      </div>
      <p className='text-4xl sm:text-5xl sm:-mt-4'> : </p>
      <div className='flex flex-col items-center'>
        <p className='my-0 text-2xl md:text-4xl lg:text-5xl'>{minutes}</p>
        <p className='my-0 text-md md:text-3xl'>minutes</p>
      </div>
      <p className='text-4xl sm:text-5xl sm:-mt-4'> : </p>
      <div className='flex flex-col items-center'>
        <p className='my-0 text-2xl md:text-4xl lg:text-5xl'>{seconds}</p>
        <p className='my-0 text-md md:text-3xl'>seconds</p>
      </div>
    </div>
    {/* </>
} */}
  </div>
  );
};

export default timer;
