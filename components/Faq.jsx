import React, { useState } from 'react';
import data from '../lib/faq';
import Bounce from 'react-reveal/Bounce';

const Faq = () => {
	const [open, setopen] = useState("")
	const handle=(a)=>{
		open===a?setopen(''):setopen(a)
	}
  return (
		<div className=' w-full flex   -mt-10 sm:-mt-40'>
			<div className='w-full flex flex-col items-center'>
				<object className='w-[500%] md:w-[200%] 2xl:w-[135%] z-99 '  data='svg/sunrise.svg' />
				<span className='bg-[#55ACEE] flex-grow w-full'></span>
			</div>

			<div className=' -ml-[100%] w-full flex flex-col items-center pt-20 pb-10 '>
				<p className='text-3xl sm:text-5xl text-center font-bold py-8 sm:py-20'>Frequently Asked Questions</p>
				<div   className='bg-white/25 w-[90%] border-t-[1.5px] border-black flex flex-col items-center'>
				<Bounce left >
					{data.map(a=><div key={a.head} className='w-full text-lg sm:text-xl border-b-[1.5px] border-black px-5 sm:px-8 '>
						<div onClick={()=>handle(a.head)} className='sm:text-2xl py-10 flex justify-between items-center'>
							<p>{a.head}</p>
							{open===a.head?
							<svg width="29" height="5" viewBox="0 0 29 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M22 0.5H7" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							:<svg className='sm:w-[30px] w-[23px] h-[23px] sm:h-[30px] ' viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M22.9584 13.2918H15.7084V6.04183C15.7084 5.72136 15.5811 5.41402 15.3545 5.18741C15.1279 4.9608 14.8205 4.8335 14.5 4.8335C14.1796 4.8335 13.8722 4.9608 13.6456 5.18741C13.419 5.41402 13.2917 5.72136 13.2917 6.04183V13.2918H6.04171C5.72124 13.2918 5.41389 13.4191 5.18729 13.6457C4.96068 13.8723 4.83337 14.1797 4.83337 14.5002C4.83337 14.8206 4.96068 15.128 5.18729 15.3546C5.41389 15.5812 5.72124 15.7085 6.04171 15.7085H13.2917V22.9585C13.2917 23.279 13.419 23.5863 13.6456 23.8129C13.8722 24.0395 14.1796 24.1668 14.5 24.1668C14.8205 24.1668 15.1279 24.0395 15.3545 23.8129C15.5811 23.5863 15.7084 23.279 15.7084 22.9585V15.7085H22.9584C23.2788 15.7085 23.5862 15.5812 23.8128 15.3546C24.0394 15.128 24.1667 14.8206 24.1667 14.5002C24.1667 14.1797 24.0394 13.8723 23.8128 13.6457C23.5862 13.4191 23.2788 13.2918 22.9584 13.2918Z" fill="black"/>
							</svg>}
						</div>
						{open===a.head?<div className='pb-8 '>{a.info}</div>:null}
					</div>)}
					</Bounce>
				</div>
			</div>
		</div>
  );
};

export default Faq;
