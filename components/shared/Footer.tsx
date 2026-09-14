'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, MessageCircle } from "lucide-react"
import BrandMark from "./BrandMark"

const socials = [
    { href: "mailto:appvarsitytech@gmail.com", icon: Mail, label: "Email" },
    { href: "https://wa.me/2349068406794", icon: MessageCircle, label: "WhatsApp" },
]

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="w-full border-t border-[#e2e1da] bg-[#f8f7f4] px-6 py-8 text-[#292a26] md:px-8 dark:border-[#26271f] dark:bg-[#131412] dark:text-[#f4f2ec]"
        >
            <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 text-left md:flex-row md:items-center md:justify-between">
                <Link href="/" className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#4f46e5]">
                        <BrandMark className="h-3 w-3 text-white" />
                    </span>
                    <span className="font-display text-sm font-semibold tracking-[-0.01em]">Appvarsity</span>
                </Link>

                <div className="flex items-center gap-4">
                    <span className="text-xs font-mono font-light tracking-[0.02em] text-[#8c8e84] dark:text-[#8a8c80]">© {new Date().getFullYear()} Appvarsity</span>
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target={social.href.startsWith('http') ? '_blank' : undefined}
                            rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                            aria-label={social.label}
                            className="text-[#777970] transition-colors hover:text-[#292a26] dark:text-[#9a9c8d] dark:hover:text-[#f4f2ec]"
                        >
                            <social.icon className="h-4 w-4" />
                        </a>
                    ))}
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer
