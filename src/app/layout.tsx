import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crumbs",
  description: "Crumbs is the first Social Funding Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body> {/* Set background to black */}
    </html>
  );
}
