import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { withRouter } from "next/router";
import { motion } from 'framer-motion';
import { fadeIn } from '../../pages/variants';
import { useEffect, useState } from 'react';

export default function Skill() {

  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasPlayedAnimation) {
        const skillSection = document.getElementById('skill');
        if (skillSection) {
          const top = skillSection.getBoundingClientRect().top;
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

  const dataSkills = {
    data: [
      { id: 1, 
        image: '/next.png', 
        title: 'Next js', 
        description: 'Next.js is a React framework for building full-stack web applications. Use React Components to build user interfaces, and Next.js for additional features and optimizations.',
        link: 'https://nextjs.org/docs',
      },
      { id: 2, 
        image: '/react.png', 
        title: 'React js', 
        description: 'React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance.',
        link: 'https://react.dev/learn',
      },
      { id: 3, 
        image: '/springboot.png', 
        title: 'Spring boot', 
        description: 'Spring makes programming Java quicker, easier, and safer for everybody. Focus on speed, simplicity, and productivity has made it the world most popular Java framework.',
        link: 'https://spring.io/projects/spring-boot',
      },
      { id: 4, 
        image: '/javascript.png', 
        title: 'Javascript', 
        description: 'JavaScript is a high-level and dynamic programming language. JavaScript is popular on the internet and works in most popular web browsers.',
        link: 'https://id.wikipedia.org/wiki/JavaScript',
      },
      { id: 5, 
        image: '/java.png', 
        title: 'Java', 
        description: 'Java is a general purpose/non-specific programming language, and is specifically designed to utilize as few implementation dependencies as possible. ',
        link: 'https://www.java.com/en/',
      },
      { id: 6, 
        image: '/postgresql.png', 
        title: 'PostgreSQL', 
        description: 'PostgreSQL is a powerful, open source object-relational database system that has earned it a strong reputation for reliability, feature robustness, and performance.',
        link: 'https://www.postgresql.org/',
      },
      { id: 7, 
        image: '/mysql.png', 
        title: 'MySQL', 
        description: 'MySQL enables users to meet the database challenges generation web, cloud, and communications services uncompromising scalability, uptime and agility.',
        link: 'https://www.mysql.com/'
      },
      { id: 8, 
        image: '/redis.png', 
        title: 'Redis', 
        description: 'Redis is a key-value based database system. The key-value paradigm is a paradigm where data is stored in pairs.',
        link: 'https://redis.io/docs/latest/',
      },
      { id: 9, 
        image: '/tailwindcss.png', 
        title: 'TailwindCSS', 
        description: 'Tailwind CSS works by scanning all of HTML files, JavaScript components, and any other templates for class names, generating and then writing them to a static CSS file.',
        link: 'https://tailwindcss.com/docs/installation',
      },
      { id: 10, 
        image: '/bootstrap.png', 
        title: 'Bootstrap', 
        description: 'Bootstrap is a powerful, feature packed frontend toolkit. Build anything from prototype to production in minutes.',
        link: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
      },
      { id: 11, 
        image: '/laravel.png', 
        title: 'Laravel', 
        description: 'Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation freeing you to create without sweating the small things.',
        link: 'https://laravel.com/',
      },
      { id: 12, 
        image: '/php.png', 
        title: 'PHP', 
        description: 'A popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic.',
        link: 'https://www.php.net/',
      },
      { id: 13, 
        image: '/python.png', 
        title: 'Python', 
        description: 'Python is a programming language that lets you work quickly and integrate systems more effectively.',
        link: 'https://www.python.org/',
      },
      { id: 14, 
        image: '/excel.png', 
        title: 'Excel', 
        description: 'Microsoft Excel is an industry-leading spreadsheet software program, and is a powerful data analysis and visualization tool.',
        link: 'https://www.microsoft.com/id-id/microsoft-365/excel',
      },
    ]
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768, // breakpoint untuk layar kecil (sm)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate={hasPlayedAnimation ? "show" : "hidden"}
      id="skill">
      <div className="container mx-auto px-10">
        <div className="text-center w-full">
          <h1 className="text-[48px] text-bluefont font-semibold">Skills</h1>
        </div>
        <Slider {...settings}>
          {dataSkills.data.map((res) => (
            <div key={res.id} className="w-full mx-auto lg:px-2 px-1 my-3 flex">
              <div className="bg-skill my-2 rounded-[20px] flex flex-col">
                <div className="flex flex-col items-center"> 
                  <Image src={res.image} width={50} height={50} layout="fixed" className="mx-auto py-3" />
                  <h1 className="text-[28px] text-center">{res.title}</h1>
                  <p className="text-justify py-4 px-8 text-[18px]">{res.description}</p>
                </div>
                <div className="mt-auto mx-auto">
                  <Link href={res.link} target="_blank" className="">
                    <button className="bg-button-1 rounded-[10px] hover:opacity-90 hover:scale-105 transition duration-300 ease-in-out mb-4">
                      <p className="py-[14px] px-8 text-seeMore">Read More</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          </Slider>
      </div>
    </motion.section>
  )
}