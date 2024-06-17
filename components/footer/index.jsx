import Link from "next/link";
import Image from "next/image";

export default function Footer() {

  const listMenu = {
    data: [
      { id: 1, 
        image: '/home.png', 
        title: 'Home',
        link: '#',
      },
      { id: 2, 
        image: '/about.png', 
        title: 'About me',
        link: '#about',
      },
      { id: 3, 
        image: '/work.png', 
        title: 'Work',
        link: '#project',
      },
      { id: 4, 
        image: '/contact.png', 
        title: 'Contact', 
        link: '#contact',
      },
    ]
  }

  const listSosmed = {
    data: [
      {
        image: '/Instagram.png',
        link: 'https://www.instagram.com/sheva_str/',
      },
      {
        image: '/Linkedin.png',
        link: 'https://www.linkedin.com/in/sheva-satrian-999779256/',
      },
      {
        image: '/YouTube.png',
        link: 'https://www.youtube.com/channel/UCmbJasu7iQYcfjlnz_PrWoQ',
      },
    ]
  }

  return (
    <div className="container mx-auto pb-6">
      <div className="flex flex-wrap items-center justify-center text-center pb-12 mx-2 lg:mx-0">
        {listMenu.data.map((res) => (
          <div className="flex flex-wrap py-2">
            <Image src={res.image} width={24} height={24}></Image>
            <Link href={res.link} className="text-base mx-8 flex group-hover:text-primary hover:scale-105 transition duration-300 ease-in-out hover:font-bold">{res.title}</Link>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center pb-6">
        {listSosmed.data.map((res) => (
          <div className="flex flex-wrap">
            <Link href={res.link} target="_blank" className="text-base mx-2 flex group-hover:text-primary hover:scale-105 transition duration-300 ease-in-out hover:font-bold"><Image src={res.image} width={56} height={56}></Image></Link>
          </div>
        ))}
      </div>

      <div className="pb-[0.0250rem] bg-slate-500 mx-2 lg:mx-0"></div>

      <div className="flex items-center justify-center text-center pt-4 text-sm">
        <p className="text-slate-400">Copyright © 2024 Sheva Satrian, using <Link href="https://nextjs.org/" target="_blank" className="text-slate-300">Next.js</Link> and <Link href="https://tailwindcss.com/" target="_blank" className="text-sky-400">TailwindCSS</Link> </p>
      </div>
      
    </div>
  )
}