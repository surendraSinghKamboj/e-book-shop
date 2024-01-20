import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Shop",
  description: "E-commerce book shop.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
      <GoogleTagManager gtmId={`GTM-${process.env.NEXT_PUBLIC_GTM_ID}`} />
    </html>
  );
}
