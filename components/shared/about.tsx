import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"

const options = [
    { letter: "A", text: "POST", correct: false },
    { letter: "B", text: "PATCH", correct: false },
    { letter: "C", text: "GET", correct: true },
    { letter: "D", text: "DELETE", correct: false },
]

function About() {
    return (
        <div id="features" className='bg-[#f8f7f4] border-t border-[#e2e1da] py-24 md:py-28 px-6 md:px-8'>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-center max-w-6xl mx-auto">
                <div className="md:col-span-6">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4f46e5]">Exam prep</span>
                    <h2 className='mt-3 font-display font-medium text-[clamp(26px,3.2vw,36px)] leading-[1.15] tracking-[-0.02em] text-[#292a26]'>
                        Get access to past questions.
                    </h2>
                    <p className='mt-5 text-[#777970] leading-[1.7] text-[15px] max-w-md'>
                        Real questions from previous students, plus project reports and case studies, so you walk into exams already prepared.
                    </p>

                    <div className='mt-8'>
                        <Link href='/resources/examination/pastquestions'>
                            <button className='group inline-flex items-center gap-2 bg-[#4f46e5] hover:bg-[#6366f1] transition-[background,transform,box-shadow] hover:-translate-y-0.5 text-white px-5 py-3 text-sm font-medium rounded-[9px] shadow-[0_2px_0_#3730a31c]'>
                                Review Past Questions
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="md:col-span-6">
                    <div className="rounded-[18px] border border-[#e2e1da] bg-white overflow-hidden shadow-[0_24px_70px_rgba(41,42,38,0.1)]">
                        <div className="flex items-center justify-between px-5 py-4">
                            <span className="inline-flex items-center rounded-full bg-[#4f46e5]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#4f46e5]">
                                Java 2 · Semester 1
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#8c8e84]">Question 1</span>
                        </div>

                        <div className="px-5">
                            <div className="flex gap-1.5">
                                <span className="h-1 flex-1 rounded-full bg-[#4f46e5]" />
                                <span className="h-1 flex-1 rounded-full bg-[#e2e1da]" />
                                <span className="h-1 flex-1 rounded-full bg-[#e2e1da]" />
                                <span className="h-1 flex-1 rounded-full bg-[#e2e1da]" />
                            </div>
                        </div>

                        <div className="p-6 md:p-7 pt-5">
                            <p className="text-[#292a26] font-semibold mb-6 tracking-[-0.01em] leading-relaxed">Which HTTP method is idempotent and safe to retry?</p>
                            <div className="grid grid-cols-2 gap-2.5 text-sm">
                                {options.map((option) => (
                                    <div
                                        key={option.letter}
                                        className={`flex items-center gap-2.5 rounded-[10px] border px-3.5 py-3 transition-colors ${option.correct
                                            ? "border-[#4f46e5]/40 bg-[#4f46e5]/10"
                                            : "border-[#e2e1da]"
                                            }`}
                                    >
                                        <span
                                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${option.correct
                                                ? "bg-[#4f46e5] text-white"
                                                : "bg-[#efeee9] text-[#8c8e84]"
                                                }`}
                                        >
                                            {option.correct ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : option.letter}
                                        </span>
                                        <span className={option.correct ? "text-[#292a26] font-medium" : "text-[#777970]"}>{option.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-t border-[#e2e1da] px-6 py-4">
                            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#8c8e84]">Practice mode</span>
                            <span className="inline-flex items-center gap-1.5 rounded-[7px] border border-[#e2e1da] px-3 py-1.5 text-xs font-semibold text-[#c9c8be]">
                                Next <ArrowUpRight className="h-3 w-3 rotate-45" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
