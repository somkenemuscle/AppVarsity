import Link from "next/link"
import { Lightbulb, FileQuestion, FileText, LucideIcon, ArrowRight } from "lucide-react"
import { features } from "@/constants/features"

const icons: Record<string, LucideIcon> = {
    lightbulb: Lightbulb,
    "file-question": FileQuestion,
    "file-text": FileText,
}

const cardStyles = [
    { chip: "bg-[#2c2a3d] text-[#b9b3ff]", tint: "from-[#2c2a3d]/80 via-[#2c2a3d]/10" },
    { chip: "bg-[#17281f] text-[#8fd9b6]", tint: "from-[#17281f]/80 via-[#17281f]/10" },
    { chip: "bg-[#16213a] text-[#93c5fd]", tint: "from-[#16213a]/80 via-[#16213a]/10" },
]

export default function Services() {
    return (
        <div id='service' className="bg-[#131412] border-t border-[#26271f] py-24 md:py-28 px-6 md:px-8">
            <div className="mx-auto max-w-6xl">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4f46e5]">Features</span>
                <h2 className="mt-3 font-display font-[650] text-[clamp(30px,3.6vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#f4f2ec] max-w-lg">
                    We provide the info, you achieve the success.
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = icons[feature.icon] ?? Lightbulb
                        const style = cardStyles[index % cardStyles.length]
                        return (
                            <div
                                key={feature.name}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-[#26271f] bg-[#1b1c18] transition-colors hover:border-[#3a3b32]"
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

                                <div className="relative h-40 overflow-hidden" aria-hidden="true">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={`https://loremflickr.com/480/360/${feature.imageQuery}`}
                                        alt=""
                                        className="h-full w-full object-cover grayscale-[15%]"
                                        loading="lazy"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${style.tint} to-transparent`} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
