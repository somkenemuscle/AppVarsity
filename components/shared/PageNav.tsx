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
        <div className="flex justify-between items-center mt-12 mb-16 gap-4 border-t border-neutral-900 pt-8">
            {prev ? (
                <Link
                    href={prev.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium bg-neutral-900 border border-neutral-800 hover:border-indigo-500/40 hover:bg-neutral-800 transition-colors text-gray-200 rounded-lg px-4 py-2.5"
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
