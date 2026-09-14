'use client'

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import BrandMark from "./BrandMark"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#f8f7f4] dark:bg-[#131412]"
        >
            <div className="mx-auto flex h-16 sm:h-20 max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8">
                <Link href='/' className="flex shrink-0 items-center gap-2 sm:gap-3">
                    <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#4f46e5]">
                        <BrandMark className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                    </span>
                    <span className="font-semibold leading-none tracking-[-0.02em] text-[#292a26] text-[15px] sm:text-base dark:text-[#f4f2ec]">Appvarsity</span>
                </Link>
                <div className="flex shrink-0 items-center gap-2 sm:gap-4">
                    <ThemeToggle className="h-8 w-8 sm:h-9 sm:w-9" />
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                        <Link href="/sign-in" className="whitespace-nowrap text-[13px] sm:text-sm font-medium text-[#777970] transition-colors hover:text-[#292a26] dark:text-[#9a9c8d] dark:hover:text-[#f4f2ec]">
                            Log in
                        </Link>
                        <Link
                            href="/sign-up"
                            className="inline-flex shrink-0 items-center gap-1 sm:gap-1.5 whitespace-nowrap rounded-none bg-[#4f46e5] px-3 py-2 sm:px-4 sm:py-2.5 text-[13px] sm:text-sm text-white transition-colors hover:bg-[#6366f1]"
                        >
                            Get Started <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                    </SignedOut>
                </div>
            </div>
        </motion.header>
    )
}

export default Navbar
