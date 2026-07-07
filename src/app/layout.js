import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import CursorTrail from "./components/ui/CursorTrail";
import NeuralBackground from "./components/ui/NeuralBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Nexus | Sowmiya P",
  description: "AI/ML Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">

        {/* Global Neural Background */}
        <NeuralBackground />

        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Cursor */}
        <CursorTrail />

      </body>
    </html>
  );
}