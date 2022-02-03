import React from 'react';

const Footer = () => {
	return (
			<footer className='mt-[900px] w-full  flex justify-around items-center flex-col md:flex-row text-black font-sans bg-white body-font text-xl'>
				<div className='w-[80%] md:w-[30%] lg:w-[20%] my-5 sm:my-1 flex flex-col items-center'>
					<img  src="/logo.png"/>
				</div>
				<div className='flex justify-between flex-col md:flex-row flex-wrap w-[55%] items-center lg:items-start md:text-left text-center mt-1 sm:mt-8'>
					<div className="w-full md:w-[50%] lg:w-[28%]">
						<h1 class="title-font font-bold text-black  text-2xl mb-3">Socials</h1>
						<nav class="list-none mb-10">
							<li>
								<a class="text-black font-medium">Instagram</a>
							</li>
							<li>
								<a class="text-black font-medium">LinkedIn</a>
							</li>
							<li>
								<a class="text-black font-medium">Facebook</a>
							</li>
						</nav>
					</div>
					<div className="w-full md:w-[50%] lg:w-[28%]">
						<h1 class="title-font font-bold text-black  text-2xl mb-3">Navigation</h1>
						<nav class="list-none mb-10">
							<li>
								<a class="text-black font-medium">About Us</a>
							</li>
							<li>
								<a class="text-black font-medium">Sponsers</a>
							</li>
							<li>
								<a class="text-black font-medium">Privacy Policy</a>
							</li>
						</nav>
					</div>
					<div className="w-full md:w-[50%] lg:w-[28%]">
						<h1 class="title-font font-bold text-black text-2xl mb-3">Contact Us</h1>
						<nav class="list-none mb-10">
							<li>
								<a class="text-black font-medium text-lg">questions@freyhacks.email</a>
							</li>
						</nav>
					</div>
				</div>
		</footer>
	);
};

export default Footer;
