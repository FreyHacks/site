import React from 'react';
import data from '../lib/sponsor.js';
import datac from '../lib/communitypartner'
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
					<p className='text-2xl sm:text-5xl font-bold text-center '>Our Sponsors</p>
					<div className=' flex flex-col items-center justify-around flex-wrap gap-x-8 gap-y-8 sm:gap-y-12 px-10 mt-12 mb-10 mx-auto'>
						<a  href='https://mlh.io/' target="_blank" className=' z-10 flex flex-col items-center w-[90%] sm:w-[35%]'><img  className='-z-10 '  src='/svg/mlh-logo-color.svg'  width="90%"/></a>
					</div>
					<div className=' flex flex-col items-center justify-around flex-wrap gap-x-8 gap-y-8 sm:gap-y-12 px-10 mt-10 mb-10 mx-auto'>
						{data.map((a,n)=>(a.size==="md"||a.size==="lg")&&<a key={n} href={a.link} target="_blank" className={' z-10 flex flex-col items-center '+(a.size==="md"?"w-[90%] sm:w-[34%]":"w-[90%] sm:w-[40%]")}><img  className='-z-10 '  src={`svg/${a.svg}`}  width="90%"/></a>)}
					</div>
					<div className=' flex items-center justify-around flex-wrap gap-x-8 gap-y-8 sm:gap-y-10 px-10 mb-10 mx-auto'>
						{data.map((a,n)=>a.size==="sm"&&<a key={n} href={a.link} target="_blank" className=' z-10 flex flex-col items-center justify-center w-[44%] sm:w-[25%] xl:w-[20%]  overflow-hidden'><img  className='-z-10 '  src={`svg/${a.svg}`}  width="90%"/></a>)}
					</div>
					<p className='text-2xl sm:text-[2.5rem] font-bold text-center mt-20 xl:mt-28'>Our Community partners</p>
					<div className=' flex items-center justify-around flex-wrap gap-x-8 gap-y-8 sm:gap-y-10 px-10 mt-10 mb-10 mx-auto '>
						{datac.map((a,n)=><a key={n} href={a.link} target="_blank" className=' z-10 flex flex-col items-center w-[44%] sm:w-[25%] xl:w-[20%]'><img  className='-z-10 '  src={`svg/${a.svg}`}  width="90%"/></a>)}
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
