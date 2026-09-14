'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, BookOpen, FileQuestion, GraduationCap, Building2 } from "lucide-react";
import { projectLinks } from "@/constants/sidebarLinks";

const avatarBadges = [
  { seed: "Aptech-Amara", bg: "bg-[#dcd8ff] dark:bg-[#2c2a3d]", className: "top-10 left-[6%] md:left-[10%] -rotate-12" },
  { seed: "Aptech-Zainab", bg: "bg-[#cceedd] dark:bg-[#17281f]", className: "top-16 right-[4%] md:right-[9%] rotate-10" },
  { seed: "Aptech-Ife", bg: "bg-[#ffe9af] dark:bg-[#302711]", className: "bottom-16 left-[13%]" },
  { seed: "Aptech-Musa", bg: "bg-[#dbeafe] dark:bg-[#16213a]", className: "bottom-8 right-[10%] md:right-[16%] -rotate-6" },
];

const HeroSection = () => {
  const resourceItems = [
    { icon: BookOpen, label: "Project Guide", status: `${projectLinks.length} sections`, chip: "bg-gradient-to-br from-[#e4e1ff] to-[#cfc9ff] text-[#4c3fc9] dark:from-[#2c2a3d] dark:to-[#211f2e] dark:text-[#b9b3ff]" },
    { icon: FileQuestion, label: "Past Questions", status: "Available now", chip: "bg-gradient-to-br from-[#d3f3e2] to-[#b8ecd0] text-[#12704c] dark:from-[#17281f] dark:to-[#132019] dark:text-[#8fd9b6]" },
    { icon: GraduationCap, label: "Free Courses", status: "Open enrollment", chip: "bg-gradient-to-br from-[#dcecfe] to-[#c2ddfd] text-[#1a49c4] dark:from-[#16213a] dark:to-[#111a2c] dark:text-[#93c5fd]" },
    { icon: Building2, label: "Campus Info", status: "Coming soon", chip: "bg-gradient-to-br from-[#fdeecb] to-[#fbe1a3] text-[#7a5c0e] dark:from-[#302711] dark:to-[#241d0c] dark:text-[#f0c86a]" },
  ];

  return (
    <section className="relative pt-6 pb-20 md:pt-8 md:pb-28 px-6 md:px-8">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[36px] pt-10 pb-16 md:pt-12 md:pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-7 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-[#e2e1da] bg-white py-1.5 pl-1.5 pr-4 shadow-[0_2px_10px_rgba(41,42,38,0.06)] dark:border-[#26271f] dark:bg-[#1b1c18] dark:shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              <div className="flex -space-x-2.5">
                {avatarBadges.map((badge) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={badge.seed}
                    src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${badge.seed}&backgroundColor=transparent`}
                    alt=""
                    className={`h-8 w-8 rounded-full border-2  ${badge.bg}`}
                  />
                ))}
              </div>
              <span className="h-4 w-px bg-[#e2e1da] dark:bg-[#26271f]" aria-hidden="true" />
              <p className="flex items-center gap-1.5 text-[13px] font-medium text-[#3a3b32] dark:text-[#e4e2da]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                </span>
                99+ students already here
              </p>
            </div>
          </motion.div>
          <h1 className="relative mx-auto w-fit font-display font-normal text-[clamp(44px,7.5vw,84px)] leading-[0.99] tracking-[-0.045em] text-[#292a26] dark:text-[#f4f2ec]">
            The one place for
            <br />
            <span className="text-[#4f46e5]">your aptech journey.</span>

          </h1>

          <p className="mt-6 font-light text-sm  text-[#777970] max-w-xl mx-auto text-[15px] md:text-[16px] leading-[1.65] tracking-[-0.15px] dark:text-[#9a9c8d]">
            Project guides, past questions, and free courses, organized in one place,
            kept current every semester, and free to start.
          </p>

          <div className="mt-8 flex gap-3 flex-wrap justify-center">
            <Link href='/resources/introduction'>
              <button className='inline-flex items-center gap-2 bg-[#4f46e5] hover:bg-[#6366f1] transition-[background,transform,box-shadow] hover:-translate-y-0.5 px-6 py-3.5 text-sm  text-white shadow-[0_2px_0_#3730a31c]'>
                Get Started <ArrowUpRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href='https://wa.me/2349068406794' target="_blank" rel="noopener noreferrer">
              <button className='inline-flex items-center gap-2 bg-transparent border border-[#d9d8d0] hover:border-[#b7b7af] hover:bg-[#efeee9] transition-[background,transform,box-shadow] hover:-translate-y-0.5 px-6 py-3.5 text-sm  text-[#292a26] dark:border-[#3a3b32] dark:hover:border-[#54554a] dark:hover:bg-[#1f2018] dark:text-[#f4f2ec]'>
                <MessageCircle className="w-4 h-4" /> Join the community
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative max-w-4xl mx-auto -mt-8 md:-mt-10 px-4"
      >
        <div className="overflow-hidden rounded-[28px] border border-[#efeee9] bg-white shadow-[0_1px_2px_rgba(41,42,38,0.04),0_32px_64px_-20px_rgba(41,42,38,0.18)] dark:border-[#26271f] dark:bg-[#1b1c18] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_32px_64px_-20px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 border-b border-[#efeee9] bg-[#fafaf8] px-5 py-3.5 dark:border-[#26271f] dark:bg-[#1f2018]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 rounded-md border border-[#efeee9] bg-white px-2.5 py-1 text-xs font-mono text-[#8c8e84] dark:border-[#26271f] dark:bg-[#1b1c18]">appvarsity.com/resources</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-7">
              <p className="mb-4 text-xs font-mono uppercase tracking-[0.2em] text-[#4f46e5]">Resource Index</p>
              <ul className="flex flex-col gap-1">
                {resourceItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl px-2.5 py-2.5 text-sm transition-colors hover:bg-[#f8f7f4] dark:hover:bg-[#1f2018]"
                  >
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] ${item.chip}`}>
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1 text-left font-medium text-[#292a26] dark:text-[#f4f2ec]">{item.label}</span>
                    <span className="font-mono text-xs text-[#8c8e84]">{item.status}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 border-t border-[#efeee9] p-7 text-center md:border-l md:border-t-0 dark:border-[#26271f]">
              <div className="flex -space-x-3">
                {avatarBadges.slice(0, 4).map((badge) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={badge.seed}
                    src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${badge.seed}&backgroundColor=transparent`}
                    alt=""
                    className={`h-11 w-11 rounded-full ring-4 ring-white dark:ring-[#1b1c18] ${badge.bg}`}
                  />
                ))}
              </div>
              <p className="max-w-[220px] text-sm leading-relaxed text-[#777970] dark:text-[#9a9c8d]">
                Built by students who've been exactly where you are.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection;
