import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import './Projects.css'

SwiperCore.use([EffectCoverflow, Pagination]);

const Navbar = () => {
  return (
    <div className="mt-96">
        <h1 className='project-head  text-center text-4xl font-semibold'>My Projects</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          autoplay:true,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >

<SwiperSlide className="hover-img">
          <img className="projects h-96 width-96" src="/assets/images/login.png" alt="" />
          <div className="project-caption">
            <h4>Login Page </h4>

      <div className="inline-flex">
     
  <a href="https://www.behance.net/snehasingh32" target="_blank" ><button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    View
  </button></a>
</div>      
        </div>
</SwiperSlide>

        <SwiperSlide className="hover-img">
          <img className="projects h-96 width-96" src="/assets/images/project-img.png" alt="" />
          <div className="project-caption">
            <h4>Cafe House</h4>

      <div className="inline-flex">
      <a href="https://github.com/snea03/mycafehouse" target="_blank" > <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    code
  </button></a>
  <a href="https://mycafehouse.vercel.app/" target="_blank" ><button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    live
  </button></a>
</div>      
        </div>
</SwiperSlide>


<SwiperSlide className="hover-img">
          <img className="projects h-96 width-96" src="/assets/images/project3.png" alt="" />
          <div className="project-caption">
            <h4>Landing Page</h4>

      <div className="inline-flex">
      <a href="https://github.com/snea03/interior_decor" target="_blank"> <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    code
  </button></a>
  <a href="https://interior-decor.vercel.app/" target="_blank"><button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    live
  </button></a>
</div>      
        </div>
</SwiperSlide>

<SwiperSlide className="hover-img">
          <img className="projects h-96 width-96" src="/assets/images/app icon.png" alt="" />
          <div className="project-caption">
            <h4>App icon </h4>

      <div className="inline-flex">
     
  <a href="https://www.behance.net/snehasingh32" target="_blank" ><button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    View
  </button></a>
</div>      
        </div>
</SwiperSlide>


<SwiperSlide className="hover-img">
          <img className="projects h-96 width-96" src="/assets/images/project2.png" alt="" />
          <div className="project-caption">
            <h4>Profile Card</h4>

      <div className="inline-flex">
      <a href="https://github.com/snea03/Profile_card" target="_blank"> <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    code
  </button></a>
  <a href="https://profile-card-five-drab.vercel.app/" target="_blank"><button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    live
  </button></a>
</div>      
        </div>
</SwiperSlide>

<SwiperSlide className="hover-img">
          <img className="projects h-96 width-96" src="/assets/images/project-img4.png" alt="" />
          <div className="project-caption">
            <h4>Dashboard with login</h4>

      <div className="inline-flex">
      <a href="https://github.com/snea03/dashboardwithlogin" target="_blank"> <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    code
  </button></a>
  <a href="https://dashboardwithlogin.vercel.app/" target="_blank"><button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    live
  </button></a>
</div>      
        </div>
</SwiperSlide>
       
<SwiperSlide className="hover-img">
          <img className="projects h-96 width-96" src="/assets/images/project-img2.png" alt="" />
          <div className="project-caption">
            <h4>E-Learning</h4>

      <div className="inline-flex">
      <a href="/" > <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    code
  </button></a>
  <a href="https://learn-with-internsland.netlify.app/" target="_blank" ><button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    live
  </button></a>
</div>      
        </div>
</SwiperSlide>

<SwiperSlide className="hover-img">
          <img className="projects h-96 width-96" src="/assets/images/project4.png" alt="" />
          <div className="project-caption">
            <h4>A mini gallery </h4>

      <div className="inline-flex">
      <a href="https://github.com/snea03/small-gallery" target="_blank" > <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    code
  </button></a>
  <a href="https://small-gallery.vercel.app/" target="_blank" ><button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    live
  </button></a>
</div>      
        </div>
</SwiperSlide>

<SwiperSlide className="hover-img">
          <img className="projects h-96 width-96" src="/assets/images/signup-page.png" alt="" />
          <div className="project-caption">
            <h4>A Signup Page </h4>

      <div className="inline-flex">
     
  <a href="https://www.behance.net/snehasingh32" target="_blank" ><button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    View
  </button></a>
</div>      
        </div>
</SwiperSlide>


<SwiperSlide className="hover-img">
          <img className="projects h-96 width-96" src="/assets/images/404.png" alt="" />
          <div className="project-caption">
            <h4>404 Error </h4>

      <div className="inline-flex">
     
  <a href="https://www.behance.net/snehasingh32" target="_blank" ><button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-2 px-3 mr-2 rounded-full">
    View
  </button></a>
</div>      
        </div>
</SwiperSlide>


        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Navbar;