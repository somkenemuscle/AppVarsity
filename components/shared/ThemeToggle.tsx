'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ className = '' }: { className?: string }) {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return <div className={`h-9 w-9 shrink-0 ${className}`} aria-hidden="true" />
    }

    const isDark = resolvedTheme === 'dark'

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e2e1da] text-[#777970] transition-colors hover:bg-[#efeee9] hover:text-[#292a26] dark:border-[#26271f] dark:text-[#9a9c8d] dark:hover:bg-[#1f2018] dark:hover:text-[#f4f2ec] ${className}`}
        >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
    )
}
