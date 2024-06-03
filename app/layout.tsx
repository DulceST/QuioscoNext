import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastNotification from "@/components/ui/ToastNotification";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiosco Next.js con App Router y Prisma",
  description: "PQuiosco Next.js con App Router y Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={'${inter.className} bg-gray-100'}>{children}</body>

    </html>
  );
}
