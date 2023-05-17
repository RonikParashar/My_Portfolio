import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import paisaImg from '../public/assets/projects/paisa.png'
import ethdaddyImg from '../public/assets/projects/eth-daddy.png'
import caloriesImg from '../public/assets/projects/calories1.webp'
import salesImg from '../public/assets/projects/sales.png'
import crowdfundingImg from '../public/assets/projects/crowdfunding1.jpg'

import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
         <p className='text-xl tracking-widest uppercase text-[#da3737]'>Projects</p> 
         <h2 className='py-4'>What I've Built</h2>  
         <div className='grid md:grid-cols-2 gap-8'>

           <ProjectItem title='Virtual Bank' backgroundImg={paisaImg}
           projectUrl='/bank' tool='React'/>

           <ProjectItem title='Sales Dashboard' backgroundImg={salesImg}
           projectUrl='/sales' tool='Power BI'/>

           <ProjectItem title='Calories burnt Prediction' backgroundImg={caloriesImg}
           projectUrl='/calories' tool='Python'/>

           <ProjectItem title='Crowdfunding' backgroundImg={crowdfundingImg}
           projectUrl='/crowdfunding' tool='Solidity'/>

         </div>

        </div>

    </div>
  )
}

export default Projects