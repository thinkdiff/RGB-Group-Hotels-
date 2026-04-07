import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Reservations | Aura River Resort, Rishikesh",
  description:
    "Book your stay or contact the team at Aura River Resort, Shivpuri, Rishikesh. Call +91-9457141414 or email shivam@rbghotels.com.",
  alternates: { canonical: "https://rbghotels.com/contact" },
  openGraph: {
    title: "Contact & Reservations | Aura River Resort, Rishikesh",
    description:
      "Book your stay or get in touch with Aura River Resort in Shivpuri, Rishikesh.",
    url: "https://rbghotels.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
