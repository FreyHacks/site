import React from 'react';
import data from "../lib/footer"
import { scroller } from 'react-scroll';
import { useRouter } from 'next/router';


const Footer = ({r}) => {
	const router=useRouter()
	const handle=(a,b)=>{
		if (r){
      a==='privacy'?router.push('/privacy'):router.push(`/#${a}`)
    }else{
			a==='privacy'?router.push('/privacy'):scroller.scrollTo(a, {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId:'contain',
			offset: a==='sponsors' ? 400 : 50,
    })}
  }
	return (
		<footer className='min-h-48 w-full pt-6 flex flex-col justify-center items-center  bg-white'>
			<div className=' w-full  flex justify-around items-center flex-col md:flex-row text-black font-sans  text-xl'>
				<div className='w-[80%] md:w-[30%] lg:w-[20%] mt-6 mb-4 sm:my-1 flex flex-col items-center'>
				<object  data="svg/logo.svg" /> 
				</div>
				<div className='flex justify-between flex-col md:flex-row flex-wrap w-[55%] items-center lg:items-start md:text-left text-center mt-1 sm:mt-0'>
					<div className="w-full md:w-[50%] lg:w-[28%]">
						<h1 className="title-font font-bold text-black  text-2xl mb-3">Socials</h1>
						<div className="list-none w-full mb-10">
							{data.socials.map(a=><div key={a.name}>
								<a href={a.link} className="hover:cursor-pointer text-black font-medium">{a.name}</a>
							</div>)}
							
						</div>
					</div>
					<nav className="w-full md:w-[50%] lg:w-[28%]">
						<h1 className="title-font font-bold text-black  text-2xl mb-3">Navigation</h1>
						<div className="list-none mb-10 flex flex-col  ">
						{data.nav.map(a=>
								<span key={a.name} onClick={()=>handle(a.link,a.offset)} className="hover:cursor-pointer text-black font-medium">{a.name}</span>
							)}
						</div>
					</nav>
					<nav className="w-full md:w-[50%] lg:w-[28%]">
						<h1 className="title-font font-bold text-black text-2xl mb-3">Contact Us</h1>
						<div className="list-none mb-10">
							{data.contact.map(a=><div key={a}>
								<span  className="text-black text-center font-medium text-xl">{a}</span>
							</div>)}
						</div>
					</nav>
				</div>
			</div>
			<div className='flex space-x-8 items-center pb-4'>
				<a href='https://bank.hackclub.com/'><object data="svg/hackclubbank.svg" height="40"> </object></a>
				<a href='https://www.vercel.com'><object  data="svg/vercel.svg"  height="30"> </object></a>
			</div>
		</footer>
	);
};

export default Footer;
