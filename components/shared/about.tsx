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
        <div id="features" className='bg-[#131412] border-t border-[#26271f] py-24 md:py-28 px-6 md:px-8'>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-center max-w-6xl mx-auto">
                <div className="md:col-span-6">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4f46e5]">Exam prep</span>
                    <h2 className='mt-3 font-display font-[650] text-[clamp(32px,4.4vw,52px)] leading-[1.05] tracking-[-0.025em] text-[#f4f2ec]'>
                        Get access to past questions.
                    </h2>
                    <p className='mt-5 text-[#9a9c8d] leading-[1.7] text-[15px] max-w-md'>
                        Real questions from previous students, plus project reports and case studies, so you walk into exams already prepared.
                    </p>

                    <div className='mt-8'>
                        <Link href='/resources/examination/pastquestions'>
                            <button className='group inline-flex items-center gap-2 bg-[#4f46e5] hover:bg-[#6366f1] transition-[background,transform,box-shadow] hover:-translate-y-0.5 text-white px-5 py-3 rounded-[9px] text-sm font-semibold shadow-[0_2px_0_#3730a31c]'>
                                Review Past Questions
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="md:col-span-6">
                    <div className="rounded-[18px] border border-[#26271f] bg-[#1b1c18] overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#26271f] bg-[#1f2018]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#e9c767]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#8bbd91]" />
                            <span className="ml-3 text-xs font-mono text-[#8c8e84]">Sample past question</span>
                        </div>
                        <div className="p-6 md:p-7">
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#8c8e84]">Java 2 · Semester 1</span>
                                <span className="font-mono text-[10px] text-[#8c8e84]">Q1</span>
                            </div>
                            <p className="text-[#f4f2ec] font-medium mb-5 tracking-[-0.01em] leading-relaxed">Which HTTP method is idempotent and safe to retry?</p>
                            <div className="flex flex-col gap-2 text-sm">
                                {options.map((option) => (
                                    <div
                                        key={option.letter}
                                        className={`flex items-center gap-3 rounded-[10px] border px-3.5 py-3 transition-colors ${option.correct
                                            ? "border-[#4f46e5]/40 bg-[#4f46e5]/10"
                                            : "border-[#26271f]"
                                            }`}
                                    >
                                        <span
                                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${option.correct
                                                ? "bg-[#4f46e5] text-white"
                                                : "bg-[#232419] text-[#8c8e84]"
                                                }`}
                                        >
                                            {option.correct ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : option.letter}
                                        </span>
                                        <span className={option.correct ? "text-[#f4f2ec] font-medium" : "text-[#9a9c8d]"}>{option.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
