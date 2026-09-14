import PageHeader from "@/components/shared/PageHeader"
import Link from "next/link"
import { Construction, Mail, MessageCircle } from "lucide-react"

function MiddlesexInformationPage() {
    return (
        <div className="lg:max-w-4xl">
            <PageHeader
                pageSubheading="Middlesex Updates"
                page='Campus Information'
                title="Campus Information"
            />

            <div className="flex flex-col items-center rounded-3xl border border-[#e2e1da] bg-white px-6 py-16 text-center shadow-[0_1px_2px_rgba(41,42,38,0.03)] dark:border-[#26271f] dark:bg-[#1b1c18] dark:shadow-none">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fdeecb] to-[#fbe1a3] text-[#7a5c0e] dark:from-[#302711] dark:to-[#241d0c] dark:text-[#f0c86a]">
                    <Construction className="h-6 w-6" />
                </span>
                <h2 className="mt-6 font-display text-xl font-semibold text-[#292a26] dark:text-[#f4f2ec]">Coming Soon</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[#777970] dark:text-[#9a9c8d]">
                    We are currently in the process of gathering and organizing valuable information
                    about Middlesex University, which will be available to you shortly.
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-[#777970] dark:text-[#9a9c8d]">
                    In the meantime, if you have any questions or need assistance, feel free to reach out.
                    Our team is here to help with any inquiries you might have, coming from a student's perspective.
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-3">
                    <Link
                        href="mailto:appvarsitytech@gmail.com"
                        className="inline-flex items-center gap-2 rounded-lg border border-[#e2e1da] px-4 py-2.5 text-sm font-medium text-[#292a26] transition-colors hover:bg-[#efeee9] dark:border-[#26271f] dark:text-[#f4f2ec] dark:hover:bg-[#1f2018]"
                    >
                        <Mail className="h-4 w-4" /> appvarsitytech@gmail.com
                    </Link>
                    <Link
                        href="https://wa.me/2349068406794"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#6366f1]"
                    >
                        <MessageCircle className="h-4 w-4" /> +234 906 840 6794
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MiddlesexInformationPage
