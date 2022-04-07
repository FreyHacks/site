import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Events = () => {
  return (
    <Zoom   >
    <div id='schedule' className='w-full flex flex-col items-center mt-12 sm:mt-32'>
      <div className=' flex flex-row-reverse sm:flex-row items-center m-0 sm:-ml-20 px-9'>
        <div className='w-32 h-32 -ml-10 sm:ml-0 sm:mr-4'>
        <object  data="svg/event.svg" /> 
        </div>
        <p className='text-5xl font-bold'>Event Schedule</p>
      </div>
      <div className='w-[83%] h-[475px] bg-white flex items-center'>
        <p className='w-full text-center text-2xl font-medium'>Coming Soon...</p>
      </div>
    </div>
    </Zoom>
  );
};

export default Events;
