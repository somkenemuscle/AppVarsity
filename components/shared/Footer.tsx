import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-gray-50 text-black shadow mt-52">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="lg:mx-20 md:mx-6 sm:flex sm:items-center sm:mx-auto sm:justify-between">
                    <Link href="/">
                        <span className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse text-2xl font-extrabold whitespace-nowrap dark:text-gray-500">
                            App<span className='text-blue-100'>varsity</span>
                        </span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-500">
                        <li>
                            <Link href="#">
                                <span className="hover:underline me-4 md:me-6">About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="hover:underline me-4 md:me-6">Contact Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/resources/introduction">
                                <span className="hover:underline">Resources</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6  sm:mx-auto  lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024 <Link href="/"><span className="hover:underline">Appvarsity</span></Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer;
