import type { Metadata } from "next";
import "@fontsource/manrope/index.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/inter/index.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "SR Automation | Precision in Motion",
  description: "High-end control and plant engineering services for modern industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark scroll-smooth">
      <body className="antialiased font-sans selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}