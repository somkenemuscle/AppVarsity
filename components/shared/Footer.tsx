import Link from "next/link"
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

const Footer = () => {
    return (
        <footer className="w-full bg-[#f8f7f4] border-t border-[#e2e1da] px-6 md:px-8 pt-16 pb-10">
            <section className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
                    <div className="col-span-2">
                        <header className="flex items-center gap-2.5">
                            <span className="w-7 h-7 rounded-lg bg-[#4f46e5] flex items-center justify-center">
                                <BrandMark className="text-white w-3.5 h-3.5" />
                            </span>
                            <span className="text-[#292a26] font-bold tracking-tight">Appvarsity</span>
                        </header>
                        <p className="mt-4 text-sm text-[#777970] max-w-xs leading-relaxed">
                            Your guide to an easy aptech life: resources, past questions, and project guidance in one place.
                        </p>
                    </div>
                    {footerColumns.map((column) => (
                        <div key={column.title}>
                            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#8c8e84] mb-4">{column.title}</p>
                            <ul className="flex flex-col gap-3 text-sm text-[#777970]">
                                {column.links.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="hover:text-[#4f46e5] transition-colors">{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <hr className="border border-[#e2e1da] mb-7" />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <p className="text-[#8c8e84] font-mono text-xs">© 2026 Appvarsity. All rights reserved.</p>
                    <p className="text-[#8c8e84] font-mono text-xs">Built for Aptech &amp; Middlesex students.</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer
