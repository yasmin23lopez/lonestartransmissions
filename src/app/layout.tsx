import type { Metadata } from "next";
import { Saira, Funnel_Display } from "next/font/google";
import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lonestar Transmissions | Professional Transmission Services in Crosby, TX",
  description: "Professional transmission repair and services in Crosby, Texas. Contact us at 281-462-4970. Located at 4321 US-90, Crosby, TX 77532.",
  keywords: ["transmission repair", "Crosby TX", "auto repair", "transmission services", "Lonestar Transmissions"],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Lonestar Transmissions",
    description: "Professional Transmission Services in Crosby, TX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.variable} ${funnelDisplay.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
