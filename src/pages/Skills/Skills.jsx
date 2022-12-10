import React from 'react'
import './Skills.css'
import {motion} from 'framer-motion'
const Skills = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // const items = ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'MERN'];
  // const otheritems = ['TAILWIND','FIGMA', 'ADOBE XD', 'CANVA', 'GITHUB'];
  // const listItems=numbers.map(course)=>
  return (
    <div className='mt-96'>
  <h1 className='skills-head  text-center text-4xl font-semibold'>My Skills</h1>



  <motion.div viewport={{once:false}} initial={{opacity:0,x:50}} whileInView={{opacity:1, x:0}} transition={{type:"easeIn",duration:.15,delay:.45}} className='grid grid-cols-2 gap-3 justify-evenly skills-div'>
        <div className='skills-box column relative mt-10 ml-20 bg-slate-500'>
          <h2 className='skill-head flex items-center ml-40 mt-7 text-lg text-blue-300'>FullStack Development</h2>
          <div className='grid grid-cols-3 gap-4 ml-20 mt-8'>
            
            <div className="text-white">
              <img src='assets/images/fullstack/html.png'/>
              {/* <i class="bi bi-filetype-html ml-4"></i> */}
              <h4>1. Html</h4>
              </div>
           
            <div className="text-white">
            <img src='assets/images/fullstack/css.png'/>
              <h4>2. CSS</h4>
              </div>
            
            <div className="text-white">
            <img className="ml-4" src='assets/images/fullstack/Js.png'/>
            <h4>3. Javascript</h4>
            </div>

            <div className="text-white mt-14">
              <img className="ml-4" src='assets/images/fullstack/bs.png'/>
             
              <h4>4. Bootstrap</h4>
              </div>
           
            <div className="text-white mt-14">
            <img src='assets/images/fullstack/react.ico'/>
              <h4>5. React</h4>
              </div>
            
            <div className="text-white mt-14">
            <img className="ml-4" src='assets/images/fullstack/mongo.png'/>
            <h4>6. MongoDB</h4>
            </div>

            <div className="text-white">
            <img className='ml-4' src='assets/images/fullstack/node.png'/>
            <h4>7. NodeJS</h4>
            </div>
            
          </div>
          </div>


          <div className='skills-box column relative mt-10 ml-12 bg-slate-500'>
          <h2 className='skill-head flex items-center ml-56 mt-7 text-lg text-blue-300'>Other Skills</h2>
          <div className='grid grid-cols-3 gap-4 ml-20 mt-8'>
            
            <div className="text-white">
              <img src='assets/images/otherskills/github.png'/>
              {/* <i class="bi bi-filetype-html ml-4"></i> */}
              <h4>1. Github</h4>
              </div>
           
            <div className="text-white">
            <img src='assets/images/otherskills/tailwind.png'/>
              <h4>2. Tailwind CSS</h4>
              </div>
            
            <div className="text-white">
            <img className="ml-4" src='assets/images/otherskills/canva.png'/>
            <h4>3. Canva</h4>
            </div>

            <div className="text-white mt-14">
              <img className="ml-4" src='assets/images/otherskills/figma.png'/>
             
              <h4>4. Figma</h4>
              </div>
           
            <div className="text-white mt-14">
            <img src='assets/images/otherskills/xd.png'/>
              <h4>5. Adobe Xd</h4>
              </div>
            </div>
            </div>
          </motion.div>























  
        {/* <motion.div viewport={{once:false}} initial={{opacity:0,x:50}} whileInView={{opacity:1, x:0}} transition={{type:"easeIn",duration:.15,delay:.45}} className='grid grid-cols-2 gap-3 justify-evenly'>
        <div className='skills-box column relative mt-10 ml-28 bg-slate-500'>
          <h1  className='ml-16 mt-14 text-3xl text-teal-200'>FULLSTACK DEVELOPMENT</h1>
          <motion.ul variants={container}
    initial="hidden"
    animate="visible">
            {
              items.map(course =>
                <motion.li variant={item} className='ml-40 mt-10 text-2xl skills-list text-cyan-50'>{course}</motion.li>)
            }
          </motion.ul>
        </div>

        <div className='skills-box relative column mt-10 ml-14 bg-slate-500'>
        <h1 className='ml-28 mt-14 text-3xl text-teal-200 absolute '>OTHER SKILLS</h1>
          <ul className='pt-20 '>
            {
              otheritems.map(othercourse =>
                <li className='ml-40 mt-10 text-2xl skills-list text-cyan-50'>{othercourse}</li>)
            }
          </ul>
        </div>
      </motion.div> */}

    </div>
  )
}

export default Skills