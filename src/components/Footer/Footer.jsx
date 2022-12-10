import React from 'react'
import {Link} from 'react-scroll'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {LinkedIn} from 'react-bootstrap-icons'
import { faEnvelope,faLinkedin,faUser,faBarsProgress,faPenToSquare,faBriefcase,faMessage } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div>
       
<footer className="footer p-4 mt-14 h-80  sm:p-6 dark:bg-blue-900">
    {/* <div className="md:flex md:justify-between"> */}
        {/* <div className="mb-6 md:mb-0">
          
        </div> */}
        <div className="grid grid-cols-1 gap-4 sm:gap-2 sm:grid-cols-4 ml-16">
            <div>
                
                <ul className="footer-text text-xl font-semi-bold tracking-widest text-gray-900 uppercase dark:text-white">
                    <li className="mb-4 mt-28 text-xl">
                        <a href="" className="text-blue-200">Sneha Singh</a>
                    </li>
                   
                </ul>
            </div>
            <div className='mt-10'>
                <h1 className="mb-6 ml-2  underline tracking-widest text-lg font-bold  uppercase text-blue-200">Quick Links</h1>
                {/* <div className="grid grid-cols-2 gap-4"> */}
            
                
                <ul className="footer-links text-gray-600 dark:text-gray-400 tracking-wide text-lg">
                <div className="col-6  absolute">
                
                <Link to="home"spy={true}  smooth={true}>   
                <li className="mb-4 footer-list">
                 Home
                    </li>
                     </Link>
                    
                    <Link to="about"spy={true}  smooth={true}>  
                     <li className="mb-4">
                 About
                    </li>
                    </Link>

                    <Link to="resume"spy={true}  smooth={true}>   
                    <li className="mb-4">
                 Resume
                    </li> 
                    </Link>
             
                   
                    </div>

                    <div className="col-6  ml-20 absolute">
                    <Link to="skills"spy={true}  smooth={true}>  
                     <li className="mb-4">
                 Skills
                    </li>
                    </Link>

                    <Link to="projects"spy={true}  smooth={true}>   
                    <li className="mb-4">
                 Projects
                    </li>
                    </Link>

                    <Link to="Contact"spy={true}  smooth={true}>   <li className="mb-4">
                 Contact
                    </li>
                    </Link>
                    </div>
                   
                </ul>
                
                        {/* <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a> */}
            </div>
           
            <div>
                <h2 className="mb-6 underline tracking-widest text-lg font-thin mt-10  uppercase text-blue-200">Social</h2>
                <a href="https://github.com/snea03" target="_blank" className="text-gray-500 mt-4 hover:text-gray-900 dark:hover:text-white">
                <img className='h-12 w-12 footerg-icon mt-4' src='assets/images/githubb.png'/> 
                </a>

                <a href="https://www.linkedin.com/in/sneha-singh-200711104" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <img src='assets/images/linkedin.png' className='ml-20  footer-icon'/> 
                </a>
                <a href="https://vercel.com/dashboard" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <img src='assets/images/vercell.png' className='ml-40  footer-icon2'/> 
                </a>
                <a href="https://www.behance.net/snehasingh32" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <img src='assets/images/behance.png' className='ml-60  footer-icon3'/> 
                </a>
              
              
              <h1 className='mt-8 mail text-blue-200'>mail:<span className='span'> snehasinghjnv@gmail.com</span></h1>
            </div>
        </div>
  
   
</footer>

        </div>
  )
}

export default Footer