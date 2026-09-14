'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, FileQuestion } from "lucide-react"

const avatarSeeds = [
    "Aptech-Amara", "Aptech-Zainab", "Aptech-Ife", "Aptech-Musa", "Aptech-Tobi",
    "Aptech-Chidi", "Aptech-Kemi", "Aptech-Bola", "Aptech-Femi", "Aptech-Yemi",
    "Aptech-Ada", "Aptech-Emeka", "Aptech-Ngozi", "Aptech-Sade", "Aptech-Dele",
    "Aptech-Nkem", "Aptech-Tunde", "Aptech-Amina", "Aptech-Segun", "Aptech-Bisi",
]

const tileColors = [
    "bg-[#dcd8ff]",
    "bg-[#cceedd]",
    "bg-[#dbeafe]",
    "bg-[#ffe9af]",
]

function About() {
    return (
        <div id="features" className='bg-[#f8f7f4] border-t border-[#e2e1da] py-24 md:py-28 px-6 md:px-8'>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-center max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-6"
                >
                    <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#dbeafe] text-[#1d4ed8]">
                        <FileQuestion className="h-5 w-5" />
                    </div>
                    <span className="mt-5 block font-mono text-xs uppercase tracking-[0.2em] text-[#4f46e5]">Exam prep</span>
                    <h2 className='mt-3 font-display font-medium text-[clamp(26px,3.2vw,36px)] leading-[1.15] tracking-[-0.02em] text-[#292a26]'>
                        Join students and get access to past questions.
                    </h2>
                    <p className='mt-5 text-[#777970] leading-[1.7] text-[15px] max-w-md'>
                        Real questions from previous students, plus project reports and case studies, so you walk into exams already prepared.
                    </p>
                    <p className='mt-4 text-[#777970] leading-[1.7] text-[15px] max-w-md'>
                        Join the students already using Appvarsity to prep smarter and stay ahead of every exam.
                    </p>

                    <div className='mt-8'>
                        <Link href='/resources/examination/pastquestions'>
                            <button className='group inline-flex items-center gap-2 bg-[#4f46e5] hover:bg-[#6366f1] transition-[background,transform,box-shadow] hover:-translate-y-0.5 text-white px-6 py-3.5 text-sm font-medium shadow-[0_2px_0_#3730a31c]'>
                                Access Questions
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="md:col-span-6"
                >
                    <div
                        className="relative mx-auto h-[420px] w-full max-w-[320px] overflow-hidden rounded-[24px] p-4"
                    >
                        <div className="grid grid-cols-4 gap-2">
                            {avatarSeeds.map((seed, i) => (
                                <motion.div
                                    key={seed}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.35, delay: 0.15 + i * 0.02 }}
                                    className={`aspect-square overflow-hidden rounded-xl ${tileColors[i % tileColors.length]}`}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}&backgroundColor=transparent`}
                                        alt=""
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
