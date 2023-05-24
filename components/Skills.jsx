import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1248px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#da3737]'>Skills</p>
            <h2 py-4>What I can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <img src="https://github.com/RonikParashar/My_Portfolio/assets/90423810/8c739248-e342-41f0-af7b-50837fcc212c" width='64' height='64'  alt="/" />   
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>

                    </div>

                </div>

                {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/css.png"width='64' height='64'  alt="/" />
                            
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>

                    </div>

                </div> */}

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <img src="https://github.com/RonikParashar/My_Portfolio/assets/90423810/b1993c4a-6ad6-4501-b4e2-f0828001f18c" width='64' height='64'  alt="/" />
                            
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>

                    </div>

                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <img src="https://github.com/RonikParashar/My_Portfolio/assets/90423810/d33f6067-7b92-465f-8bee-701b9386b10c" width='64' height='64'  alt="/" />
                            
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>

                    </div>

                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <img src="https://github.com/RonikParashar/My_Portfolio/assets/90423810/e5a92b39-29ba-484d-8435-27532e05ce03" width='64' height='64'  alt="/" />
                            
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>

                    </div>

                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <img src="https://github.com/RonikParashar/My_Portfolio/assets/90423810/746da44c-1e47-4660-badb-2a778691f4c6" width='64' height='64'  alt="/" />
                            
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
                        </div>

                    </div>

                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <img src="https://github.com/RonikParashar/My_Portfolio/assets/90423810/955a365f-09ec-4d8e-b70e-fabace72ba39" width='84' height='84'  alt="/" />
                            
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Solidity</h3>
                        </div>

                    </div>

                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <img src="https://github.com/RonikParashar/My_Portfolio/assets/90423810/1da271f5-3682-43dc-a9be-3626086070c0" width='74' height='74'  alt="/" />
                            
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Power BI</h3>
                        </div>

                    </div>

                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <img src="https://github.com/RonikParashar/My_Portfolio/assets/90423810/956a1989-d00c-4f2d-ab76-1653ed091274" width='64' height='64'  alt="/" />
                            
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>GitHub</h3>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Skills