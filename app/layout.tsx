import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ['400','700']
});



export const metadata: Metadata = {
  title: "Blog App",
  description: "your favourite blog app",
  icons: {icon: "/logo.svg"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('antialiased', outfit.variable)}
      >
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem disableTransitionOnChange>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
