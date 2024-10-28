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


                <hr className="my-6  sm:mx-auto  lg:my-8" />
                <div id='contact-us' className='p-2 sm:text-left'>
                    <p className=' text-gray-500 block text-sm  sm:text-center'>Reach out to us via Mail or Whatsapp  <span aria-hidden="true">→</span> <br />
                        <Link href="mailto:appvarsitytech@gmail.com" >
                            <span  className='font-normal hover:underline text-black'>appvarsitytech@gmail.com </span>
                        </Link>
                        |
                        <Link href='https://wa.me/2349068406794'>
                            <span  className='text-black hover:underline font-normal'> +234(9068406794)</span>
                        </Link>

                    </p>
                </div>


                <hr className=" sm:mx-auto my-4" />
                <span className="block text-sm  sm:text-center text-gray-500">
                    © 2024 <Link href="/"><span className="hover:underline">Appvarsity</span></Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer;
