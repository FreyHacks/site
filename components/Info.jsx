import  Fade from "react-reveal/Fade";
import data from "../lib/about.js"

const Info = () => {

  return (
    <div  id='about' className=' w-[80%] sm:w-[70%] mt-10 sm:mt-20 py-4 text-lg'>
			{data.map(a=><Fade key={a.head} {...a.props}><div   className={'w-full min-h-40 flex flex-col justify-around items-center mb-12 md:space-x-3 '+a.classes}>
				<div className='w-[300px]   mb-6 flex-none '>
					<object  data={`svg/${a.svg}.svg`} /> 
				</div>
				<div className='flex flex-col align-middle flex-grow'>
					<h2 className='w-full mb-2 text-3xl font-bold'>{a.head}</h2>
					<p className='w-full '>{a.info}</p>
				</div>
			</div></Fade>)}
    </div>
  );
};

export default Info;
