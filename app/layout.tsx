import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yonghao Li",
  description: "Personal website of Yonghao Li",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
