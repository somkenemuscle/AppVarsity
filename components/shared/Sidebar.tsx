'use client';
import React, { useState } from 'react';
import { Menu, X, Rocket, FolderKanban, FileQuestion, GraduationCap, Building2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import BrandMark from './BrandMark';
import {
    gettingStartedLinks,
    projectLinks,
    pastQuestionLinks,
    freeCoursesLinks,
    middlesexLinks,
} from '@/constants/sidebarLinks';

const navGroups = [
    { label: 'Getting Started', icon: Rocket, links: gettingStartedLinks },
    { label: 'Project Guide', icon: FolderKanban, links: projectLinks },
    { label: 'Examination', icon: FileQuestion, links: pastQuestionLinks },
    { label: 'Programming Courses', icon: GraduationCap, links: freeCoursesLinks },
    { label: 'Middlesex Updates', icon: Building2, links: middlesexLinks },
];

function Sidebar({ children }: SidebarProps) {
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const pathname = usePathname();

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    const isActive = (path: string) => pathname.startsWith(path);

    return (
        <div className="flex h-screen overflow-hidden bg-[#f8f7f4]">
            <div
                className={`fixed inset-y-0 left-0 w-72 bg-[#f8f7f4] border-r border-[#e2e1da] transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:w-72 md:h-full md:overflow-y-auto flex flex-col z-40`}
            >
                <div className="p-5 flex-1 overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <Link href='/' onClick={closeSidebar} className="flex items-center gap-2 font-display text-[15px] font-semibold tracking-[-0.01em] text-[#292a26] pl-1">
                            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#4f46e5]">
                                <BrandMark className="h-3 w-3 text-white" />
                            </span>
                            Appvarsity
                        </Link>
                        {isSidebarOpen && (
                            <button className="md:hidden text-[#777970] hover:text-[#292a26]" onClick={toggleSidebar}>
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>

                    <nav className="mt-8 flex flex-col gap-7">
                        {navGroups.map((group) => (
                            <div key={group.label}>
                                <span className="text-xs font-sans font-semibold uppercase tracking-[0.1em] text-[#8c8e84] mb-2 pl-3 block">
                                    {group.label}
                                </span>
                                <ul className="flex flex-col gap-0.5">
                                    {group.links.map(({ href, label }) => {
                                        const active = isActive(href);
                                        return (
                                            <li key={href}>
                                                <Link
                                                    href={href}
                                                    onClick={closeSidebar}
                                                    className={`flex items-center gap-2.5 text-sm py-2 px-3 rounded-lg transition-colors ${active
                                                        ? 'bg-[#4f46e5]/10 text-[#292a26] font-semibold tracking-[-0.005em] border border-[#4f46e5]/20'
                                                        : 'text-[#777970] font-medium hover:text-[#292a26] hover:bg-[#efeee9] border border-transparent'
                                                        }`}
                                                >
                                                    <group.icon className={`w-4 h-4 shrink-0 ${active ? 'text-[#4f46e5]' : 'text-[#8c8e84]'}`} />
                                                    {label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>

                <div className="p-4 border-t border-[#e2e1da]">
                    <SignedIn>
                        <div className="flex items-center gap-3 px-2">
                            <UserButton afterSignOutUrl="/" />
                            <span className="text-sm font-medium text-[#5c5e54]">Your account</span>
                        </div>
                    </SignedIn>
                    <SignedOut>
                        <Link
                            href="/sign-in"
                            className="flex items-center justify-center gap-2 text-sm bg-indigo-600 hover:bg-indigo-500 transition-colors text-white rounded-lg py-2.5 font-medium"
                        >
                            Sign in
                        </Link>
                    </SignedOut>
                </div>
            </div>

            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/40 z-30 md:hidden" onClick={closeSidebar} />
            )}

            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex items-center justify-between p-4 md:hidden bg-[#f8f7f4] border-b border-[#e2e1da] z-20">
                    <Link href='/' className="flex items-center gap-2 font-display text-[15px] font-semibold tracking-[-0.01em] text-[#292a26]">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#4f46e5]">
                            <BrandMark className="h-3 w-3 text-white" />
                        </span>
                        Appvarsity
                    </Link>
                    <button className="text-[#777970] hover:text-[#292a26]" onClick={toggleSidebar}>
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Sidebar;
