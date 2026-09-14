import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavLink {
    href: string
    label: string
    shortLabel?: string
}

interface PageNavProps {
    prev?: NavLink
    next?: NavLink
}

function NavLabel({ link }: { link: NavLink }) {
    if (!link.shortLabel) return <>{link.label}</>
    return (
        <>
            <span className="hidden sm:inline">{link.label}</span>
            <span className="inline sm:hidden">{link.shortLabel}</span>
        </>
    )
}

export default function PageNav({ prev, next }: PageNavProps) {
    if (!prev && !next) return null

    return (
        <div className="flex justify-between items-center mt-12 mb-16 gap-4 border-t border-[#e2e1da] pt-8 dark:border-[#26271f]">
            {prev ? (
                <Link
                    href={prev.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium bg-white border border-[#e2e1da] hover:border-[#4f46e5]/40 hover:bg-[#efeee9] transition-colors text-[#292a26] rounded-lg px-4 py-2.5 dark:bg-[#1b1c18] dark:border-[#26271f] dark:hover:bg-[#1f2018] dark:text-[#f4f2ec]"
                >
                    <ChevronLeft className="w-4 h-4 shrink-0" /> <NavLabel link={prev} />
                </Link>
            ) : <span />}
            {next && (
                <Link
                    href={next.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 transition-colors text-white rounded-lg px-4 py-2.5 ml-auto"
                >
                    <NavLabel link={next} /> <ChevronRight className="w-4 h-4 shrink-0" />
                </Link>
            )}
        </div>
    )
}
