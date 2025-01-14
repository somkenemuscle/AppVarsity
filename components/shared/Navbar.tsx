'use client'; // Indicate that this is a client-side rendered component
import { useState } from 'react'; // Import useState and useEffect hooks from React
import { Dialog, DialogPanel } from '@headlessui/react'; // Import Dialog and DialogPanel components from Headless UI
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Import icons from Heroicons
import Link from 'next/link'; // Import Link from Next.js
import { navigation } from '@/constants/navigation';

import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

const Navbar = () => {
    // State to control the mobile menu open/close
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className='navbar-body'>
            <header className='fixed inset-x-0 top-0 z-50'>
                <nav aria-label="Global" className="flex items-center justify-between p-5 lg:px-36 text-white bg-black">
                    <div className="flex lg:flex-1">
                        {/* Company logo */}
                        <Link href="/" className="-m-1.5 p-1.5">
                            <h1 className='font-extrabold  text-blue-400 tracking-wider text-lg'>App<span className='text-white'>varsity</span></h1>
                        </Link>
                    </div>

                    <div className="flex lg:hidden">
                        {/* Button to open mobile menu on small screens */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6 text-white" />
                        </button>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12 font-light">
                        {/* Navigation links for large screens */}
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}// Use fragment identifier
                                className='leading-6 tracking-wider hover:text-slate-300'>
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {/* Log in link for large screens */}


                        {/* Render links if a user is signed in */}
                        <SignedIn>
                            <UserButton />
                        </SignedIn>

                        {/* Render links if a user is signed out */}
                        <SignedOut>
                            <Link
                                href="/sign-in"
                                className='leading-6 bg-white font-semibold text-black p-2 px-7 rounded-lg hover:bg-slate-300 '>
                                Sign in
                            </Link>
                        </SignedOut>


                    </div>
                </nav>

                {/* Mobile menu dialog */}
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            {/* Company logo in mobile menu */}
                            <Link href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <h1 className='font-extrabold text-slate-950'>App<span className='font-extrabold text-blue-100'>Varsity</span></h1>
                            </Link>

                            {/* Button to close mobile menu */}
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                {/* Navigation links in mobile menu */}
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href} // Use fragment identifier
                                            className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                {/* Log in link in mobile menu */}
                                <div className="py-6">
                                    {/* Render links if a user is signed in */}
                                    <SignedIn>
                                        <SignedOut>
                                            <SignInButton />
                                        </SignedOut>
                                        <SignedIn>
                                            <UserButton />
                                        </SignedIn>
                                    </SignedIn>

                                    {/* Render links if a user is signed out */}
                                    <SignedOut>
                                        <Link
                                            href="/sign-in"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            Sign in
                                        </Link>
                                    </SignedOut>

                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </div>
    );
};

export default Navbar;