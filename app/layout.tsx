import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import WhatsappIcon from "@/components/shared/WhatasappIcon";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Appvarsity",
  description: "Your guide to an easy aptech life",
  manifest: '/web.manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#4f46e5',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
        <body>
          {children}
          <WhatsappIcon />
        </body>
      </html>
    </ClerkProvider>
  );
}
