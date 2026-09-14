import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import BrandMark from "./BrandMark"

const Navbar = () => {
    return (
        <header className="bg-[#131412]">
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-8">
                <Link href='/' className="flex shrink-0 items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4f46e5]">
                        <BrandMark className="h-3.5 w-3.5 text-white" />
                    </span>
                    <span className="font-display text-[17px] font-bold tracking-[-0.02em] text-[#f4f2ec]">Appvarsity</span>
                </Link>

                <div className="flex items-center gap-5">
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
            </div>
        </header>
    )
}

export default Navbar
