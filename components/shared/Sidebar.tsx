'use client';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Import icons from Heroicons
import { Button } from '@headlessui/react'; // Import Button component from Headless UI
import { SignedIn, UserButton } from '@clerk/nextjs'; // Import Clerk components for authentication
import Link from 'next/link'; // Import Link component for client-side navigation
import { usePathname } from 'next/navigation'; // Import usePathname hook from Next.js
import { projectLinks } from '@/constants/sidebarLinks'; // Import project links
import { gettingStartedLinks } from '@/constants/sidebarLinks'; // Import getting started links
import { pastQuestionLinks } from '@/constants/sidebarLinks';
import { freeCoursesLinks } from '@/constants/sidebarLinks';
import { middlesexLinks } from '@/constants/sidebarLinks';


function Sidebar({ children }: SidebarProps) {
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false); // State to toggle sidebar visibility
    const pathname = usePathname(); // Get the current pathname

    // Toggle the sidebar open/closed
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    // Function to close the sidebar
    const closeSidebar = () => setSidebarOpen(false);

    // Determine if the current path matches the link path for active styling
    const isActive = (path: string) => pathname.startsWith(path) ? 'font-medium text-white' : 'text-gray-400 font-light';

    return (
        <div className="flex h-screen overflow-hidden">
            <div
                className={`fixed inset-y-0 left-0 w-64 bg-blue-200 text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:w-64 md:h-full md:overflow-y-auto`}
                style={{
                    // Adjust sidebar height and position based on the state
                    height: isSidebarOpen ? 'calc(100vh - var(--navbar-height, 0px))' : '100%',
                    top: isSidebarOpen ? 'var(--navbar-height, 0px)' : '0',
                }}
            >
                <div className="p-4 relative">
                    {/* Close button for the sidebar */}
                    {isSidebarOpen && (
                        <Button className="absolute top-4 right-4 md:hidden" onClick={toggleSidebar}>
                            <XMarkIcon className="w-6 h-6 text-gray-500" />
                        </Button>
                    )}

                    {/* App title */}
                    <Link href='/' onClick={closeSidebar}>
                        <h2 className="pl-4 text-lg font-bold font-mono text-indigo-400">App<span className='text-white'>varsity</span></h2>
                    </Link>

                    <nav className="mt-4">
                        {/* Getting started link section */}
                        <div className='mt-7'>
                            <span className="text-sm font-medium mb-2 pl-4">Getting Started</span>
                            <ul>
                                {gettingStartedLinks.map(({ href, label }) => (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            onClick={closeSidebar} // Close sidebar on link click
                                            className={`text-sm block py-2 px-4 ${isActive(href)} hover:underline`}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Project links */}
                        <div className='mt-6'>
                            <span className="text-sm font-medium mb-2 pl-4">Project Guide</span>
                            <ul>
                                {projectLinks.map(({ href, label }) => (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            onClick={closeSidebar} // Close sidebar on link click
                                            className={`text-sm block pt-2 px-4 ${isActive(href)} hover:underline`}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        {/* Examination links */}
                        <div className='mt-6'>
                            <span className="text-sm font-medium mb-2 pl-4">Examination</span>
                            <ul>
                                {pastQuestionLinks.map(({ href, label }) => (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            onClick={closeSidebar} // Close sidebar on link click
                                            className={`text-sm block pt-2 px-4 ${isActive(href)} hover:underline`}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Free courses Links */}
                        <div className='mt-6'>
                            <span className="text-sm font-medium mb-2 pl-4">Programming Courses</span>
                            <ul>
                                {freeCoursesLinks.map(({ href, label }) => (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            onClick={closeSidebar} // Close sidebar on link click
                                            className={`text-sm block pt-2 px-4 ${isActive(href)} hover:underline`}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Middlesex Courses Links */}
                        <div className='mt-6'>
                            <span className="text-sm font-medium mb-2 pl-4">Middlesex Updates</span>
                            <ul>
                                {middlesexLinks.map(({ href, label }) => (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            onClick={closeSidebar} // Close sidebar on link click
                                            className={`text-sm block pt-2 px-4 ${isActive(href)} hover:underline`}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Small screen navigation bar */}
            <div className="flex-1 flex flex-col">
                <div className="flex justify-between p-4 md:hidden bg-blue-200">
                    {/* Button to toggle sidebar visibility on small screens */}
                    <Button
                        className="text-white"
                        onClick={toggleSidebar}
                    >
                        <Bars3Icon className="w-6 h-6" />
                    </Button>
                    {/* Render user button if the user is signed in */}
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
                {/* Render children passed to Sidebar component */}
                {children}
            </div>
        </div>
    );
}

export default Sidebar;
