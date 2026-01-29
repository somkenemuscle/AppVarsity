'use client'

import { Triangle } from "lucide-react"
import Link from "next/link"

const Navbar = () => {
    const email = localStorage.getItem('email')
    console.log(email)
    const isLoggedIn = email !== null ? true : false


    return (
        <nav className="w-full flex justify-center fixed top-6 cursor-pointer px-8">
            <div className="px-10 py-5 bg-neutral-900 w-full max-w-6xl flex justify-between items-center border-2 border-neutral-800 rounded-xl text-white navbar">
                <Link href='/'>
                    <header className="font-mono text-sm flex items-center gap-2">
                        <Triangle className="text-gray-400 fill-indigo-700 w-4 h-4" /> Appvarsity
                    </header>
                </Link>


                <ul className="flex gap-7 items-center text-sm tracking-wide text-gray-300">
                    <Link href='/resources/examination/pastquestions'><li className="hover:text-indigo-400 hidden md:block">Past Questions</li></Link>
                    <Link href='mailto:appvarsitytech@gmail.com'><li className="hover:text-indigo-400 hidden md:block">Contact Us</li></Link>
                    <Link href='#faqs'> <li className="hover:text-indigo-400 hidden md:block">FAQs</li></Link>
                    <li>
                        {/* Render links if a user is signed in */}

                        {/* Render links if a user is signed out */}
                        {isLoggedIn ? (
                            <div className="bg-indigo-400 w-9 h-9 rounded-full flex items-center justify-center text-white">
                            </div>
                        ) : (
                            <Link
                                href="/sign-in"
                                className='px-5 py-2 bg-indigo-700 hover:bg-indigo-500 rounded-lg text-white'>
                                Login
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar