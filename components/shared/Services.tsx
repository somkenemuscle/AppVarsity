import Link from "next/link"
import { Lightbulb, FileQuestion, FileText, LucideIcon, ArrowRight } from "lucide-react"
import { features } from "@/constants/features"

const icons: Record<string, LucideIcon> = {
    lightbulb: Lightbulb,
    "file-question": FileQuestion,
    "file-text": FileText,
}

const cardStyles = [
    { chip: "bg-[#2c2a3d] text-[#b9b3ff]", band: "bg-[#211f2e]", blob: "bg-[#6658e8]" },
    { chip: "bg-[#17281f] text-[#8fd9b6]", band: "bg-[#132019]", blob: "bg-[#22c55e]" },
    { chip: "bg-[#16213a] text-[#93c5fd]", band: "bg-[#111a2c]", blob: "bg-[#3b82f6]" },
]

export default function Services() {
    return (
        <div id='service' className="bg-[#131412] border-t border-[#26271f] py-24 md:py-28 px-6 md:px-8">
            <div className="mx-auto max-w-6xl">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4f46e5]">Features</span>
                <h2 className="mt-3 font-display font-medium text-[clamp(24px,2.8vw,34px)] leading-[1.15] tracking-[-0.02em] text-[#f4f2ec] max-w-lg">
                    We provide the info, you achieve the success.
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = icons[feature.icon] ?? Lightbulb
                        const style = cardStyles[index % cardStyles.length]
                        return (
                            <div
                                key={feature.name}
                                className="group flex flex-col overflow-hidden rounded-2xl border-[3px] border-[#3a3b32] bg-[#1b1c18] transition-colors hover:border-[#54554a]"
                            >
                                <div className="flex flex-1 flex-col p-6">
                                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] ${style.chip}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-5 font-display text-lg font-bold text-[#f4f2ec] tracking-[-0.01em]">{feature.name}</h3>
                                    <p className="mt-2 text-[#9a9c8d] text-sm leading-relaxed">{feature.description}</p>
                                    <Link
                                        href={feature.href}
                                        className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#f4f2ec] transition-colors hover:text-[#4f46e5]"
                                    >
                                        See more
                                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                                    </Link>
                                </div>

                                <div className={`relative h-32 overflow-hidden ${style.band}`} aria-hidden="true">
                                    <span className={`absolute -left-6 -top-6 h-28 w-28 rounded-full opacity-30 blur-2xl ${style.blob}`} />
                                    <span className={`absolute -bottom-8 -right-8 h-24 w-24 rounded-full opacity-20 blur-xl ${style.blob}`} />
                                    <Icon className="absolute -bottom-3 -right-3 h-20 w-20 text-white/[0.06]" strokeWidth={1.25} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
