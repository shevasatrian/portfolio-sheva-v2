import { useEffect, useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

export default function About() {
  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasPlayedAnimation) {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          const top = aboutSection.getBoundingClientRect().top;
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
    <motion.section 
      variants={fadeIn}
      initial="hidden"
      animate={hasPlayedAnimation ? "show" : "hidden"}
      id="about"
      className="lg:pt-16 pb-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full self-center items-center lg:w-1/2">
            <Image src='/fig-about.png' width={806} height={835} layout="fixed" className="" />
          </div>
          <div className="w-full self-center lg:w-1/2 px-4">
            <h1 className="text-[48px] font-bold">About <span className="text-bluefont">Me</span></h1>
            <h1 className="text-3xl font-bold">Aspiring Full-Stack Developer and Tech Enthusiast</h1>
            <p className="opacity-70 text-[18px] pt-8 pb-10 text-justify">Driven and enthusiastic Computer Science graduate with a strong commitment to continuous learning. Passionate about contributing to innovative projects in collaborative environments. Seeking opportunities to leverage my skills and creativity in software development to create meaningful solutions in the tech industry. Dedicated to personal and professional growth to continuously improve and stay ahead of technology advancements.</p>
            <button className="bg-button-1 rounded-[10px] hover:opacity-90 hover:scale-105 transition duration-300 ease-in-out mt-4">
              <p className="py-[14px] px-8 text-seeMore">See More</p>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
