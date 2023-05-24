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
                            <Image src="/../public/assets/skills/html.png"width='64' height='64'  alt="/" />   
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
                            <Image src="/../public/assets/skills/javascript.png"width='64' height='64'  alt="/" />
                            
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>

                    </div>

                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/react.png" width='64' height='64'  alt="/" />
                            
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>

                    </div>

                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/tailwind.png"width='64' height='64'  alt="/" />
                            
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>

                    </div>

                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/python.jpg"width='64' height='64'  alt="/" />
                            
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
                            <Image src="/../public/assets/skills/powerbi.jpeg"width='74' height='74'  alt="/" />
                            
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Power BI</h3>
                        </div>

                    </div>

                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/github.png"width='64' height='64'  alt="/" />
                            
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