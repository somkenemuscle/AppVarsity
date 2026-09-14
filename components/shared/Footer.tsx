import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"
import BrandMark from "./BrandMark"

const socials = [
    { href: "mailto:appvarsitytech@gmail.com", icon: Mail, label: "Email" },
    { href: "https://wa.me/2349068406794", icon: MessageCircle, label: "WhatsApp" },
]

const Footer = () => {
    return (
        <footer className="w-full bg-[#131412] px-6 py-10 text-[#f4f2ec] md:px-8 md:py-12">
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
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#b8baaf] transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white"
                            >
                                <social.icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-xs font-mono text-[#6f7164] md:flex-row md:justify-between">
                    <span>© {new Date().getFullYear()} Appvarsity</span>
                    <span>Built for Aptech &amp; Middlesex students</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
