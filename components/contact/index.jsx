import React, { Component, useState, useEffect } from "react"
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

export default function Contact() {

  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasPlayedAnimation) {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          const top = contactSection.getBoundingClientRect().top;
          if (top < window.innerHeight * 0.5) {
            setHasPlayedAnimation(true);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasPlayedAnimation]);

  return (
    <>
      <motion.section 
      variants={fadeIn}
      initial="hidden"
      animate={hasPlayedAnimation ? "show" : "hidden"}
      id="contact" 
      className="lg:pt-20 lg:pb-[24rem] pb-[16rem] mb-16 relative">
        <div className="container mx-auto">
          <div className="text-center w-full pb-16">
            <h1 className="text-[48px] text-bluefont font-semibold"><span className="text-white">Contact </span>Me!</h1>
          </div>
          {/* card 2 kolom */}
          <div className="flex flex-wrap bg-contact lg:w-9/12 mx-4 lg:mx-auto">
            <div className="w-full lg:w-1/2 lg:pr-14 lg:pl-[5rem] pl-4 py-8">
              <h1 className="text-[24px] font-bold pb-6">Get in touch</h1>
              <p className="text-[17px] font-normal lg:pr-[8rem] pr-2 pb-16">I'm very approachable and would love to speak to you. Feel free to call, send me an email. Follow me in social media or simply complete the enquiry form.</p>
              <div className="flex items-center pb-4">
                <div className="mr-4">
                  <Image src="/phone-icon.png" alt="Phone Icon" width={40} height={40} />
                </div>
                <div>
                  <p className="text-[15px] font-normal">+6281271965757</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image src="/email-icon.png" alt="Email Icon" width={40} height={40} />
                </div>
                <div>
                  <p className="text-[15px] font-normal">shevasatrian5@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-8 lg:pr-[5rem] px-4 lg:px-0">
              <h1 className="text-[24px] font-bold pb-6">Send Me A Message</h1>
              {/* kolom nama */}
              {/* <label for="name"></label> */}
              <input type="text" id="name" placeholder="Name" style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }} className="w-full px-4 py-2 rounded-[10px] placeholder:text-gray-200 text-white focus:outline-none focus:border-blue-500 mb-6 hover:opacity-90 hover:scale-105 transition duration-300 ease-in-out" />
              <input type="text" id="name" placeholder="Email Address" style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }} className="w-full px-4 py-2 rounded-[10px] placeholder:text-gray-200 text-white focus:outline-none focus:border-blue-500 mb-6 hover:opacity-90 hover:scale-105 transition duration-300 ease-in-out" />
              <input type="text" id="name" placeholder="Subject" style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }} className="w-full px-4 py-2 rounded-[10px] placeholder:text-gray-200 text-white focus:outline-none focus:border-blue-500 mb-6 hover:opacity-90 hover:scale-105 transition duration-300 ease-in-out" />
              <textarea rows="8" cols="" placeholder="Your Message" style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }} className="w-full px-4 py-2 rounded-[10px] placeholder:text-gray-200 text-white focus:outline-none focus:border-blue-500 mb-6 hover:opacity-90 hover:scale-105 transition duration-300 ease-in-out"></textarea>
              <button className="bg-button-1 rounded-[10px] hover:opacity-90 hover:scale-105 transition duration-300 ease-in-out mb-4">
                <p className="py-[18px] font-medium px-8 text-seeMore">Send Message</p>
              </button>
            </div>
          </div>
          {/* bg image robot */}
          <div className="bg-robot mt-[80rem] lg:mt-[36rem]">
          </div>
        </div>
      </motion.section>
    </>
  )
}