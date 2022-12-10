import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faHouse,faUser,faBarsProgress,faPenToSquare,faBriefcase,faMessage } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
  const [nav,setnav] = useState(false)

  const handleNav =() => {
setnav(!nav)
  }

  
  return (
    <div className=" mt-6 flex navigation justify-end text-3xl">
      <img src='assets/images/logoo.png' className=' logo  '></img>
      <ul className="hidden  md:flex">
  <Link to="home"spy={true}  smooth={true} activeclass="activeClass">   <li className="p-4"> <FontAwesomeIcon className='icons' icon={faHouse} /> 
  {/* <span className='nav-text'>Home</span> */}
  </li> </Link>
  <Link to="about"spy={true}  smooth={true}>  <li className="p-4"> <FontAwesomeIcon className='icons'  icon={faUser} /> 
  {/* <span className='nav-text'>Home</span> */}
  </li> </Link>
  <Link to="resume" spy={true}  smooth={true}>    <li className="p-4"> <FontAwesomeIcon className='icons'  icon={faBarsProgress} /> 
  {/* <span className='nav-text'>Home</span> */}
  </li> </Link>
  <Link  to="skills" spy={true}  smooth={true}>     <li className="p-4"> <FontAwesomeIcon className='icons'  icon={faPenToSquare} /> 
  {/* <span className='nav-text'>Home</span> */}
  </li> </Link>
  <Link to="projects" spy={true} smooth={true}>      <li className="p-4"> <FontAwesomeIcon className='icons'  icon={faBriefcase} /> 
  {/* <span className='nav-text'>Home</span> */}
  </li> </Link>
  <Link to="contact" spy={true} smooth={true}>      <li className="p-4"> <FontAwesomeIcon className='icons'  icon={faMessage} /> 
  {/* <span className='nav-text'>Home</span> */}
  </li> </Link>

  <div className="indicator"></div>
      </ul>

      <div onClick={handleNav} className=" md:hidden">
       {!nav ?  <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faBars} />}
       
      </div>

      <div className={!nav ? "block md:hidden fixed left-0  w-36 h-screen bg-slate-400 border-r- border-r-yellow-600 ease-in-out-500" : "fixed left-[100%]"}>
        <ul className="pt-24">
        <li className="p-4"> <FontAwesomeIcon icon={faHouse} /> </li>
        <li className="p-4"> <FontAwesomeIcon icon={faUser} /> </li>
        <li className="p-4"> <FontAwesomeIcon icon={faBarsProgress} /> </li>
        <li className="p-4"> <FontAwesomeIcon icon={faPenToSquare} /> </li>
        <li className="p-4"> <FontAwesomeIcon icon={faBriefcase} /> </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar