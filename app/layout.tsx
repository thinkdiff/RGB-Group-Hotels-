import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://rbghotels.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aura River Resort, Shivpuri Rishikesh | Luxury Cottages & River Camps",
    template: "%s | Aura River Resort, Rishikesh",
  },
  description:
    "Aura River Resort in Shivpuri, Rishikesh — luxury cottages, river camps, award-winning dining and spa on the banks of the Ganga. Book direct for best rates.",
  keywords:
    "luxury resort Rishikesh, Aura River Resort, cottages Shivpuri, river camps Rishikesh, resort near Rishikesh, Shivpuri resort",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Aura River Resort",
    title: "Aura River Resort, Shivpuri Rishikesh | Luxury Cottages & River Camps",
    description:
      "Luxury cottages, river camps, award-winning dining and spa on the banks of the Ganga in Shivpuri, Rishikesh.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura River Resort, Shivpuri Rishikesh | Luxury Cottages & River Camps",
    description:
      "Luxury cottages, river camps, award-winning dining and spa on the banks of the Ganga in Shivpuri, Rishikesh.",
  },
};

const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Aura River Resort",
  alternateName: "The RBGm Rishikesh",
  url: siteUrl,
  telephone: "+91-9457141414",
  email: "shivam@rbghotels.com",
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2.5 km ahead of Shivpuri Police Station, Kathiya Village",
    addressLocality: "Shivpuri",
    addressRegion: "Uttarakhand",
    postalCode: "249192",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.185,
    longitude: 78.419,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "3",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
