import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import About from '@/components/about'
import Skill from '@/components/skill'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const inter = Inter({ subsets: ['latin'] })
const LayoutComponent = dynamic(() => import("@/layout"))
const PDF_FILE_URL = 'https://shevasatrian.vercel.app/cv.pdf'

export default function Main({ children }) {
  const downloadFileAtURL = (url) => {
    const filename = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', filename)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  const listSosmedCV = {
    data: [
      {
        image: '/facebook-bw.png',
        link: '/',
      },
      {
        image: '/twitter-bw.png',
        link: 'https://x.com/shevasatrian5',
      },
      {
        image: '/linkedin-bw.png',
        link: 'https://www.linkedin.com/in/sheva-satrian-999779256/',
      },
      {
        image: '/instagram-bw.png',
        link: 'https://www.instagram.com/sheva_str/',
      },
    ]
  }
  return (
    <>
      <LayoutComponent>
        <motion.section 
        variants={fadeIn}
        initial="hidden"
        animate="show"
        id='home' 
        className='pt-24'>
          <div className='container mx-auto'>
            <div className='flex flex-wrap'>
              <div className='w-full lg:py-20 px-4 lg:w-1/2'>
                <h2 className='text-42px font-bold py-2'>Hello I'm</h2>
                <h1 className='text-7xl font-bold gradient-text text-transparent bg-clip-text'>SHEVA SATRIAN</h1>
                <h2 className='text-3xl font-bold py-2'>And I'm a Aspiring Full-Stack Developer and Tech Enthusiast</h2>
                <p className='opacity-70 pt-8 text-justify'>Welcome to my personal website! Here, you'll find a comprehensive overview of my experiences and skills. The "About Me" section provides a brief glimpse into my background and personal interests. Meanwhile, the "Skills" section lists various abilities I've developed throughout my career. My diverse portfolio of projects can be explored in the "Projects" section, offering in-depth insights into my work. If you're interested in getting in touch or collaborating, feel free to reach out through the "Contact" section. Thank you for visiting this page, and I hope you enjoy exploring my portfolio!</p>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className='pl-20 pt-8'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="101" height="101" viewBox="0 0 101 101" fill="none">
                  <path d="M47.2192 100.884C19.3322 99.0093 -1.75885 74.8718 0.115905 47.2192C2.22501 19.3322 26.1282 -1.75885 54.0152 0.115905C81.6678 2.22501 102.759 26.1282 100.884 54.0152C99.0093 81.6678 74.8718 102.759 47.2192 100.884Z" fill="url(#paint0_radial_1_252)"/>
                  <defs>
                    <radialGradient id="paint0_radial_1_252" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(71.8682 36.0489) rotate(93.8705) scale(64.9684)">
                      <stop offset="0.00887753" stop-color="#DEF9FA"/>
                      <stop offset="0.1723" stop-color="#BEF3F5"/>
                      <stop offset="0.4204" stop-color="#9DEDF0"/>
                      <stop offset="0.5512" stop-color="#7DE7EB"/>
                      <stop offset="0.7154" stop-color="#5CE1E6"/>
                      <stop offset="1" stop-color="#33BBCF"/>
                    </radialGradient>
                  </defs>
                  </svg>
                </div>
                <div className='mt-[-50px] pl-8'>
                  <Image src='/foto-sheva-1.png' width={540} height={549} layout="fixed" />
                </div>
              </div>
              <div className='flex w-full flex-wrap custom-bg-cv self-center px-3 py-6 mx-3'>
                <div className='flex items-center lg:w-1/2 justify-center mx-auto'>
                  <button type="" className='flex items-center hover:opacity-80 hover:scale-105  transition duration-300 ease-in-out' onClick={() => {downloadFileAtURL(PDF_FILE_URL)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <path d="M9.16666 36.6667H34.8333V33H9.16666V36.6667ZM34.8333 16.5H27.5V5.5H16.5V16.5H9.16666L22 29.3333L34.8333 16.5Z" fill="white"/>
                    </svg>
                    <p className='pl-8 gradient-text text-transparent bg-clip-text text-2xl'>DOWNLOAD CV</p>
                  </button>
                </div>
                <div className='flex items-center lg:w-1/2 pt-4 lg:pt-0 mx-auto'>
                  {listSosmedCV.data.map((res) => (
                    <div className="flex flex-wrap">
                      <Link href={res.link} target="_blank" className="text-base mx-2 flex group-hover:text-primary hover:scale-105 transition duration-300 ease-in-out hover:font-bold px-4 lg:px-8"><Image src={res.image} width={46} height={46}></Image></Link>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </motion.section>
        <About />
        <Skill />
        <Projects />
        <Contact />
      </LayoutComponent>
    </>
  )
}
