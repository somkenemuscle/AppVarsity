import Link from "next/link";
import { FlipWords } from "../ui/flip-words";

const HeroSection = () => {
    const words = ["Resources", "Information"];
    return (
        <div className="relative isolate px-6 pt-10 lg:px-8 bg-neutral-950">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">        
                <div className="text-center">
                    <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                        Empowering Aptech Students with Essential <br /> <FlipWords className="text-blue-100" words={words} />
                    </h1>
                    <p className="mt-6 text-lg font-extralight leading-8 text-gray-300">
                        Welcome to Appvarsity, we provide you with all the
                        neccessary resources needed to take your aptech career
                        to the next level.

                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/documents"
                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-dark-100 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Explore Resources
                        </Link>
                        <Link href="/sign-in" className="text-sm font-semibold leading-6 text-white">
                            See Questions <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
