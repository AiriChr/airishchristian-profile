import React from 'react'
import SkillSet from './SkillSet'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-cyan-200'> 
                Skills
            </p>
            <h2 className='py-4'>What I can Do</h2>
            <SkillSet />   {/* responsive */}
            
        </div>  
    </div>
  ) 
}

export default Skills