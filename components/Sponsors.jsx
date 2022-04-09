import React from 'react';
import data from '../lib/sponsor.js';
const Sponsors = () => {
	const classes=[
		' top-[45%] right-[10%]',
		'top-[60%] left-[17%]',
		'top-[35%] left-[30%] ',
		'top-64 right-[30%]',
		'bottom-20 right-[15%]'

	]
  return (
    <div id='sponsors' className='mt-40 w-full flex flex-col relative '>
			<div className='w-full '>  
				<object   className='w-[140%] -ml-28 sm:ml-0 sm:w-full' data='svg/sponsor1.svg' /> 
			</div>
			<div className='bg-gradient-to-b from-[#FFD463] to-[#FFE192] w-full min-h-[600px] -mt-1.5 xl:-mt-7'>
					<p className='text-2xl sm:text-5xl font-bold text-center :-mt-10'>Our Sponsors</p>
					<div className=' flex items-center justify-around flex-wrap gap-8 px-10 my-10 mx-auto'>
						{data.map((a,n)=><a key={n} href={a.link} className='w-[350px]'><object  data={`svg/${a.svg}.svg`}  width="100%"> </object></a>)}
					</div>
			</div>
			<div className='w-full'>
				<object  className='w-[140%] -ml-28 sm:ml-0 sm:w-full z-800' data='svg/sponsor2.svg' /> 
			</div>
			
			{classes.map(a=><object key={a} className={'absolute w-[18px] sm:w-[33px] '+a}  data='svg/star.svg' /> )}
			
    </div>
    );
};

export default Sponsors;
