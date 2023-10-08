import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const projectSet = [
  {id: 0, title: 'Property Finder', backgroundImage: '/assets/projects/property.jpg', projectUrl:'/property'},
  {id: 1, title: 'Crypto App', backgroundImage: '/assets/projects/crypto.jpg', projectUrl:'/crypto'},
  {id: 2, title: 'Netflix', backgroundImage: '/assets/projects/netflix.jpg', projectUrl:'/netflix'},
  {id: 3, title: 'Twitch', backgroundImage: '/assets/projects/twitch.jpg', projectUrl:'/twitch'},
]   



const ProjectItem = () => {
  const listProjects = projectSet.map(project => 
    <li key={project.id} className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <Image 
          className='rounded-xl group-hover:opacity-10' 
          src={project.backgroundImage} 
          alt='/'
          width={500}
          height={500}
        />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{project.title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>ReactJS</p>
            <Link href={project.projectUrl}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
            </Link>
        </div>
    </li>
  )
  return <ul className='grid md:grid-cols-2 gap-8'>{listProjects}</ul> 

}

export default ProjectItem