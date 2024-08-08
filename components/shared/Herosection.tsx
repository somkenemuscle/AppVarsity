import Link from "next/link";
import { FlipWords } from "../ui/flip-words";
import { words } from "@/constants/words";

const HeroSection = () => {
    return (
        <div className="relative isolate px-6 lg:px-8 bg-black">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3  text-sm leading-6 text-gray-300 ring-1 ring-gray-700 hover:ring-gray-600">
                        Unlock Aptech success ? Use Appvarsity today {' '}
                        <span className="font-semibold text-white">
                            <span aria-hidden="true" className="absolute inset-0" />
                            <span aria-hidden="true">&rarr;</span>
                        </span>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl ">
                        Empowering aptech students with <br /><FlipWords className="text-blue-100" words={words} />
                    </h1>
                    <p className="mt-6 text-lg  leading-8 text-gray-300">
                        We will provide you with all the neccessary resources needed to take and elevate your aptech career to the next level.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/sign-in"
                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-dark-100 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get Started 
                        </Link>
                        <Link href="/#sign-in" className="text-sm font-medium leading-6 hover:text-slate-100 text-white">
                            Explore Resources <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;


