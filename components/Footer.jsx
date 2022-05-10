import React from 'react';
import data from "../lib/footer"
import { scroller } from 'react-scroll';
import { useRouter } from 'next/router';


const Footer = ({external}) => {
	const router=useRouter()
	const handle=(a,b)=>{
		if (external){
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
				<div className='w-[80%] md:w-[target="_blank"%] lg:w-[20%] mt-6 mb-4 sm:my-1 flex flex-col items-center'>
				<object  data="svg/logo.svg" /> 
				</div>
				<div className='flex justify-between flex-col md:flex-row flex-wrap w-[55%] items-center lg:items-start md:text-left text-center mt-1 sm:mt-0'>
					<div className="w-full md:w-[50%] lg:w-[28%]">
						<h1 className="title-font font-bold text-black  text-2xl mb-3">Socials</h1>
						<div className="list-none w-full mb-10">
							{data.socials.map(a=><div key={a.name}>
								<a target="_blank" href={a.link} className="hover:cursor-pointer text-black font-medium">{a.name}</a>
							</div>)}
							
						</div>
					</div>
					<nav className="w-full md:w-[50%] lg:w-[28%]">
						<h1 className="title-font font-bold text-black  text-2xl mb-3">Navigation</h1>
						<div className="list-none mb-10 flex flex-col  ">
						{data.nav.map(a=>
								<span key={a.name} onClick={()=>handle(a.link,a.offset)} className="hover:cursor-pointer text-black font-medium">{a.name}</span>
							)}
                                                        <span onClick={()=>window.open("https://static.mlh.io/docs/mlh-code-of-conduct.pdf","_blank")} className="hover:cursor-pointer text-black font-medium">Code of Conduct</span>
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
				<a target="_blank" href='https://bank.hackclub.com/'><img src="svg/poweredbyhcb.svg" className='h-10'/></a>
				<a target="_blank" href='https://www.vercel.com/?utm_source=freyhacks&utm_campaign=oss'><img  src="svg/vercel.svg" className='h-10'/></a>
			</div>
			<p className='text-gray-500 text-sm w-full text-center'>FreyHacks is fiscally sponsored by Hack Club, a 501(c)(3) nonprofit. Our registered EIN is 81-2908499</p>
		</footer>
	);
};

export default Footer;
