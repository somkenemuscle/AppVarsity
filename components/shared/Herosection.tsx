'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { projectLinks } from "@/constants/sidebarLinks";

const avatarBadges = [
  { seed: "Aptech-Amara", bg: "bg-[#dcd8ff]", className: "top-10 left-[6%] md:left-[10%] -rotate-12" },
  { seed: "Aptech-Zainab", bg: "bg-[#cceedd]", className: "top-16 right-[4%] md:right-[9%] rotate-10" },
  { seed: "Aptech-Ife", bg: "bg-[#ffe9af]", className: "bottom-16 left-[13%]" },
  { seed: "Aptech-Musa", bg: "bg-[#dbeafe]", className: "bottom-8 right-[10%] md:right-[16%] -rotate-6" },
];

const HeroSection = () => {
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
            <div className="inline-flex items-center gap-3 rounded-full border border-[#e2e1da] bg-white py-1.5 pl-1.5 pr-4 shadow-[0_2px_10px_rgba(41,42,38,0.06)]">
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
                {/* <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#292a26] text-[8px] font-semibold text-[#141410]">
                  99+
                </span> */}
              </div>
              <span className="h-4 w-px bg-[#e2e1da]" aria-hidden="true" />
              <p className="flex items-center gap-1.5 text-[13px] font-medium text-[#3a3b32]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                </span>
                99+ students already here
              </p>
            </div>
          </motion.div>
          <h1 className="relative mx-auto w-fit font-display font-normal text-[clamp(44px,7.5vw,84px)] leading-[0.99] tracking-[-0.045em] text-[#292a26]">
            The one place for
            <br />
            <span className="text-[#4f46e5]">your aptech journey.</span>

          </h1>

          <p className="mt-6 font-light text-sm  text-[#777970] max-w-xl mx-auto text-[15px] md:text-[16px] leading-[1.65] tracking-[-0.15px]">
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
              <button className='inline-flex items-center gap-2 bg-transparent border border-[#d9d8d0] hover:border-[#b7b7af] hover:bg-[#efeee9] transition-[background,transform,box-shadow] hover:-translate-y-0.5 px-6 py-3.5 text-sm  text-[#292a26]'>
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
        <div className="rounded-[18px] border border-[#e2e1da] bg-white overflow-hidden shadow-[0_24px_70px_rgba(41,42,38,0.12)]">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#e2e1da] bg-[#efeee9]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#e9c767]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#8bbd91]" />
            <span className="ml-3 text-xs font-mono text-[#8c8e84]">appvarsity.com/resources</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#e2e1da]">
            <div className="p-6">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#4f46e5] mb-4">Resource Index</p>
              <ul className="flex flex-col divide-y divide-[#efeee9]">
                <li className="flex items-center justify-between py-3 text-sm">
                  <span className="text-[#292a26] font-medium">Project Guide</span>
                  <span className="text-[#8c8e84] font-mono text-xs">{projectLinks.length} sections</span>
                </li>
                <li className="flex items-center justify-between py-3 text-sm">
                  <span className="text-[#292a26] font-medium">Past Questions</span>
                  <span className="text-[#8c8e84] font-mono text-xs">Available now</span>
                </li>
                <li className="flex items-center justify-between py-3 text-sm">
                  <span className="text-[#292a26] font-medium">Free Courses</span>
                  <span className="text-[#8c8e84] font-mono text-xs">Open enrollment</span>
                </li>
                <li className="flex items-center justify-between py-3 text-sm">
                  <span className="text-[#292a26] font-medium">Campus Info</span>
                  <span className="text-[#8c8e84] font-mono text-xs">Coming soon</span>
                </li>
              </ul>
            </div>
            <div className="p-6 flex flex-col items-center justify-center text-center gap-3">
              <div className="flex -space-x-3">
                {avatarBadges.slice(0, 4).map((badge) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={badge.seed}
                    src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${badge.seed}&backgroundColor=transparent`}
                    alt=""
                    className={`w-10 h-10 rounded-full border-2 border-white ${badge.bg}`}
                  />
                ))}
              </div>
              <p className="text-sm text-[#777970] max-w-[220px]">
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
