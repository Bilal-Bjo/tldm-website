import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
