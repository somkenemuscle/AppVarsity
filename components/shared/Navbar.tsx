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
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-8">
                <Link href='/' className="flex shrink-0 items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#4f46e5]">
                        <BrandMark className="h-4 w-4 text-white" />
                    </span>
                    <span className="font-semibold leading-none tracking-[-0.02em] text-[#292a26] dark:text-[#f4f2ec]">Appvarsity</span>
                </Link>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                        <Link href="/sign-in" className="text-sm font-medium text-[#777970] transition-colors hover:text-[#292a26] dark:text-[#9a9c8d] dark:hover:text-[#f4f2ec]">
                            Log in
                        </Link>
                        <Link
                            href="/sign-up"
                            className="inline-flex items-center gap-1.5 rounded-none bg-[#4f46e5] px-4 py-2.5 text-sm  text-white transition-colors hover:bg-[#6366f1]"
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
