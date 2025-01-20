import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const raleway = Raleway({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Appvarsity",
  description: "Your guide to an easy aptech life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClerkProvider>
        <html lang="en">
          <body className={raleway.className}>
            {children}
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
