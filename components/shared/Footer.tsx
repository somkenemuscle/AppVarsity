import Link from "next/link"
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react"
import BrandMark from "./BrandMark"

const footerColumns = [
    {
        title: "Resources",
        links: [
            { href: "/resources/introduction", label: "Introduction" },
            { href: "/resources/projectguide/overview", label: "Project Guide" },
            { href: "/resources/examination/pastquestions", label: "Past Questions" },
            { href: "/resources/programmingcourses/courses", label: "Free Courses" },
        ],
    },
    {
        title: "Company",
        links: [
            { href: "/resources/middlesex/information", label: "Campus Information" },
            { href: "/sign-up", label: "Sign up" },
            { href: "/sign-in", label: "Login" },
        ],
    },
    {
        title: "Support",
        links: [
            { href: "mailto:appvarsitytech@gmail.com", label: "Contact Us" },
            { href: "#faqs", label: "FAQs" },
        ],
    },
]

const socials = [
    { href: "mailto:appvarsitytech@gmail.com", icon: Mail, label: "Email" },
    { href: "https://wa.me/2349068406794", icon: MessageCircle, label: "WhatsApp" },
]

const Footer = () => {
    return (
        <footer className="relative w-full overflow-hidden bg-[#131412] px-6 pb-8 pt-16 text-[#f4f2ec] md:px-8 md:pt-20">
            <div className="relative z-10 mx-auto max-w-6xl">
                <div className="grid grid-cols-2 gap-10 pb-14 md:grid-cols-6">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2.5">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4f46e5]">
                                <BrandMark className="h-3.5 w-3.5 text-white" />
                            </span>
                            <span className="font-display text-base font-bold tracking-tight">Appvarsity</span>
                        </div>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#9a9c8d]">
                            Your guide to an easy aptech life: resources, past questions, and project guidance in one place.
                        </p>
                        <Link
                            href="/resources/introduction"
                            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white py-2.5 pl-4 pr-3.5 text-sm font-semibold text-[#141410] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f0efe9]"
                        >
                            Get Started
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                    {footerColumns.map((column) => (
                        <div key={column.title}>
                            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#6f7164]">{column.title}</p>
                            <ul className="flex flex-col gap-3 text-sm text-[#b8baaf]">
                                {column.links.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="transition-colors hover:text-white">{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 md:flex-row">
                    <div className="flex items-center gap-3 text-xs font-mono text-[#6f7164]">
                        <span>© {new Date().getFullYear()} Appvarsity</span>
                        <span className="h-1 w-1 rounded-full bg-[#6f7164]" />
                        <span>Built for Aptech &amp; Middlesex students</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith('http') ? '_blank' : undefined}
                                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                                aria-label={social.label}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#b8baaf] transition-colors hover:border-white/25 hover:text-white"
                            >
                                <social.icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <p
                aria-hidden="true"
                className="pointer-events-none relative z-0 -mb-6 mt-10 select-none whitespace-nowrap text-center font-display text-[19vw] font-bold leading-none tracking-tight text-white/[0.04] md:mt-14"
            >
                Appvarsity
            </p>
        </footer>
    )
}

export default Footer
