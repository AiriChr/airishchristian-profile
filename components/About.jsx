import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-width[1240] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>// I am not the typical web developer</p>
                <p className='py-2 text-gray-600'>
                    I have spent the last 5 years in the field of System Integration, Telecommunications and IT Network. I have always been passionate in coding and and working with computers. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatibus dicta inventore ea ullam ad in! Obcaecati, animi nostrum commodi, nulla maiores deleniti necessitatibus harum vel magni consequuntur quae beatae.
                </p>
                <p className='py-2 text-gray-600 cursor-pointer underline'>Check out some of my latest projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded'src='https://images.unsplash.com/photo-1596754777925-043dc3084b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1227&q=80' alt='/' />
            </div>
        </div> 
    </div>
  )
}

export default About