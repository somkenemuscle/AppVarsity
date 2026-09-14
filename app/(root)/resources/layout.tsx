import Sidebar from "@/components/shared/Sidebar";

export default function ResoucesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-[#f8f7f4] dark:bg-[#131412]">
            <Sidebar>
                <main className="text-[#292a26] flex-1 p-6 md:p-10 overflow-y-auto font-sans dark:text-[#f4f2ec]">
                    {children}
                </main>
            </Sidebar>
        </div>
    );
}
