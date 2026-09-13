'use client'

import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import BrandMark from "./BrandMark"

const navLinks = [
    { href: '/resources/introduction', label: 'Resources' },
    { href: '/resources/examination/pastquestions', label: 'Past Questions' },
    { href: '/resources/programmingcourses/courses', label: 'Free Courses' },
    { href: '#faqs', label: 'FAQs' },
]

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    return (
        <header className="sticky top-0 z-50 border-b border-[#26271f] bg-[#131412]/90 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-8">
                <Link href='/' className="flex shrink-0 items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4f46e5]">
                        <BrandMark className="h-3.5 w-3.5 text-white" />
                    </span>
                    <span className="font-display text-[17px] font-bold tracking-[-0.02em] text-[#f4f2ec]">Appvarsity</span>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-[#b8baaf] transition-colors hover:text-[#f4f2ec]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-5 md:flex">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                        <Link href="/sign-in" className="text-sm font-medium text-[#b8baaf] transition-colors hover:text-[#f4f2ec]">
                            Log in
                        </Link>
                        <Link
                            href="/sign-up"
                            className="inline-flex items-center gap-1.5 rounded-none bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6366f1]"
                        >
                            Get Started <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                    </SignedOut>
                </div>

                <div className="flex items-center gap-3 md:hidden">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <button
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#26271f] text-[#f4f2ec] transition-colors hover:bg-[#1f2018]"
                    >
                        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="overflow-hidden border-t border-[#26271f] bg-[#131412] md:hidden"
                    >
                        <nav className="flex flex-col gap-1 px-6 py-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#b8baaf] transition-colors hover:bg-[#1f2018] hover:text-[#f4f2ec]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <SignedOut>
                                <div className="mt-3 flex flex-col gap-2 border-t border-[#26271f] pt-3">
                                    <Link
                                        href="/sign-up"
                                        onClick={() => setOpen(false)}
                                        className="flex items-center justify-center gap-1.5 rounded-none bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6366f1]"
                                    >
                                        Get Started <ArrowUpRight className="h-3.5 w-3.5" />
                                    </Link>
                                    <Link
                                        href="/sign-in"
                                        onClick={() => setOpen(false)}
                                        className="rounded-lg px-3 py-2.5 text-center text-sm font-medium text-[#b8baaf] transition-colors hover:bg-[#1f2018] hover:text-[#f4f2ec]"
                                    >
                                        Log in
                                    </Link>
                                </div>
                            </SignedOut>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Navbar
