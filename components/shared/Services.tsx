import Link from "next/link"
import { Lightbulb, FileQuestion, FileText, LucideIcon, ArrowRight } from "lucide-react"
import { features } from "@/constants/features"

const icons: Record<string, LucideIcon> = {
    lightbulb: Lightbulb,
    "file-question": FileQuestion,
    "file-text": FileText,
}

const cardStyles = [
    { chip: "bg-[#dcd8ff] text-[#5144c8]", band: "bg-[#dcd8ff]", blob: "bg-[#6658e8]" },
    { chip: "bg-[#cceedd] text-[#1f7a56]", band: "bg-[#cceedd]", blob: "bg-[#22c55e]" },
    { chip: "bg-[#dbeafe] text-[#1d4ed8]", band: "bg-[#dbeafe]", blob: "bg-[#3b82f6]" },
]

export default function Services() {
    return (
        <div id='service' className="bg-[#f8f7f4] border-t border-[#e2e1da] py-24 md:py-28 px-6 md:px-8">
            <div className="mx-auto max-w-6xl">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4f46e5]">Features</span>
                <h2 className="mt-3 font-display font-medium text-xl md:text-2xl leading-[1.3] tracking-[-0.01em] text-[#292a26] max-w-lg">
                    We provide the info, you achieve the success.
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = icons[feature.icon] ?? Lightbulb
                        const style = cardStyles[index % cardStyles.length]
                        return (
                            <div
                                key={feature.name}
                                className="group flex flex-col overflow-hidden rounded-2xl border-[3px] border-[#eaebe1] bg-white transition-colors hover:border-[#54554a]"
                            >
                                <div className="flex flex-1 flex-col p-6">
                                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] ${style.chip}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-5 font-display text-lg font-semibold text-[#292a26] tracking-[-0.01em]">{feature.name}</h3>
                                    <p className="mt-2 text-[#777970] text-sm leading-relaxed">{feature.description}</p>
                                    <Link
                                        href={feature.href}
                                        className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#292a26] transition-colors hover:text-[#4f46e5]"
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
