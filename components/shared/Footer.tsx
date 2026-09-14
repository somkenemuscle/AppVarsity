import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"
import BrandMark from "./BrandMark"

const socials = [
    { href: "mailto:appvarsitytech@gmail.com", icon: Mail, label: "Email" },
    { href: "https://wa.me/2349068406794", icon: MessageCircle, label: "WhatsApp" },
]

const Footer = () => {
    return (
        <footer className="w-full border-t border-[#e2e1da] bg-[#f8f7f4] px-6 py-10 text-[#292a26] md:px-8 md:py-12">
            <div className="mx-auto flex max-w-6xl flex-col gap-8">
                <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
                    <Link href="/" className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4f46e5]">
                            <BrandMark className="h-3.5 w-3.5 text-white" />
                        </span>
                        <span className="font-display text-base font-bold tracking-tight">Appvarsity</span>
                    </Link>

                    <div className="flex items-center gap-2">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith('http') ? '_blank' : undefined}
                                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                                aria-label={social.label}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e2e1da] text-[#777970] transition-colors hover:border-[#c9c8be] hover:bg-[#efeee9] hover:text-[#292a26]"
                            >
                                <social.icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 border-t border-[#e2e1da] pt-6 text-xs font-mono text-[#8c8e84] md:flex-row md:justify-between">
                    <span>© {new Date().getFullYear()} Appvarsity</span>
                    <span>Built for Aptech &amp; Middlesex students</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
