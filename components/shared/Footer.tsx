import { Triangle } from "lucide-react"
import Link from "next/link"


const Footer = () => {
    return (
        <footer className="w-full bg-neutral-950 px-8 py-10 bottom-0">
            <section className="max-w-6xl mx-auto">
                <div className="mb-5 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <header className="font-mono flex items-center gap-2 text-white font-bold tracking-wide">
                        <Triangle className="text-gray-400 fill-indigo-700 w-4 h-4" /> Appvarsity
                    </header>
                    <ul className="flex flex-col md:flex-row items-start md:items-center mt-4 md:mt-0 gap-4 md:gap-7 text-gray-100 text-base md:text-sm font-mono tracking-tight">
                        <Link href="/resources/introduction"><li className="hover:underline">Resources</li></Link>
                        <Link href="/resources/examination/pastquestions"><li className="hover:underline">Past Questions</li></Link>
                        <Link href='/sign-up'><li className="hover:underline">Signup</li></Link>
                    </ul>
                </div>
                <hr className="border  border-neutral-800 mb-7" />
                <p className="text-left md:text-center text-gray-100 font-mono text-base md:text-sm">@2025 Appvarsity</p>
            </section>
        </footer>
    )
}

export default Footer