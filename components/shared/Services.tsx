import { Lightbulb, FileQuestion, FileText, LucideIcon } from "lucide-react"
import { features } from "@/constants/features"

const icons: Record<string, LucideIcon> = {
    lightbulb: Lightbulb,
    "file-question": FileQuestion,
    "file-text": FileText,
}

const chipStyles = [
    "bg-[#2c2a3d] text-[#b9b3ff]",
    "bg-[#17281f] text-[#8fd9b6]",
    "bg-[#16213a] text-[#93c5fd]",
]

export default function Services() {
    return (
        <div id='service' className="bg-[#131412] border-t border-[#26271f] py-24 md:py-28 px-6 md:px-8">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-5">
                    <div className="md:sticky md:top-28">
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4f46e5]">Features</span>
                        <h2 className="mt-3 font-display font-[650] text-[clamp(30px,3.6vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#f4f2ec]">
                            We provide the info, you achieve the success.
                        </h2>
                    </div>
                </div>

                <div className="md:col-span-7">
                    <div className="rounded-2xl border border-[#26271f] bg-[#1b1c18] px-6 md:px-8">
                        {features.map((feature, index) => {
                            const Icon = icons[feature.icon] ?? Lightbulb
                            return (
                                <div
                                    key={feature.name}
                                    className="group flex items-start gap-5 border-b border-[#26271f] py-8 last:border-none"
                                >
                                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] transition-transform duration-300 group-hover:-translate-y-0.5 ${chipStyles[index % chipStyles.length]}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#f4f2ec] mb-1.5 tracking-[-0.01em]">{feature.name}</h3>
                                        <p className="text-[#9a9c8d] text-sm leading-relaxed max-w-md">{feature.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
