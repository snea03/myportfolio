import emailJS from 'emailjs-com';
import React, { useState } from 'react'

import "./Contact.css";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailJS.sendForm("service_lru4ivl", "template_2t1vhgl", e.target, "69eWehBlUVfLBCY8w")
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  }
  // const [name , setName] = useState('');
  // const [email , setEmail] = useState('');

  // const handleChange =(e)=>{
  //     setName(e.target.value);
  //   }
  //   const handleEmailChange =(e)=>{
  //     setEmail(e.target.value);
  //   }

  
  return (
    <div>

      <h1 className="text-center text-4xl font-semibold contact-head mt-96">
        {" "}
        Contact Me
      </h1>
      <section id="about" className="about mt-50">
        <div className="conainer relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-6 mt-10  absolute">
              <img className=' img-fluid contact-img mt-24 ml-14 h-96 w-96 abbsolute ' src="/assets/images/3.png" />
            </div>

            <div className="contact col-6 mt-10 relative ">

              <form className='mt-16' onSubmit={sendEmail}>
                <label className="ml-9 contact-label block text-white-700 text-lg font-bold mb-2">Name:</label>
                <input className="shadow  border-10 rounded-2xl   mx-7 h-16  text-white text-2xl leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" placeholder="Enter your name" />

                <label className="mt-7 contact-label ml-9 block text-gray-700 text-lg font-bold mb-2">Email:</label>
                <input className="shadow appearance-none border rounded-2xl   mx-7 h-16 text-white text-2xl leading-tight bg-white focus:outline-none focus:shadow-outline" type="email" name="user_email" placeholder="Enter your email" />

                <label className="mt-7 contact-label ml-9 block text-gray-700 text-lg font-bold mb-2">Message:</label>
                <textarea className="shadow textarea appearance-none border rounded-2xl   mx-7 text-white text-2xl bg leading-tight focus:outline-none focus:shadow-outline" name="message" cols="20" rows="6" placeholder='Your Message.....'></textarea>
                <div class="flex items-center justify-between">
                  <input className=" button bg-blue-800 mt-5  hover:text-cyan-200 text-white text-2xl  py-4 px-60 ml-5  mx-80 rounded-full focus:outline-none focus:shadow-outline" type="submit" value="send" placeholder="Enter your email" />
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact