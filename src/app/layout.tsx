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
  title: "Harsh Maheshwari - AI Engineer & ML Enthusiast",
  description: "Portfolio of Harsh Maheshwari - AI Engineer at Lumeo, specializing in Computer Vision, Machine Learning, and MLOps. 750+ LeetCode problems solved.",
  keywords: "AI Engineer, Machine Learning, Computer Vision, Deep Learning, MLOps, Python, TensorFlow, PyTorch",
  authors: [{ name: "Harsh Maheshwari" }],
  openGraph: {
    title: "Harsh Maheshwari - AI Engineer & ML Enthusiast",
    description: "Portfolio showcasing AI/ML projects, competitive programming achievements, and professional experience",
    type: "website",
    locale: "en_US",
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
