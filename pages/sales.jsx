import Image from 'next/image';
import React from 'react';
import salesImg from '../public/assets/projects/sales.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const ethdaddy = () => {
    return (
        <div className='w-full'>
          <div className='w-screen h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
            <Image
              className='absolute z-1'
              layout='fill'
              objectFit='cover'
              src={salesImg}
              alt='/'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Sales Dashboard</h2>
              <h3>Power BI, Python </h3>
            </div>
          </div>
    
          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
              <p>Project</p>
              <h2>Overview</h2>
              <p>
              Project Description: Sales Dashboard using Power BI.
  <br />

The Sales Dashboard project aims to provide a comprehensive visual representation of sales data through the powerful data visualization tool, Power BI. This interactive dashboard will enable businesses to monitor and analyze their sales performance, identify trends, and make data-driven decisions to drive growth and optimize their sales strategies.

The Sales Dashboard will incorporate various key metrics and indicators to offer a holistic view of sales performance. This will include important KPIs such as total sales revenue, sales growth rate, average order value, customer acquisition rate, and sales by product category or region. These metrics will be presented through visually appealing charts, graphs, and tables, ensuring that users can easily comprehend and interpret the data.

The dashboard will also provide users with the ability to filter and slice the data based on different dimensions. For example, users can filter sales data by date range, specific products, sales representatives, or customer segments. This flexibility will enable users to analyze sales performance from different perspectives and identify patterns or outliers that may require attention.

Additionally, the Sales Dashboard will include trend analysis features. Users can track sales trends over time, compare performance across different periods, and visualize the impact of marketing campaigns or promotions on sales. This will help businesses gain insights into the effectiveness of their sales strategies and make informed decisions for future planning.

Furthermore, the Sales Dashboard project will integrate data from various sources such as CRM systems, ERP systems, and sales databases. This data integration will be automated, ensuring that the dashboard remains up to date with the latest sales information. Users will have access to real-time or near-real-time sales data, enabling them to respond quickly to changes in the market and make timely decisions.

Overall, the Sales Dashboard using Power BI will empower businesses with a comprehensive and intuitive tool for monitoring and analyzing sales performance. By providing actionable insights and visualizing key sales metrics, this project will help businesses optimize their sales strategies, drive revenue growth, and stay ahead in today's competitive market landscape.
              </p>
              <a
                href='https://github.com/RonikParashar/Sales_Daashboard'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 mr-8'>Code</button>
              </a>
            
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
              <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Power BI</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Python</p>
                </div>
              </div>
            </div>
            <Link href='/#projects'>
              <p className='underline cursor-pointer'>Back</p>
            </Link>
          </div>
        </div>
      );
    };

export default ethdaddy