import React from 'react'
import CertificationItems from './CertificationItems'

const Certifications = () => {
  return (
    <section className='w-full md:h-screen py-8 p-2 border-t-2 border-gray-400'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-cyan-200'>Certifications</p>
            <h2 className='py-4'>What I Have Under My Belt</h2>
            <CertificationItems/>
        </div>
    </section>

  )
}

export default Certifications