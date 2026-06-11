import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Organishi | Fresh & Organic Delivered",
    template: "%s | Organishi",
  },
  description:
    "Shop certified organic fruits, vegetables, dairy, and more. Farm-fresh produce delivered straight to your door.",
  keywords: [
    "Organishi",
    "Organic Food",
    "Fresh Produce",
    "Farm Fresh",
    "Organic Delivery",
    "Healthy Groceries",
  ],
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://organishi.com"),
  openGraph: {
    title: "Organishi",
    description: "Farm fresh. Certified organic. Delivered to you.",
    url: "https://organishi.com",
    siteName: "Organishi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organishi",
    description: "Shop certified organic food delivered fresh to your door.",
    creator: "@organishi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <Providers>
          <Toaster richColors position="top-right" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
