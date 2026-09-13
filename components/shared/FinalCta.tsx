import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FinalCta() {
    return (
        <div className="relative bg-[#eaece2] border-t border-[#e2e1da] px-6 md:px-8 py-24 md:py-28 overflow-hidden">
            <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center">
                <span className="text-[#4f46e5] text-[28px] leading-none" aria-hidden="true">✳</span>
                <h2 className="mt-4 font-display font-[650] text-[clamp(32px,4.6vw,52px)] tracking-[-0.025em] text-[#292a26] leading-[1.1]">
                    Your aptech journey deserves better than <span className="text-[#4f46e5]">scattered PDFs</span>.
                </h2>
                <p className="mt-5 text-[#65675f] text-[15px]">
                    Everything you need, kept in one place, free to start, right now.
                </p>
                <Link href="/resources/introduction">
                    <button className="mt-8 bg-[#292a26] hover:bg-[#42433d] transition-[background,transform,box-shadow] hover:-translate-y-0.5 px-6 py-3.5 rounded-[7px] text-sm font-semibold inline-flex items-center gap-2 text-white">
                        Get Started <ArrowRight className="w-4 h-4" />
                    </button>
                </Link>
            </div>
        </div>
    )
}
