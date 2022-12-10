import React from 'react'
import './Home.css'
import {motion} from 'framer-motion'
import  Typed from 'react-typed'
// import About from 'src/pages/About/About.jsx';


const Home = () => {
  return (
    <div className='mt-20'>
      {/* <motion.h1 animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }} className=' head-text text-white text-4xl text-center mt-14'>
                  WELCOME TO MY PROFILE! <span className='animate-[wiggle_1s_ease-in-out_infinite] text-7xl'>👋</span>
                  </motion.h1> */}
    <div  className=" section1 container-md mt-10  relative top-24 content-center items-center h-96 w-9/12 rounded-full border-double border-4  outline ">
      <img className='img-fluid  h-64 w-64 absolute mt-10 ml-8 rounded-full' src="/assets/images/experiment.jpg" />
    <h1 className="heading text-cyan-300 text-3xl font-bold absolute mx-24">Hey There!</h1>
    <h1 className="heading1 text-[#ffffff] text-3xl font-bold absolute mx-24">This is Sneha Singh</h1>
    <h1 className="heading2 text-[#ffffff] text-3xl font-bold absolute mx-24">
   
<Typed
      strings={[
            "A Frontend Developer",
            "A Web Designer",
            
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      
      </h1>
    <a href='/assets/images/resume.pdf' download='resume.pdf'> <button  className="btn      absolute text-xl text-[#EFFF8C]">Download CV </button></a>
    <img className='img-fluid pc h-64 w-64 absolute mt-8 ml-8 rounded-full' src="/assets/images/pc.png" />
    </div>
   
   


 
    {/* <About /> */}
    </div>

    
  )
}

export default Home