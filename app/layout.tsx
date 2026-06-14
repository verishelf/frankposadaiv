import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frank Posada IV | Customer Success & SaaS Support",
  description:
    "High-volume customer service professional with 200+ daily customer interactions and technical experience in payment systems and SaaS tools.",
  metadataBase: new URL("https://frankposadaiv.com"),
  openGraph: {
    title: "Frank Posada IV | Customer Success & SaaS Support",
    description:
      "High-volume customer service professional with Stripe and SaaS experience.",
    url: "https://frankposadaiv.com",
    siteName: "Frank Posada IV",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
