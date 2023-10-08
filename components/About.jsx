import React from 'react'

const About = () => {
  return (
    <section id='about' className='w-full md:h-screen p-2 flex items-center py-16 border-t-2 border-gray-400'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 mr-4 ml-4'>
                <p className='uppercase text-xl tracking-widest text-cyan-200'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-400'>// I am not the typical web developer</p>
                <p className='py-2 text-gray-400 text-justify'>
                    A solutions oriented individual with proven track record in Systems Integration, Telecommunications and IT Systems & Network. 
                    I have always been passionate in coding and and working with computers. In fact, I recently passed my ISC2 Certified in Cybersecurity Certification exam and I also finished my Google Project Management Professional Certificate. Currently, I enrolled myself in Database Engineer by Meta through Coursera while also learning the nitty-gritty of Web Development technologies.
                </p>
                <p className='py-2 text-gray-400 cursor-pointer underline'>Check out some of my latest projects</p>
            </div>
            <div className='h-auto w-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded'src='https://plus.unsplash.com/premium_photo-1664476958281-cc5251619f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80' alt='/' />
            </div>
        </div> 
    </section>
  )
}

export default About