import Link from "next/link";
import { PlayIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-neutral-950 pb-16 lg:pb-0  pt-56 px-8">
      <div className="grid grid-cols-12 gap-4 items-center max-w-6xl mx-auto">
        <div className="col-span-12 lg:col-span-6">
          <div className="text-white bg-neutral-800 py-2 px-4 w-fit mb-2 text-xs rounded-lg flex items-center gap-3">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span> Mobile App Coming Soon
          </div>
          <h1 className='font-medium text-4xl md:text-5xl text-gray-200'>Providing Aptech <br /> <span className='text-indigo-400 font-light'><i>𝓢tu∂eɳts</i></span> With Resources</h1>
          <p className='text-gray-400 mt-6 tracking-wide font-sans font-light'>We provide you with all the necessary resources needed to take and elevate your aptech career to the next level using Appvarsity</p>
          <div className='mt-6 flex gap-y-4 flex-wrap font-sans'>
            <Link href='/resources/introduction'>
              <button className='bg-white hover:bg-gray-300 mr-7 px-4 py-3 rounded text-sm flex items-center gap-2'>Get Started  <PlayIcon className="text-indigo-700 fill-indigo-700 w-4 h-4" /></button>
            </Link>

            <Link href='/resources/introduction'>
              <button className='border-2 border-neutral-800 text-white px-4 py-3 rounded text-xs hover:border-indigo-400 tracking-wider hover:text-white transition-all duration-300 font-mono'>Explore Resources →</button>
            </Link>
          </div>
        </div>
        <div className="col-span-12 hidden lg:block lg:col-span-6">
          <img src="/assets/images/rss.PNG" alt="hr-img" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection;

