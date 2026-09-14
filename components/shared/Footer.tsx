import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"
import BrandMark from "./BrandMark"

const socials = [
    { href: "mailto:appvarsitytech@gmail.com", icon: Mail, label: "Email" },
    { href: "https://wa.me/2349068406794", icon: MessageCircle, label: "WhatsApp" },
]

const Footer = () => {
    return (
        <footer className="w-full border-t border-[#e2e1da] bg-[#f8f7f4] px-6 py-8 text-[#292a26] md:px-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
                <Link href="/" className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#4f46e5]">
                        <BrandMark className="h-3 w-3 text-white" />
                    </span>
                    <span className="font-display text-sm font-bold tracking-tight">Appvarsity</span>
                </Link>

                <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-[#8c8e84]">© {new Date().getFullYear()} Appvarsity</span>
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target={social.href.startsWith('http') ? '_blank' : undefined}
                            rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                            aria-label={social.label}
                            className="text-[#777970] transition-colors hover:text-[#292a26]"
                        >
                            <social.icon className="h-4 w-4" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
