import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Ronik | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel="icon" href="/dev.jpg" />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Ronik Parashar</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/ronik-parashar-a2508a218'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/RonikParashar'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        I'm a Computer Science student studying at Shri Ramdeobaba College of Engineering and Management.
                  I am a highly motivated individual with a strong passion for technology. I have shown  an aptitude for problem-solving, with a deep understanding of programming languages and algorithms. I have also a skilled communicator, having experience in user-experience design, web development, and software engineering.As I continue my studies, I am passionate about exploring new ideas and improving the effectiveness of existing systems. With an eye for detail and a drive to learn, I am sure to be a successful engineer and an asset to any organization.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Python
            <span className='px-2'>|</span> Solidity
            <span className='px-2'>|</span> Power BI
          </p>
      
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
        <ul>
        <li>Bachelor of Technology in Computer Science<br />
        Shri Ramdeobaba College of Engineering and Management, India</li>
        <li>12th grade<br />
        St.Paul School, India</li>
        <li>10th grade<br />
        Centre Point School, India</li>
      </ul>
        </h5>
        <h2>Projects</h2>
      <ul   type='circle'>
        <li>Virtual Bank</li>
        <li>Calories burnt Predections</li>
        <li>Crowdfunding Smartcontracts</li>
        <li>Lottery Smartcontracts</li>
        <li>Data Analysis on Netflix</li>
        <li>Sales Dashboard</li>
      </ul>


        

        
      
        
      </div>
    </>
  );
};

export default resume;