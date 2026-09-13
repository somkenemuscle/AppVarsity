import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import WhatsappIcon from "@/components/shared/WhatasappIcon";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
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
      <html lang="en" className={`${plusJakarta.variable} ${GeistMono.variable}`}>
        <body>
          {children}
          <WhatsappIcon />
        </body>
      </html>
    </ClerkProvider>
  );
}
