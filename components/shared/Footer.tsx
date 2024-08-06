import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-neutral-950 text-white shadow mt-52">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/">
                        <span className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Appvarsity
                        </span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="#">
                                <span className="hover:underline me-4 md:me-6">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="hover:underline me-4 md:me-6">Contact Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="hover:underline">FAQs</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
                <span className="block text-sm text-white sm:text-center dark:text-gray-400">
                    © 2024 <Link href="/"><span className="hover:underline">Appvarsity</span></Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer;
