import React from 'react';
import data from '../lib/register';
import Timer from "./Timer";

const Hero = () => {
	
  return (
    <div id='home' className='w-full mt-1 mb-3 sm:my-1'>
			<div className='flex flex-col lg:flex-row  items-center mt-10 sm:mt-0'>
				<div  className={'w-[70%] lg:w-[50%] xl:-mr-40 flex flex-col  items-center lg:ml-4 lg:-mt-28 xl:-mt-64 '+(data.open?" md:flex-row lg:flex-col":null)}>
					<object className='w-[80%] lg:h-[350px] mb-4 2xl:w-3/4 '  data="svg/herologo.svg"   /> 
					{data.open?
					<a href={data.link} className='xl:-ml-9 bg-gradient-to-b from-[#5BA558] flex flex-col items-center justify-center  hover:from-[#83C280] hover:to-[#5BA558] to-[#83C280] focus:ring-2 focus:ring-[#83C280] w-[200px] sm:w-[300px] h-16 sm:h-20 rounded-3xl lg:mt-10 text-3xl text-white font-extrabold'>
						Register
					</a>:null}
				</div>
				<div className='sm:h-[700px] w-[75%] mt-10 lg:mt-3 sm:ml-20 flex flex-col items-end justify-end'>
						<object className='w-full'  data="svg/boat.svg"   /> 
				</div>
			</div>
			<div className='w-full -mt-[25%] md:-mt-[150px] lg:-mt-[14%]  flex items-center'>
				<div className='w-full'>
				<object className='w-[230%] md:w-[130%] lg:w-[110%]'  data="svg/waves.svg"   /> 
				</div>
				<Timer/>
			</div>
			
    </div>
  );
};

export default Hero;
