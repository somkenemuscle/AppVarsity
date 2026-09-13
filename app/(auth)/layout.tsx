import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import BrandMark from "@/components/shared/BrandMark"

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#131412]">
            <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden bg-indigo-600">
                <Link href='/' className="relative flex items-center gap-2 text-sm font-bold text-white z-10">
                    <BrandMark className="text-white/80 w-4 h-4" /> Appvarsity
                </Link>

                <div className="relative z-10">
                    <h2 className="font-display font-bold text-4xl xl:text-5xl text-white tracking-tight leading-[1.1]">
                        Right where your <span className="text-indigo-200">Aptech</span> journey belongs.
                    </h2>
                    <p className="mt-4 text-indigo-100 font-light max-w-sm leading-relaxed">
                        Project guides, past questions, and free courses, for your people, your projects, and your studies.
                    </p>
                </div>

                <div className="relative z-10 flex flex-col gap-3 max-w-sm">
                    <div className="self-start bg-white rounded-2xl rounded-bl-sm px-5 py-3 shadow-lg -rotate-2">
                        <p className="text-xs text-gray-400 mb-0.5">Group rep · just now</p>
                        <p className="text-sm text-gray-900 font-medium">Don't forget the project guide before submission 👀</p>
                    </div>
                    <div className="self-end bg-neutral-900 rounded-2xl rounded-br-sm px-5 py-3 shadow-lg rotate-1">
                        <p className="text-xs text-gray-400 mb-0.5">You · just now</p>
                        <p className="text-sm text-white font-medium">Already on Appvarsity, we're good ✅</p>
                    </div>
                </div>

                <div className="absolute inset-0 bg-grid opacity-40" />
            </div>

            <main className="relative flex items-center justify-center p-6 py-20 bg-[#131412]">
                <Link href='/' className="absolute top-6 left-6 flex items-center gap-1.5 text-sm text-[#9a9c8d] hover:text-[#f4f2ec] transition-colors">
                    <ChevronLeft className="w-4 h-4" /> Back to home
                </Link>
                <div className="w-full max-w-sm">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout
