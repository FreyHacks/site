import React,{useEffect,useState} from 'react';
import Zoom from 'react-reveal/Zoom';
import jstz from 'jstz';
const Events = () => {
  const [tz, settz] = useState('')
  useEffect(() => {
    settz(encodeURIComponent(jstz.determine().name()))
  }, [])
  
  return (
    <Zoom   >
    <div id='schedule' className='w-full flex flex-col items-center mt-12 sm:mt-32'>
      <div className=' flex flex-row-reverse sm:flex-row items-center m-0 sm:-ml-20 px-9'>
        <div className='w-32 h-32 -ml-10 sm:ml-0 sm:mr-4'>
        <object  data="svg/event.svg" /> 
        </div>
        <p className='text-5xl font-bold'>Event Schedule</p>
      </div>
      <div className=' w-[83%] h-[475px] bg-white   items-center px-3  '>
      <iframe 
      src={`https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffc000&ctz=${tz}&title=FreyHacks%20Schedule&mode=AGENDA&showNav=0&showDate=0&showTabs=0&showPrint=0&showCalendars=0&showTitle=0&src=Y19vNHY3YTY3YTNobXY1cjJkN3M2MnVkN2lxMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F09300`} 
      width="100%" 
      height="100%" 
      frameborder="0" 
      scrolling="no"/>
        {/* <div className='col-span-6 md:col-span-3 xl:col-span-2 h-full flex flex-col items-center mb-0 '>
          <div className='w-full sticky top-0 bg-white'>
          <p className='text-2xl font-medium text-orange-400'>24 June 2021</p>
          <div className='bg-orange-400 w-[80%] h-0.5 mb-1'></div>
          </div>
          <div className='w-[70%] flex flex-col items-center px-1 py-1  flex-grow'>
            <div className='w-full flex flex-wrap justify-between'>
              <p className='w-[30%] text-xl font-medium mb-0'>12:00</p>
              <p className='w-[70%] text-xl font-medium mb-0'>Workshop</p>
              <p className='w-full text-lg font-light mt-0'>description</p>
            </div>
            <div className='w-full flex flex-wrap justify-between'>
              <p className='w-[30%] text-xl font-medium mb-0'>12:00</p>
              <p className='w-[70%] text-xl font-medium mb-0'>Workshop</p>
              <p className='w-full text-lg font-light mt-0'>description</p>
            </div>
            <div className='w-full flex flex-wrap justify-between'>
              <p className='w-[30%] text-xl font-medium mb-0'>12:00</p>
              <p className='w-[70%] text-xl font-medium mb-0'>Workshop</p>
              <p className='w-full text-lg font-light mt-0'>description</p>
            </div>
            <div className='w-full flex flex-wrap justify-between'>
              <p className='w-[30%] text-xl font-medium mb-0'>12:00</p>
              <p className='w-[70%] text-xl font-medium mb-0'>Workshop</p>
              <p className='w-full text-lg font-light mt-0'>description</p>
            </div>
            <div className='w-full flex flex-wrap justify-between'>
              <p className='w-[30%] text-xl font-medium mb-0'>12:00</p>
              <p className='w-[70%] text-xl font-medium mb-0'>Workshop</p>
              <p className='w-full text-lg font-light mt-0'>description</p>
            </div>
            <div className='w-full flex flex-wrap justify-between'>
              <p className='w-[30%] text-xl font-medium mb-0'>12:00</p>
              <p className='w-[70%] text-xl font-medium mb-0'>Workshop</p>
              <p className='w-full text-lg font-light mt-0'>description</p>
            </div>
            
          </div>
        </div> */}

       
  
        
        {/* <p className='w-full text-center text-2xl font-medium'>Coming Soon...</p> */}
      </div>
    </div>
    </Zoom>
  );
};

export default Events;
