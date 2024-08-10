import Sidebar from "@/components/shared/Sidebar";

export default function ResoucesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div>
            <Sidebar>
                <main className="lg:ml-9 text-left flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
               
            </Sidebar>
        </div>
    );
}
