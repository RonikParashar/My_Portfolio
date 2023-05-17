import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1248px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#da3737]'>
                    About
                </p>
                <h2 className='py-4'>
                    Who I am
                    </h2>
                <p className='py-2 text-gray-600'>
                  I'm a third-year Computer Science student studying at Shri Ramdeobaba College of Engineering and Management.
                  I am a highly motivated individual with a strong passion for technology. I have shown  an aptitude for problem-solving, with a deep understanding of programming languages and algorithms. I have also a skilled communicator, having experience in user-experience design, web development, and software engineering.As I continue my studies, I am passionate about exploring new ideas and improving the effectiveness of existing systems. With an eye for detail and a drive to learn, I am sure to be a successful engineer and an asset to any organization.
                </p>

            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img   className='rounded-xl' src="https://img.freepik.com/premium-vector/man-working-laptop-computer-from-home-with-cup-coffee-home-office-concept-woman-working-from-home-student-freelancer-vector-illustration-flat-style-remote-work-freelance-concept_419010-517.jpg?w=740" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About