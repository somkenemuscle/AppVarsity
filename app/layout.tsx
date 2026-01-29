import type { Metadata } from "next";
import "./globals.css";
import WhatsappIcon from "@/components/shared/WhatasappIcon";


export const metadata: Metadata = {
  title: "Appvarsity",
  description: "Your guide to an easy aptech life",
  manifest: '/web.manifest.json'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <html lang="en">
        <body>
          {children}
          <WhatsappIcon />
        </body>
      </html>
    </>
  );
}
