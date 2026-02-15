import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FullStackGrowth — All-in-One CRM, Marketing & Advertising Platform",
  description:
    "Stop juggling tools. FullStackGrowth combines CRM, marketing automation, and advertising in one simple platform built for busy business owners.",
  keywords: [
    "CRM",
    "marketing automation",
    "advertising platform",
    "small business",
    "customer management",
  ],
  openGraph: {
    title: "FullStackGrowth — All-in-One CRM, Marketing & Advertising Platform",
    description:
      "Stop juggling tools. FullStackGrowth combines CRM, marketing automation, and advertising in one simple platform built for busy business owners.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">{children}</body>
    </html>
  );
}
