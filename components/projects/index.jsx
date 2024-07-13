import React, { Component, useState, useEffect  } from "react"
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { fadeIn } from '../../pages/variants';

export default function Projects() {

  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasPlayedAnimation) {
        const projectSection = document.getElementById('project');
        if (projectSection) {
          const top = projectSection.getBoundingClientRect().top;
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

  const listProjects = {
    data: [
      { id: 1, 
        image: '/project-1.png', 
        title: 'SnapTalk Social Media',
        link: 'https://snap-talk-rho.vercel.app/',
      },
      { id: 2, 
        image: '/project-2.png', 
        title: 'Job Finder Website',
        link: 'https://job-finder-sheva.netlify.app/',
      },
      { id: 3, 
        image: '/project-3.png', 
        title: 'My Previous Portfolio Website',
        link: 'https://shevasatrian.github.io/portfolio-sheva/',
      },
      { id: 4, 
        image: '/project-4.png', 
        title: 'Notebook Planner', 
        link: 'https://notebook-planner-three.vercel.app/login',
      },
      { id: 5, 
        image: '/project-5.png', 
        title: 'My Current Portfolio', 
        link: '#',
      },
    ]
  }

  const [imageIndex, setImageIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Panggil sekali saat komponen dimuat

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 768, // breakpoint untuk layar kecil (sm)
        settings: {
          slidesToShow: 1,
          arrows: !isMobile,
        },
      },
    ],
    beforeChange: (current, next) => setImageIndex(next)
  };

  return (
    <motion.section 
      variants={fadeIn}
      initial="hidden"
      animate={hasPlayedAnimation ? "show" : "hidden"}
      id="project" 
      className="relative my-16">
      <div className="absolute inset-0 z-[-1] m-auto h-4/6 w-10/12">
      <Image
        src="/background-project.png"  // Sesuaikan dengan path gambar Anda
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="mx-auto my-20 overflow-visible"
      />
    </div>
      <div className="container mx-auto pt-16 pb-16">
        <div className="text-center w-full pb-12">
          <h1 className="text-[48px] text-bluefont font-semibold"><span className="text-white">My </span>Projects</h1>
        </div>
        <Slider {...settings} >
          {listProjects.data.map((res, idx) => (
            <div key={res.id} className={`w-full mx-auto my-12 flex transition duration-1000 ${idx === imageIndex ? "scale-125" : "scale-75"}`}>
              <Link href={res.link} target="_blank" className="">
              <div className={`bg-opacity-90 backdrop-blur-sm mx-1 my-2 rounded-[20px]  flex flex-col transition duration-1000 ${idx === imageIndex ? "bg-project-active" : "bg-project-passive"}`}>
                <div className="flex flex-col items-center"> 
                  <Image src={res.image} width={500} height={400} layout="fixed" className="mx-auto py-2" />
                  <div className="bg-black bg-opacity-30 inline-block px-4 py-2 rounded-md w-full h-full">
                    <h1 className="text-[24px] text-center font-bold">{res.title}</h1>
                  </div>
                </div>
              </div>
            </Link>
            </div>
          ))}
          </Slider>
      </div>
    </motion.section>
  )

}