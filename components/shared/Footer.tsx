import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-neutral-900 text-white shadow mt-52 font-sans">

            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="lg:mx-20 ml-3 md:mx-6 sm:flex sm:items-center sm:mx-auto sm:justify-between tracking-wide ">
                    <Link href="/">
                        <span className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse text-2xl font-extrabold whitespace-nowrap dark:text-gray-500">
                            App<span className='text-orange-400'>varsity</span>
                        </span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-100">
                        <li>
                            <Link href="#faqs">
                                <span className="hover:underline me-4 md:me-6">FAQs</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/resources/introduction">
                                <span className="hover:underline">Resources</span>
                            </Link>
                        </li>
                    </ul>
                </div>


                <hr className="my-6  sm:mx-auto border-0.5 border-neutral-700  lg:my-8" />
                <div id='contact-us' className='p-2 sm:text-left tracking-wide'>
                    <p className='block sm:text-center font-light'>Reach out to us<span aria-hidden="true"> →</span> <br />
                        <Link href="mailto:appvarsitytech@gmail.com" >
                            <span className='text-gray-200 hover:underline text-base'>appvarsitytech@gmail.com  →</span>
                        </Link>

                        <Link href='https://wa.me/2349068406794'>
                            <span className='text-base hover:underline text-gray-200'> +2349068406794</span>
                        </Link>

                    </p>
                </div>


                <hr className=" sm:mx-auto my-4 border-0.5 border-neutral-700" />
                <span className="block text-sm ml-3 sm:text-center text-gray-400">
                    © 2025 <Link href="/"><span className="hover:underline">Appvarsity</span></Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer;
