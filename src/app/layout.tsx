import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eshop",
  description: "Browse japanese art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen">
        <nav className="flex items-center w-full h-16 px-8 bg-yellow-950/10 text-slate-600">
          <Link href="/" className="mx-5 hover:text-amber-600">
            <p className="h-10 w-10 border-4 border-amber-100 text-xs text-center bg-slate-50">
              LO
              <br />
              GO
            </p>
          </Link>
          <Link href="/about" className="mx-5 hover:text-red-600">
            <p>About</p>
          </Link>
          <Link href="/" className="mx-5 hover:text-red-600">
            <p>Home</p>
          </Link>
          <Link href="/profile" className="mx-5 hover:text-red-600">
            <p>Profile</p>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
