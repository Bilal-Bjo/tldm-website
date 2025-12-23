import type { Metadata } from "next";
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
  title: "TLDM - AI Meeting Assistant",
  description: "Never miss a word in your meetings. TLDM captures every conversation, generates AI summaries, and extracts action items automatically.",
  keywords: ["meeting assistant", "transcription", "AI summary", "action items", "meeting notes", "productivity"],
  authors: [{ name: "TLDM" }],
  openGraph: {
    title: "TLDM - AI Meeting Assistant",
    description: "Never miss a word in your meetings. AI-powered transcription, summaries, and action items.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TLDM - AI Meeting Assistant",
    description: "Never miss a word in your meetings. AI-powered transcription, summaries, and action items.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
