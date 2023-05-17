import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contacts = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1248px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#da3737]'>
              Contact
            </p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                     <div>
                      <img className='rounded-xl hover:scale-105 ease-in duration-300 ' src="https://www.getmailbird.com/wp-content/uploads/2019/12/Keep-in-touch-email-templates.jpg" alt="" />  
                     </div>
                     <div>
                       <h2 className='py-2'>
                        Ronik Parashar
                        </h2>
                        <p>Web Developer</p>
                        <p className='py-4'>
                            I am available for freelance or full-time positions. Contact me and let's talk
                        </p>
                     </div>
                     <div>
                        <p className='uppercase pt-8'>
                            Connect With Me
                        </p>
                        <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/ronik-parashar-a2508a218'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
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

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
                    
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsPersonLinesFill />
                      </div>
                    
                  </Link>
                </div>
              </div>
            </div>
          </div>
 {/*  right*/}
 <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
    <div className='p-4'>
<form
                action='https://getform.io/f/e5289c6e-72ce-4a82-934c-c889ff224a69'
                method='POST'
                encType='multipart/form-data'

>
    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
    <div className='flex flex-col'>
        <label className='uppercase text-sm py-2'>Name</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name'/>

    </div>
    <div className='flex flex-col'>
        <label className='uppercase text-sm py-2'>Phone Number</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone'/>

    </div>
    </div>
    <div className='flex flex-col py-2'>
    <label className='uppercase text-sm py-2'>Email</label>
    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email'/>
    </div>
    <div className='flex flex-col py-2'>
    <label className='uppercase text-sm py-2'>Subject</label>
    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject'/>
    </div>
    <div className='flex flex-col py-2'>
    <label className='uppercase text-sm py-2'>Message</label>
    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message'></textarea>
    </div>
    <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
       </form>        
      </div>
     </div>
    </div>
    <div className='flex justify-center py-12'>
        <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp className='text-[#da3737]' size={30}/>
            </div>
        </Link>
    </div>
  </div>
</div>
  )
}

export default Contacts