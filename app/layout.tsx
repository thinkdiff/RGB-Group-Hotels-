import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The RBGm London | Five-Star Luxury Hotel & Concierge",
  description:
    "Welcome to The RBGm London — voted one of the finest luxury hotels for five consecutive years. Experience unparalleled elegance, world-class dining, and bespoke concierge services in the heart of London.",
  keywords:
    "luxury hotel London, five star hotel, RBGm London, concierge services, fine dining London, spa London hotel",
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
