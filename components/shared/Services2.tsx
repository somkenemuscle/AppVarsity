import Link from 'next/link'
import Image from 'next/image'

export default function Services() {

    return (
        <div className="bg-neutral-950 py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-14">
                <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="p-4 md: py-24">
                            <h1 className='font-bold text-4xl md:text-6xl text-gray-200 tracking-wide'>Empowering aptech students with <span className='text-orange-300'> resources</span></h1>
                            <p className='text-gray-300 mt-6 tracking-wide font-sans'>We will provide you with all the necessary resources needed to take and elevate your aptech career to the next level, ensuring continued growth.</p>
                            <div className='mt-6 flex gap-y-4 flex-wrap font-sans'>
                                <Link href='/resources/introduction'>
                                    <button className='bg-white mr-7 p-4 rounded'>Get Started  →</button>
                                </Link>

                                <Link href='/resources/introduction'>
                                    <button className='border text-white p-4 rounded hover:border-orange-400 tracking-wide hover:text-white transition-all duration-300'>Explore Resources</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-span-12 hidden lg:block  lg:col-span-6">
                        <div className='p-4'>
                            <img src="https://www.pngall.com/wp-content/uploads/12/Illustration-PNG-Images.png" alt="hr-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
