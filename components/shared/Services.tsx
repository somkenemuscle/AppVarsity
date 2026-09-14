'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { Lightbulb, FileQuestion, FileText, LucideIcon, ArrowRight } from "lucide-react"
import { features } from "@/constants/features"

const icons: Record<string, LucideIcon> = {
    lightbulb: Lightbulb,
    "file-question": FileQuestion,
    "file-text": FileText,
}

const cardStyles = [
    "bg-gradient-to-br from-[#e4e1ff] to-[#cfc9ff] text-[#4c3fc9] dark:from-[#2c2a3d] dark:to-[#211f2e] dark:text-[#b9b3ff]",
    "bg-gradient-to-br from-[#d3f3e2] to-[#b8ecd0] text-[#12704c] dark:from-[#17281f] dark:to-[#132019] dark:text-[#8fd9b6]",
    "bg-gradient-to-br from-[#dcecfe] to-[#c2ddfd] text-[#1a49c4] dark:from-[#16213a] dark:to-[#111a2c] dark:text-[#93c5fd]",
]

export default function Services() {
    return (
        <div id='service' className="bg-[#f8f7f4] border-t border-[#e2e1da] py-24 md:py-28 px-6 md:px-8 dark:bg-[#131412] dark:border-[#26271f]">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4f46e5]">Features</span>
                    <h2 className="mt-3 font-display font-light text-xl md:text-2xl leading-[1.3] tracking-[-0.01em] text-[#292a26] max-w-lg dark:text-[#f4f2ec]">
                        We provide the info, you achieve the success.
                    </h2>
                </motion.div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = icons[feature.icon] ?? Lightbulb
                        const chip = cardStyles[index % cardStyles.length]
                        return (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative flex flex-col rounded-[28px] border border-[#efeee9] bg-white p-7 shadow-[0_1px_2px_rgba(41,42,38,0.04),0_16px_36px_-16px_rgba(41,42,38,0.14)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_1px_2px_rgba(41,42,38,0.05),0_28px_56px_-18px_rgba(79,70,229,0.22)] dark:border-[#26271f] dark:bg-[#1b1c18] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_16px_36px_-16px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_28px_56px_-18px_rgba(79,70,229,0.35)]"
                            >
                                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${chip}`}>
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="mt-6 font-display text-lg font-semibold text-[#292a26] tracking-[-0.01em] dark:text-[#f4f2ec]">{feature.name}</h3>
                                <p className="mt-2.5 text-[#777970] text-sm leading-relaxed dark:text-[#9a9c8d]">{feature.description}</p>
                                <Link
                                    href={feature.href}
                                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4f46e5] transition-colors hover:text-[#3730a3]"
                                >
                                    See more
                                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
