'use client'

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { feedbackData } from "@/constants/feedback"

const chipStyles = [
    "bg-gradient-to-br from-[#e4e1ff] to-[#cfc9ff] text-[#4c3fc9] dark:from-[#2c2a3d] dark:to-[#211f2e] dark:text-[#b9b3ff]",
    "bg-gradient-to-br from-[#d3f3e2] to-[#b8ecd0] text-[#12704c] dark:from-[#17281f] dark:to-[#132019] dark:text-[#8fd9b6]",
    "bg-gradient-to-br from-[#dcecfe] to-[#c2ddfd] text-[#1a49c4] dark:from-[#16213a] dark:to-[#111a2c] dark:text-[#93c5fd]",
    "bg-gradient-to-br from-[#fdeecb] to-[#fbe1a3] text-[#7a5c0e] dark:from-[#302711] dark:to-[#241d0c] dark:text-[#f0c86a]",
]

function Testimonials() {
    return (
        <div className="w-full py-24 md:py-28 bg-[#f8f7f4] border-t border-[#e2e1da] dark:bg-[#131412] dark:border-[#26271f]">
            <div className="mx-auto max-w-6xl px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4f46e5]">Testimonials</span>
                    <h2 className="mt-3 font-display font-medium text-[clamp(24px,2.8vw,34px)] leading-[1.15] tracking-[-0.02em] text-[#292a26] dark:text-[#f4f2ec]">
                        What students say
                    </h2>
                    <p className="mt-3 text-[#777970] text-[15px] dark:text-[#9a9c8d]">Feedback from students using this platform.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    data-ui="testimonial-marquee"
                    className="group relative mt-12 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
                >
                    <div className="flex w-max gap-6 [animation:landing-marquee_36s_linear_infinite] group-hover:[animation-play-state:paused]">
                        {[0, 1].map((copy) => (
                            <div key={copy} className="flex gap-6 pr-6">
                                {feedbackData.map((item, index) => (
                                    <div
                                        key={`${copy}-${item.name}`}
                                        className="relative flex w-[290px] shrink-0 flex-col rounded-[28px] border border-[#efeee9] bg-white p-7 shadow-[0_1px_2px_rgba(41,42,38,0.04),0_16px_36px_-16px_rgba(41,42,38,0.14)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_1px_2px_rgba(41,42,38,0.05),0_28px_56px_-18px_rgba(79,70,229,0.22)] sm:w-[310px] dark:border-[#26271f] dark:bg-[#1b1c18] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_16px_36px_-16px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_28px_56px_-18px_rgba(79,70,229,0.35)]"
                                    >
                                        <div className="flex gap-0.5">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star key={i} className="h-3.5 w-3.5 fill-[#f5b942] text-[#f5b942]" strokeWidth={0} />
                                            ))}
                                        </div>
                                        <p className="mt-4 text-[#292a26] text-[15px] font-medium leading-relaxed tracking-[-0.005em] dark:text-[#f4f2ec]">
                                            {item.feedback}
                                        </p>
                                        <div className="mt-7 flex items-center gap-3">
                                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold ring-4 ring-[#f8f7f4] dark:ring-[#1b1c18] ${chipStyles[index % chipStyles.length]}`}>
                                                {item.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-[#292a26] tracking-[-0.005em] dark:text-[#f4f2ec]">{item.name}</p>
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
