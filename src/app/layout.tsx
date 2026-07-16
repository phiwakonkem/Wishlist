import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bash Wishlist",
  description: "A wishlist app built using Next.js, TailwindCSS and Prisma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <header className="border-b border-border-subtle bg-white">
    <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
        BASH
      </Link>
      <Link href="/wishlist" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Wishlist</Link>
    </nav>
  </header>
  {children}
</body>
    </html>
  );
}
