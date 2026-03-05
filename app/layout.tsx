import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Nishar Ahamed | Digital Transformation Specialist — UAE",
  description:
    "I help Real Estate, FinTech, E-commerce & SaaS companies in the UAE scale through software, AI, automation, and strategic digital systems.",
  keywords: [
    "Digital Transformation",
    "UAE",
    "Software Development",
    "AI Solutions",
    "Automation",
    "PropTech",
    "FinTech",
    "E-commerce",
    "SaaS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
