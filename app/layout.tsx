import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import WhatsappIcon from "@/components/shared/WhatasappIcon";


export const metadata: Metadata = {
  title: "Appvarsity",
  description: "Your guide to an easy aptech life",
  manifest: '/web.manifest.json'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <ClerkProvider>
        <html lang="en">
          <body>
            {children}
            <WhatsappIcon />
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
