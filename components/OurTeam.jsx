import React from 'react'
import Image from 'next/image'
import { leader1, leader2, leader3 } from '@/public'

const OurTeam = () => {
  return (
    <section className="text-gray-600 body-font">
                <div className='flex items-center justify-center'>
            <h1 className='text-5xl font-bold text-green-900'>
                Our Team
            </h1>
        </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image 
            width={100}
            height={100}
            alt="testimonial" 
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
            src={leader1}
          />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Ir. Laila Pehin Saleh</h2>
          <p className="text-gray-500">Chartered Engineer</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <p className="leading-relaxed">Laila is a Chartered Civil Engineer with over 20 years experience in civil infrastructure projects, and oil and gas engineering. She has worked in New Zealand, Africa and Europe before returning to Brunei to establish Lylsens Consulting for management of infrastructure and oil industry projects.  In July 2013, she joined KPI as executive engineer to extend her involvement with governmental infrastructure projects, and is now the majority shareholder.</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image 
          width={100}
          height={100}
            alt="testimonial" 
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
            src={leader2}
          />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Ir. Julian Fung</h2>
          <p className="text-gray-500">Chartered Engineer</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <p className="leading-relaxed">Julian is a Chartered Engineer with 30 years of experience in Water Resources Projects, including water treatment and water supply, wastewater treatment, dams.  He has worked with Consulting Engineering firms in the United Kingdom, Sultanate of Oman and Brunei Darussalam.  Between 2009 to 2016, Julian was with the Brunei Economic Development Board heading their Infrastructure Division.  Julian is an ASEAN Engineer, and ASEAN Chartered Professional Engineer (ACPE).</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <Image 
          width={100}
          height={100}
            alt="testimonial" 
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
            src={leader3}
          />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Warwick Newall​</h2>
          <p className="text-gray-500">Project Manager</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <p className="leading-relaxed">
            An experienced project manager and town planner, Warwick has worked on major government and entrepreneurial developments in Australia, New Zealand and Brunei. He is currently Managing Director of KPI Sdn Bhd, a multi-disciplinary consultancy for urban infrastructure and primary resources industry in Brunei and Malaysia. ​
            <br/>
            In Brunei he has produced Tutong District Plan, Floodplain Management Plans Infrastructure Development Schemes, and undertaken numerous Environmental Impact Assessments. Most recently he has turned to food security infrastructure for mechanised rice, and land based aquaculture schemes. In 2018 he was elected a Fellow of The Brunei Institution of Geomatics.​
        </p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default OurTeam
