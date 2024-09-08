import Link from "next/link";
import SlideIn from "./SlideIn";


const HeroSection = () => {
    return (
        <div className="relative isolate px-6 lg:px-8 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="ball"></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-60 z-10 relative">
          <SlideIn direction="top">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 text-sm leading-6 text-white ring-1 ring-gray-700 hover:ring-gray-600 p-1 font-light">
                Aptech success ? <span className="text-blue-400">Use Appvarsity today</span> {' '}
                <span className="font-semibold text-blue-400">
                  <span aria-hidden="true" className="absolute inset-0" />
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl ">
                Empowering aptech students with <span className="text-blue-400">resources!</span>
              </h1>
              <p className="mt-6 text-lg font-light leading-8 text-gray-300">
                We will provide you with all the <span className="font-bold">necessary resources </span> needed to take and elevate your aptech career to the next level, ensuring <span className="font-semibold">continued growth</span>.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/resources/introduction"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-dark-100 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Get Started
                </Link>
                <Link href="/resources/introduction" className="font-medium leading-6 hover:text-slate-100 text-gray-300">
                  Explore Resources <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
      
    )
}

export default HeroSection;


