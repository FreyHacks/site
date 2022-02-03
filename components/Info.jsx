import React from 'react';

const Info = () => {
  return (
    <div className='w-[70%] py-4'>
			<div className='w-full h-48 flex flex-col lg:flex-row items-center mb-40'>
				<div className='w-[300px] h-40 bg-gray-500 mb-10 lg:mr-20 flex-none'>

				</div>
				<div className='flex flex-col  '>
					<h2 className='mb-2 text-3xl font-bold'>About FreyHacks</h2>
					<p className='max-w-[600px]'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium ad iste est voluptas. Accusantium a, voluptatibus, reiciendis nam magni dolorum eius provident aspernatur eveniet quisquam quibusdam et officia natus delectus.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nemo fugit ratione sit nisi vitae doloremque facere animi, fuga suscipit labore autem dolorem repudiandae quod deserunt officiis natus rerum similique.
					</p>
				</div>
			</div>
			<div className='w-full min-h-40 flex flex-col lg:flex-row-reverse items-center '>
				<div className='w-[300px] h-40 bg-gray-500 mb-10 lg:ml-20 flex-none'>

				</div>
				<div className='flex flex-col '>
					<h2 className='mb-2 text-3xl font-bold'>What happens at FreyHacks</h2>
					<p className='max-w-[600px]'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, molestias ipsam facere totam, libero est sed excepturi praesentium, vel adipisci enim deserunt cumque ipsum aliquam ut voluptatibus voluptates dicta porro!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam earum quibusdam inventore laboriosam quas nobis pariatur sint iusto placeat natus nulla nam, quam ea asperiores ad expedita saepe ducimus!
					</p>
				</div>
			</div>
    </div>
  );
};

export default Info;
