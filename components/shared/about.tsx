import Image from "next/image"
import Link from "next/link"
import SlideIn from "./SlideIn"

function About() {
    return (
        <SlideIn direction="bottom">
            <div id="features" className='max-w-6xl mx-auto px-10 my-20 hidden lg:block'>
                <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="p-4 md: py-24">
                            <h1 className='font-bold text-3xl md:text-5xl'>Get access to<span className='text-orange-400'> past questions</span></h1>
                            <p className=' mt-6 font-medium tracking-wide'>(1) Access to past examination questions from previous students which will help you in your exam preparation.
                            <br />
                            (2) Our collection includes detailed reports, project synopsis, and expert advice to help you excel in your own projects.
                            </p>
                            <div className='mt-6'>
                                <Link href='/resources/examination/pastquestions'>
                                    <button className='bg-gray-900 text-white mr-7 p-4 rounded'>View past questions →</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-span-12 hidden lg:block  lg:col-span-6">
                        <div>
                            <img src="https://www.vhv.rs/dpng/d/285-2856039_stack-documents-transparent-cartoons-documents-drawing-hd-png.png" width={500} height={500}  alt="hr-img" />
                        </div>
                    </div>
                </div>
            </div>

            <div id='service' className="bg-neutral-900 py-32 my-20 block lg:hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-mono leading-7 text-gray-500"></h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                            Get access to<span className='text-orange-400'> past questions</span>
                        </p>
                        <p className="mt-6  leading-8  text-gray-300 font-sans font-light tracking-wide">
                            Access to past examination questions from previous students which will help you in your exam preparation.
                            Our collection includes detailed reports, project synopsis, and expert advice to help you excel in your own projects.
                        </p>
                        <div className='mt-6'>
                            <Link href='/resources/examination/pastquestions'>
                                <button className='bg-white text-black mr-7 p-4 rounded'>View past questions →</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </SlideIn>
    )
}

export default About