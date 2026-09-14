'use client'

import { motion } from "framer-motion"
import { feedbackData } from "@/constants/feedback"

const chipStyles = [
    "bg-[#dcd8ff] text-[#5144c8]",
    "bg-[#cceedd] text-[#1f7a56]",
    "bg-[#dbeafe] text-[#1d4ed8]",
    "bg-[#ffe9af] text-[#8a6a12]",
]

function Testimonials() {
    return (
        <div className="w-full py-24 md:py-28 bg-[#f8f7f4] border-t border-[#e2e1da]">
            <div className="mx-auto max-w-6xl px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4f46e5]">Testimonials</span>
                    <h2 className="mt-3 font-display font-medium text-[clamp(24px,2.8vw,34px)] leading-[1.15] tracking-[-0.02em] text-[#292a26]">
                        What students say
                    </h2>
                    <p className="mt-3 text-[#777970] text-[15px]">Feedback from students using this platform.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    data-ui="testimonial-marquee"
                    className="group relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
                >
                    <div className="flex w-max gap-5 [animation:landing-marquee_36s_linear_infinite] group-hover:[animation-play-state:paused]">
                        {[0, 1].map((copy) => (
                            <div key={copy} className="flex gap-5 pr-5">
                                {feedbackData.map((item, index) => (
                                    <div
                                        key={`${copy}-${item.name}`}
                                        className="relative flex w-[280px] shrink-0 flex-col rounded-2xl border border-[#e2e1da] bg-white p-6 transition-colors hover:border-[#3a3b32] sm:w-[300px]"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="font-display text-[64px] leading-none text-[#4f46e5]/10"
                                        >
                                            &ldquo;
                                        </span>
                                        <p className="-mt-5 text-[#3a3b32] text-[15px] leading-relaxed">{item.feedback}</p>
                                        <div className="mt-6 flex items-center gap-3 border-t border-[#efeee9] pt-5">
                                            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-semibold text-xs ${chipStyles[index % chipStyles.length]}`}>
                                                {item.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-[#292a26]">{item.name}</p>
                                                <p className="text-xs text-[#8c8e84]">{item.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Testimonials
