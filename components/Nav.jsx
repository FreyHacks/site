import React from 'react';

const Nav = () => {
  return (
  <div className='bg-white  w-full h-20  flex justify-between items-center pr-8'>
    <div className='w-[20%] md:w-[40%]  h-full my-2 sm:my-0 flex flex-col items-center'>
      <img width="50%" src="/logo.png"/>
    </div>
    <nav class="flex w-[70%] md:w-[60%] lg:w-[40%] justify-between items-center font-semibold text-2xl align-middle">
      <a class="text-black  w-20">Home</a>
      <a class="text-black  w-20">About</a>
      <a class="text-black  w-24">Schedule</a>
      <button className=' bg-green-500 text-shite text-medium font-medium  text-white rounded-xl py-2 px-3'>Register</button>
    </nav>
  </div>);
};

export default Nav;
