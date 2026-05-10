import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goxeto.com"),
  title: "Xeto — Small Business Consulting",
  description:
    "Xeto builds the critical systems small businesses need to launch right and grow without breaking — turnkey services and 1-on-1 coaching, every step of the way.",
  openGraph: {
    title: "Xeto — Small Business Consulting",
    description:
      "Prepare. Plan. Launch. Succeed. Turnkey services and 1-on-1 coaching for new small business owners.",
    url: "https://goxeto.com",
    siteName: "Xeto",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xeto — Small Business Consulting",
    description:
      "Prepare. Plan. Launch. Succeed. Turnkey services and 1-on-1 coaching for new small business owners.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F1B3D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-navy antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
