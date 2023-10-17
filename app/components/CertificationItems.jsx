import React from 'react';
import Image from 'next/image';

const certificationData = [
    {
        id: 0, 
        CertImage: '/assets/certs/google-project-management.jpeg', 
        CertTitle: 'Google Project Management', 
        CertDescription: 'Skills gained include: Creating risk management plans; Understanding process improvement techniques; Practicing Agile project management, with an emphasis on Scrum.', 
        CertLink:'https://coursera.org/share/f93298aefe403b2b442410af09e071fe'
    },
    {
        id: 1, 
        CertImage: '/assets/certs/isc2-certified-in-cyber.jpg', 
        CertTitle: 'Certified in Cybersecurity', 
        CertDescription: 'Skills gained include: Creating risk management plans; Understanding process improvement techniques; Practicing Agile project management, with an emphasis on Scrum.', 
        CertLink:'https://coursera.org/share/f93298aefe403b2b442410af09e071fe'    
    },
    {
        id: 2, 
        CertImage: '/assets/certs/advance-mysql-topic.jpeg', 
        CertTitle: 'Advanced MySQL Topics', 
        CertDescription: 'Skills gained include: Creating risk management plans; Understanding process improvement techniques; Practicing Agile project management, with an emphasis on Scrum.', 
        CertLink:'https://coursera.org/share/f93298aefe403b2b442410af09e071fe'
    },
    {
        id: 3, 
        CertImage: '/assets/certs/advance-mysql-topic.jpeg', 
        CertTitle: 'Advanced MySQL Topics', 
        CertDescription: 'Skills gained include: Creating risk management plans; Understanding process improvement techniques; Practicing Agile project management, with an emphasis on Scrum.', 
        CertLink:'https://coursera.org/share/f93298aefe403b2b442410af09e071fe'    
    }
]

const CertificationItems = () => {
    const listCertification = certificationData.map(certification =>
        <li key={certification.id} className='flex flex-col relative shadow-sm shadow-gray-400 rounded-xl' >
            <Image
                src={certification.CertImage}
                width={300}
                height={300}
                alt='/' 
                className='rounded-t-xl'
            />
            <div className='p-4 '>
                <h3>{ certification.CertTitle }</h3>
                <p>{ certification.CertDescription }</p>
                <div className='width-11/12 my-2 bg-gray-400 justify-center text-center items-center rounded-xl'>
                    <a href={certification.CertLink} className='text-black' >Learn More</a>
                </div>
            </div>
        </li>
    )
  return (
    <ul className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>{ listCertification }</ul>
  )
}

export default CertificationItems