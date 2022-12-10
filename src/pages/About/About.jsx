import React from "react";
import "./About.css";
import 'animate.css'
import ScrollAnimation from "react-animate-on-scroll";
import {motion, useViewportScroll, useTransform} from "framer-motion"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const About = () => {
  const { scrollYProgress } = useViewportScroll()
const scale = useTransform(scrollYProgress, [0, 1], [0.3, 3]);


  return (
    <div>
   
     <div className="about ">
     <ScrollAnimation className="animate__bounceIn" animateIn="fadeIn">   <h1 className="text-center about-head text-4xl font-semibold  mt-96">
        {" "}
       
        About Me
      </h1> </ScrollAnimation>
      </div>
      <section id="about" className="about mt-50 ml-20">
        <div className="conainer relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-6 mt-10">
              <p className="about-text text-white absolute text-start mt-6 break-all">
                Hey There!!
              </p>
              <p className="about-text text-white absolute text-start mt-20 break-all">
                I pursued BCA from Maulana Mazharul Haque Arabian and <br/> Persian
                University in 2020, also done my training <br />programme of Full
                Stack Development with MERN.
              </p>

              <p className="about-text text-white absolute text-start mt-52 break-all">
                As a Frontend Developer, I am also learning ui/ux as <br/>well, I'm
                looking for the suitable job in the domain of <br/> Frontend
                Developement or Web Designing, where I <br/>can work with full devotion and
                enthusiasm. I like to <br/>learn new skills everyday to gain
                knowledge & keep <br/>  on polishing my skills for a healthy growth.
              </p>
            </div>
            <motion.div style={{ scale }}  className="col-6 mt-10  absolute"> 
             <motion.div
      style={{
        scaleY: scrollYProgress
      }}
    />
    <img className='image2 img-fluid  h-96 w-96 abbsolute ' src="/assets/images/2.png" /></motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
