import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura River Resort | Luxury Cottages & Camps",
  description:
    "Welcome to Aura River Resort — experience unparalleled natural beauty, luxury cottages, and fine dining at our beautiful resort in Rishikesh.",
  keywords:
    "luxury resort Rishikesh, aura river resort, cottages, camps, shivpuri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
