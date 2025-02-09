
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import WhatsappIcon from "@/components/shared/WhatasappIcon";
// import { useEffect } from "react";



export const metadata: Metadata = {
  title: "Appvarsity",
  description: "Your guide to an easy aptech life",
  manifest: '/web.manifest.json'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/service-worker.ts")
  //       .then((registration) => {
  //         console.log("Service Worker registered with scope:", registration.scope);
  //       })
  //       .catch((error) => {
  //         console.error("Service Worker registration failed:", error);
  //       });
  //   }
  // }, []);


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
