import PageHeader from "@/components/shared/PageHeader"
import Link from "next/link"
import { Code2, Component, Layers, Database, Sparkles, Mail, MessageCircle } from "lucide-react"

const courses = [
    { name: "Frontend Development", detail: "HTML, CSS, JavaScript", icon: Code2, chip: "bg-gradient-to-br from-[#e4e1ff] to-[#cfc9ff] text-[#4c3fc9]" },
    { name: "React", detail: "Modern component-based UI", icon: Component, chip: "bg-gradient-to-br from-[#dcecfe] to-[#c2ddfd] text-[#1a49c4]" },
    { name: "Fullstack Development", detail: "Frontend + backend combined", icon: Layers, chip: "bg-gradient-to-br from-[#d3f3e2] to-[#b8ecd0] text-[#12704c]" },
    { name: "SQL Database", detail: "Relational database design", icon: Database, chip: "bg-gradient-to-br from-[#fdeecb] to-[#fbe1a3] text-[#7a5c0e]" },
    { name: "MongoDB Database", detail: "NoSQL document storage", icon: Database, chip: "bg-gradient-to-br from-[#e4e1ff] to-[#cfc9ff] text-[#4c3fc9]" },
    { name: "And so much more", detail: "New courses added regularly", icon: Sparkles, chip: "bg-gradient-to-br from-[#dcecfe] to-[#c2ddfd] text-[#1a49c4]" },
]

function ProgrammingCoursesPage() {
    return (
        <div className="lg:max-w-4xl">
            <PageHeader
                pageSubheading="Programming Courses"
                page='Free Courses'
                title="Free Programming Courses Available!"
                description="We are excited to offer you free programming courses that have been fully paid for on Udemy, so you don’t need to purchase them yourself. We are here to support you on your tech journey and build a community where we can all grow together."
            />

            <p className="font-light mb-8 text-[#777970]">
                These courses have been instrumental in improving our skills as software engineers
                and developers. They are perfect for anyone looking to dive deeper into the tech
                field, or even for those who are simply curious and want to explore programming.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courses.map((course) => (
                    <div
                        key={course.name}
                        className="group relative flex flex-col rounded-2xl border border-[#e2e1da] bg-white p-5 shadow-[0_1px_2px_rgba(41,42,38,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(79,70,229,0.2)]"
                    >
                        <span className="absolute top-4 right-4 rounded-full bg-[#dcecfe] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.05em] text-[#1a49c4]">
                            Free
                        </span>
                        <span className={`flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${course.chip}`}>
                            <course.icon className="h-5 w-5" />
                        </span>
                        <h3 className="mt-4 text-sm font-semibold text-[#292a26]">{course.name}</h3>
                        <p className="mt-1 text-xs text-[#8c8e84]">{course.detail}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#e2e1da] bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-semibold text-[#292a26]">Want access to these courses?</p>
                    <p className="mt-1 text-sm text-[#777970]">Reach out and we'll get you started right away.</p>
                </div>
                <div className="flex gap-2">
                    <Link
                        href="mailto:appvarsitytech@gmail.com"
                        className="inline-flex items-center gap-2 rounded-lg border border-[#e2e1da] px-4 py-2.5 text-sm font-medium text-[#292a26] transition-colors hover:bg-[#efeee9]"
                    >
                        <Mail className="h-4 w-4" /> Email
                    </Link>
                    <Link
                        href="https://wa.me/2349068406794"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#6366f1]"
                    >
                        <MessageCircle className="h-4 w-4" /> WhatsApp
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProgrammingCoursesPage
