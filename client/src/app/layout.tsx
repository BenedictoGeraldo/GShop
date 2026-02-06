import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ProvidersBar from "./providers";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "GShop - Your Online Shopping Companion",
  description: "GShop helps you find the best deals online quickly and easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable}  antialiased`}>
        <ProvidersBar />
        {children}
      </body>
    </html>
  );
}
