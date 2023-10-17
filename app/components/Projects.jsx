import React from 'react';
import ProjectItem from './ProjectItem';


const Projects = () => {
  return (
    <section id='projects' className='border-t-2 border-gray-400'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-cyan-200'>Projects</p>
            <h2 className='py-4'>What I have Built</h2>
            <ProjectItem /> {/* responsive */}
        </div>
    </section>
  )
}

export default Projects