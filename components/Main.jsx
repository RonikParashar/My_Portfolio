import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonFill, BsPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaPersonBooth } from 'react-icons/fa'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1248px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
               <p className='uppercase text-sm tracking-widest text-gray-600'>
                Let's Build something cool together
   
               </p>
               <h1 className='py-4 text-gray-700'>
                Hi, I'm <span className='text-[#da3737]'>Ronik</span>
               </h1>
               <h1 className='py-2 text-gray-700'>
                A Web Developer 
               </h1>
               <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                I am a computer science student with a passion for problem-solving, a knack for coding, and an eye for detail.I have a deep understanding of programming languages such as Python, React and Solidity and i'm always eager to learn new technologies. My knowledge of software development best practices, object-oriented programming, and algorithms has enabled me to create robust and reliable software applications.

               </p>
               <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
               <a
              href='https://www.linkedin.com/in/ronik-parashar-a2508a218'
              target='_blank'
              rel='noreferrer'
            >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                
                    <FaLinkedin />
                </div>
                </a>
                <a
              href='https://github.com/RonikParashar'
              target='_blank'
              rel='noreferrer'
            >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                </div>
                </a>
                <Link href='/#contact'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                </div>
                </Link>
                <Link href='/resume'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsPersonLinesFill />
                </div>
                </Link>

               </div>
            </div>
        </div>
    </div>
  )
}

export default Main