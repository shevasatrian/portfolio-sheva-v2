import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  return (
    <header className={`pt-2 w-full bg-transparent fixed top-0 flex items-center z-10 ${
      scrolled ? "bg-opacity-90 shadow-lg backdrop-blur-sm" : ""
    }`}>
       <div className="container mx-auto py-3">
          <div className="flex items-center justify-between relative">
             <div className="px-4 flex items-center hover:scale-105 transition duration-300 ease-in-out">
                    <Image src='/logo.png' width={40} height={40} layout="fixed" />
                    <Link href={'/'} className="font-bold text-lg text-dark px-2 ">Port<span className="text-bluefont">folio</span> </Link>
                </div>
                <div className="flex items-center px-4 ">
                <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block lg:hidden"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6 fill-current text-white hover:text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
                    <nav id="nav-menu" className={`${menuOpen ? "block" : "hidden"} 
                    absolute py-3 bg-slate-500 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>
                    <ul className="block lg:flex">
                        <li className="group">
                        <Link href='#' className="text-base py-2 mx-8 flex group-hover:text-primary hover:scale-105 transition duration-300 ease-in-out hover:font-bold">Home</Link>
                        </li>
                        <li className="group">
                        <Link href='#about' className="text-base py-2 mx-8 flex group-hover:text-primary hover:scale-105 transition duration-300 ease-in-out hover:font-bold">About Me</Link>
                        </li>
                        <li className="group">
                        <Link href='#skill' className="text-base py-2 mx-8 flex group-hover:text-primary hover:scale-105 transition duration-300 ease-in-out hover:font-bold">Service</Link>
                        </li>
                        <li className="group">
                        <Link href='#project' className="text-base py-2 mx-8 flex group-hover:text-primary hover:scale-105 transition duration-300 ease-in-out hover:font-bold">Project</Link>
                        </li>
                        <li className="group">
                        <Link href='#contact' className="text-base py-2 mx-8 flex group-hover:text-primary hover:scale-105 transition duration-300 ease-in-out hover:font-bold">Contact</Link>
                        </li>
                    </ul>
                    </nav>
                </div>
                </div>
            </div>
        </header>
  )
}