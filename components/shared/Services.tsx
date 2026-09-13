import { Lightbulb, FileQuestion, FileText, LucideIcon, Check } from "lucide-react"
import { features } from "@/constants/features"

const icons: Record<string, LucideIcon> = {
    lightbulb: Lightbulb,
    "file-question": FileQuestion,
    "file-text": FileText,
}

const chipStyles = [
    "bg-[#dcd8ff] text-[#5144c8]",
    "bg-[#cceedd] text-[#1f7a56]",
    "bg-[#dbeafe] text-[#1d4ed8]",
]

const guarantees = [
    "Free to start, no card required",
    "Refreshed every semester",
    "Built by students, for students",
]

export default function Services() {
    return (
        <div id='service' className="bg-[#f8f7f4] border-t border-[#e2e1da] py-24 md:py-28 px-6 md:px-8">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-5">
                    <div className="md:sticky md:top-28">
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4f46e5]">Features</span>
                        <h2 className="mt-3 font-display font-[650] text-[clamp(30px,3.6vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#292a26]">
                            We provide the info, you achieve the success.
                        </h2>

                        <div className="mt-8 flex flex-col gap-1 rounded-2xl border border-[#e2e1da] bg-white p-2">
                            {guarantees.map((item) => (
                                <div key={item} className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm text-[#3a3b32] transition-colors hover:bg-[#f8f7f4]">
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4f46e5]/10">
                                        <Check className="h-3 w-3 text-[#4f46e5]" strokeWidth={3} />
                                    </span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="md:col-span-7">
                    <div className="rounded-2xl border border-[#e2e1da] bg-white px-6 md:px-8">
                        {features.map((feature, index) => {
                            const Icon = icons[feature.icon] ?? Lightbulb
                            return (
                                <div
                                    key={feature.name}
                                    className="group flex items-start gap-5 border-b border-[#e2e1da] py-8 last:border-none"
                                >
                                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] transition-transform duration-300 group-hover:-translate-y-0.5 ${chipStyles[index % chipStyles.length]}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#292a26] mb-1.5 tracking-[-0.01em]">{feature.name}</h3>
                                        <p className="text-[#777970] text-sm leading-relaxed max-w-md">{feature.description}</p>
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
