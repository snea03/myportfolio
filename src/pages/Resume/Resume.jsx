import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import {motion} from 'framer-motion'
import 'animate.css'
import "./Resume.css"

const Resume = () => {
  return (
    <div className=''>
      <div className='' >
     <h1 className=" text text-center text-4xl font-semibold  resume-head ">
    My Resume
      </h1>

    </div>
    <motion.div viewport={{once:false}} initial={{opacity:0,x:50}} whileInView={{opacity:1, x:0}} transition={{type:"easeIn",duration:.15,delay:.45}} className="container mt-16 ml-10">
      <div className='grid grid-cols-2 gap-3 justify-evenly'>
        <div className='column mt-20 ml-14'>
          <p className='font-semibold text-3xl text-blue-200'>Formal Education</p>
          <p className='text-xl font-thin mt-5 text-yellow-50'> 10th Standard (CBSE) - 2013</p>
          <p className='text-xl font-thin text-yellow-50'> 7.4 CGPA</p>
<div className='mt-10'>
          <p className='text-xl font-thin text-yellow-50'> 12th Standard (CBSE) - 2015</p>
          <p className='text-xl font-thin text-yellow-50'> 74%</p>
          </div>
        </div>
       
        <div className='column column mt-20 ml-14'>
        <p className='font-semibold text-3xl text-blue-200'>Courses</p>
          <p className='text-xl font-thin mt-5 text-yellow-50'>Full Stack Development with MERN</p>
          <p className='text-xl font-thin mt-5 text-yellow-50'> CETPA-Noida</p>
        </div>
<div className="vertical-line mt-96 ml-56 rounded-full"></div>

        <div className='column  mt-24 ml-14'>
        <p className='font-semibold text-3xl text-blue-200'>Degree</p>
          <p className='text-xl font-thin mt-5 text-yellow-50'>B.C.A - 2020</p>
          <p className='text-xl font-thin mt-5 text-yellow-50'> Maulana Mazharul Haque Arabian & 
Persian, University</p>
<p className='text-xl font-thin mt-5 text-yellow-50'>75.38%</p>
        </div>

        <div className='column mt-24 ml-14'>
        <p className='font-semibold text-3xl  text-blue-200'>Experience</p>
          <p className='text-xl font-thin mt-5 text-yellow-50'>INTERNSHIP - FRONTEND  Development </p>
          <p className='text-xl font-thin mt-5 text-yellow-50'>6 MONTHS-JUNE 2022-DEC 2022 </p>
          <p className='text-xl font-thin mt-5 text-yellow-50'> INTERNSLAND-AURANGABAD</p>
          <p className='text-xl font-thin mt-5 text-yellow-50'> </p>
        </div>
      </div>
    </motion.div>
    </div>
  )
}

export default Resume