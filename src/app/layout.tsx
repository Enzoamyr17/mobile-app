import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";

import "@/app/globals.css";

const ibm = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${ibm.variable} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
