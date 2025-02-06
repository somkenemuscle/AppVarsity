import Link from "next/link"
import { PlayIcon } from "@heroicons/react/24/outline"


function About() {
    return (
        <div id="features" className='mt-20 mb-36 px-8'>
            <div className="grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto">
                <div className="col-span-12 md:col-span-6">
                    <div className="font-sans">
                        <h1 className='font-semibold text-3xl md:text-5xl'>Get Access To Past<span className='text-indigo-400'> <i className="font-medium">Questions</i></span></h1>
                        <p className='mt-6 text-gray-600'>
                            1. Access to past examination questions from previous students which will help you in your exam preparation.
                        </p>
                        <p className="mt-4 text-gray-600">
                            2. Our collection includes detailed reports, project synopsis, and expert advice to help you excel in your own projects.
                        </p>
                        <p className="mt-4 text-gray-600">
                            3. Gain valuable insights from well-documented case studies and research materials to deepen your understanding and enhance your learning experience
                        </p>

                        <div className='mt-6'>
                            <Link href='/resources/examination/pastquestions'>
                                <button className='bg-neutral-800 text-white mr-7 px-4 py-3 rounded text-sm flex items-center gap-2'>Review Past Questions  <PlayIcon className="text-indigo-400 fill-indigo-400 w-4 h-4" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div>
                        <img src="/assets/images/ass.PNG" className="w-full" alt="hr-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About