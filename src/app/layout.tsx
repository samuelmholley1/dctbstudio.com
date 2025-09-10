import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import GlobalFooter from "../components/GlobalFooter";

export const metadata: Metadata = {
  title: "Design Consultants of Tampa Bay - Creating Elegant Interiors",
  description: "Full service interior design company in Tampa Bay. Custom designed interiors, unique finishes, and high quality interior products. Budget-conscious design solutions.",
  keywords: "interior design, Tampa Bay, custom furniture, window treatments, home design, interior decorator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <GlobalFooter />
      </body>
    </html>
  );
}
