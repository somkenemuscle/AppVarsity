'use client'

import { useEffect, useState } from "react"
import { ArrowUpRight, ArrowRight, X } from "lucide-react"
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

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-[#e2e1da] bg-[#f8f7f4]/85 backdrop-blur-md">
                <div className="mx-auto grid h-20 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6 md:px-8">
                    <button
                        onClick={() => setOpen(true)}
                        aria-label="Open menu"
                        aria-expanded={isOpen}
                        className="group flex items-center gap-2.5 justify-self-start"
                    >
                        <span className="relative flex h-8 w-9 flex-col items-start justify-center gap-[5px]">
                            <span className="h-[2px] w-9 rounded-full bg-[#292a26] transition-all duration-300 group-hover:w-6" />
                            <span className="h-[2px] w-6 rounded-full bg-[#292a26] transition-all duration-300 group-hover:w-9" />
                        </span>
                        <span className="hidden text-sm font-semibold text-[#292a26] sm:inline">Menu</span>
                    </button>

                    <Link href='/' className="group flex items-center gap-2 justify-self-center">
                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#4f46e5] transition-transform duration-300 group-hover:-rotate-6">
                            <BrandMark className="h-3.5 w-3.5 text-white" />
                        </span>
                        <span className="font-display text-[16px] font-bold tracking-[-0.02em] text-[#292a26]">Appvarsity</span>
                    </Link>

                    <div className="flex items-center gap-4 justify-self-end">
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                        <SignedOut>
                            <Link
                                href="/sign-up"
                                className="group inline-flex items-center gap-1.5 rounded-full bg-[#292a26] py-2.5 pl-4 pr-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3d3e37]"
                            >
                                <span className="hidden sm:inline">Get Started</span>
                                <span className="sm:hidden">Start</span>
                                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </SignedOut>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: 'circle(2% at 2.5rem 2.25rem)' }}
                        animate={{ clipPath: 'circle(150% at 2.5rem 2.25rem)' }}
                        exit={{ clipPath: 'circle(2% at 2.5rem 2.25rem)' }}
                        transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                        className="fixed inset-0 z-[60] bg-[#f8f7f4]"
                    >
                        <div className="mx-auto flex h-full max-w-6xl flex-col px-6 md:px-8">
                            <div className="flex h-20 items-center justify-between">
                                <Link href='/' onClick={() => setOpen(false)} className="flex items-center gap-2">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#4f46e5]">
                                        <BrandMark className="h-3.5 w-3.5 text-white" />
                                    </span>
                                    <span className="font-display text-[16px] font-bold tracking-[-0.02em] text-[#292a26]">Appvarsity</span>
                                </Link>
                                <button
                                    onClick={() => setOpen(false)}
                                    aria-label="Close menu"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e2e1da] text-[#292a26] transition-colors hover:bg-[#efeee9]"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>

                            <nav className="flex flex-1 flex-col justify-center gap-1 pb-16">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15 + i * 0.06, duration: 0.45, ease: "easeOut" }}
                                        className="overflow-hidden border-b border-[#e2e1da] py-4 first:pt-0"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className="group flex items-center justify-between font-display text-[clamp(32px,6vw,56px)] font-[650] tracking-[-0.02em] text-[#292a26] transition-colors hover:text-[#4f46e5]"
                                        >
                                            {link.label}
                                            <ArrowRight className="h-6 w-6 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.45, duration: 0.4 }}
                                className="flex flex-col gap-4 border-t border-[#e2e1da] py-6 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <SignedOut>
                                    <Link
                                        href="/sign-up"
                                        onClick={() => setOpen(false)}
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#292a26] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3d3e37]"
                                    >
                                        Get Started <ArrowUpRight className="h-3.5 w-3.5" />
                                    </Link>
                                </SignedOut>
                                <SignedIn>
                                    <p className="text-sm text-[#5c5e54]">You're signed in.</p>
                                </SignedIn>
                                <p className="font-mono text-xs text-[#8c8e84]">© {new Date().getFullYear()} Appvarsity</p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
