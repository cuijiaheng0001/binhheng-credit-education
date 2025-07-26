import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://binhhengcredit.com'),
  title: "Binhheng Credit - Recover Your Hidden Receivables",
  description: "Discover and recover millions in cross-border debts that were incorrectly written off. Specialized recovery for Chinese nationals who have returned home.",
  keywords: "debt recovery, cross-border collection, Chinese debt collection, international receivables, student housing debt",
  authors: [{ name: "Binhheng Credit" }],
  openGraph: {
    title: "Binhheng Credit - Recover Your Hidden Receivables",
    description: "Discover and recover millions in cross-border debts that were incorrectly written off.",
    url: "https://binhhengcredit.com",
    siteName: "Binhheng Credit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Binhheng Credit - Cross-border Debt Recovery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Binhheng Credit - Recover Your Hidden Receivables",
    description: "Discover and recover millions in cross-border debts that were incorrectly written off.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}