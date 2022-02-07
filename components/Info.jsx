import React from 'react';
import data from "../lib/about.js"
const Info = () => {
  return (
    <div id='about' className='w-[70%] mt-10 sm:mt-20 py-4 text-lg'>
			{data.map(a=><div className={'w-full min-h-40 flex flex-col justify-around items-center mb-12 '+a.classes}>
				<div className='w-[300px] h-[280px]  mb-10  flex-none '>
					{a.svg}
				</div>
				<div className={'flex flex-col  '+a.classes2}>
					<h2 className='mb-2 text-3xl font-bold'>{a.head}</h2>
					<p className='max-w-[600px] '>{a.info}</p>
				</div>
			</div>)}
		
    </div>
  );
};

export default Info;
