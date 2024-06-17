import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="lg:pt-16 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full self-center items-center lg:w-1/2">
            <Image src='/fig-about.png' width={806} height={835} layout="fixed" className="" />
          </div>
          <div className="w-full self-center lg:w-1/2 px-4">
            <h1 className="text-[48px] font-bold">About <span className="text-bluefont">Me</span></h1>
            <h1 className="text-[42px] font-bold">Frontend Enthusiast</h1>
            <p className="opacity-70 text-[18px] pt-8 pb-10 text-justify">Enthusiastic about technological advances such as programming and databases, interested and have learned things in the fields of front end developer. Familiar coding HTML, CSS and Javascript with frameworks such as Next.js, React.js, TailwindCSS and Bootstrap. I think it’s my passion but I like to learn new things.</p>
            <button className="bg-button-1 rounded-[10px] hover:opacity-90 hover:scale-105 transition duration-300 ease-in-out mt-4">
              <p className="py-[14px] px-8 text-seeMore">See More</p>
            </button>
            
          </div>
        </div>
      </div>
    </section>
  )

}