import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";
import { DoorOpen, GlassWater, Salad, Baby } from "lucide-react";

export const metadata: Metadata = {
  title: "Dining & Restaurants | Aura River Resort, Rishikesh",
  description:
    "Dine at The Amber Room, The Drawing Room, and The Library Bar — three distinct venues at Aura River Resort in Shivpuri, Rishikesh. From fine dining to cocktails.",
  alternates: { canonical: "https://rbghotels.com/dining" },
  openGraph: {
    title: "Dining & Restaurants | Aura River Resort, Rishikesh",
    description:
      "Three distinct dining venues at Aura River Resort, Shivpuri, Rishikesh — fine dining, afternoon tea, and cocktail bar.",
    url: "https://rbghotels.com/dining",
  },
};

const diningSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FoodEstablishment",
      name: "The Amber Room",
      servesCuisine: "Contemporary Indian",
      openingHours: "Mo-Su 18:00-22:30",
      url: "https://rbghotels.com/dining",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2.5 km ahead of Shivpuri Police Station, Kathiya Village",
        addressLocality: "Shivpuri, Rishikesh",
        addressRegion: "Uttarakhand",
        postalCode: "249192",
        addressCountry: "IN",
      },
    },
    {
      "@type": "FoodEstablishment",
      name: "The Drawing Room",
      servesCuisine: "Snacks, Tea",
      openingHours: "Mo-Su 16:30-18:30",
      url: "https://rbghotels.com/dining",
    },
    {
      "@type": "BarOrPub",
      name: "The Library Bar",
      servesCuisine: "Cocktails, Beverages",
      openingHours: "Mo-Su 16:00-23:00",
      url: "https://rbghotels.com/dining",
    },
  ],
};

const diningVenues = [
  {
    name: "The Amber Room",
    type: "Fine Dining",
    desc: "Our signature restaurant presents contemporary cuisine crafted from the finest seasonal ingredients. A symphony of extraordinary flavours in an elegant setting.",
    hours: "Dinner: 6:00 PM – 10:30 PM",
    dressCode: "Smart Casual",
    image: "/amber-room.png",
  },
  {
    name: "The Drawing Room",
    type: "Traditional Afternoon Tea",
    desc: "Experience our legendary evening snacks and tea. Enjoy the serene beauty of the resort alongside our exquisitely crafted snacks.",
    hours: "Daily: 4:30 PM – 6:30 PM",
    dressCode: "Casual",
    image: "/drawing-room.png",
  },
  {
    name: "The Library Bar",
    type: "Cocktails & Spirits",
    desc: "A sophisticated enclave offering bespoke cocktails, beverages, and a relaxing atmosphere.",
    hours: "Daily: 4:00 PM – 11:00 PM",
    dressCode: "Smart Casual",
    image: "/library-bar.png",
  },
];

const diningServices = [
  { icon: <DoorOpen />, title: "24-Hour Room Service", desc: "Enjoy our extensive in-room dining menu at any hour, from a full English breakfast to late-night comfort food." },
  { icon: <GlassWater />, title: "Private Dining", desc: "Intimate private dining rooms available for family celebrations, business dinners, or romantic evenings." },
  { icon: <Salad />, title: "Dietary Requirements", desc: "Our chefs expertly cater to all dietary needs, including vegan, gluten-free, halal, and kosher requirements." },
  { icon: <Baby />, title: "Children's Menus", desc: "Thoughtfully crafted, nutritious, and delicious options tailored specifically for our younger guests." },
];

export default function DiningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(diningSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className={styles.pageHero} id="dining-hero">
        <Image src="/dining-hero.png" alt="Fine dining at Aura River Resort, Rishikesh" fill priority quality={90} className={styles.heroImg} />
        <div className={styles.pageHeroOverlay} />
        <div className={styles.pageHeroContent}>
          <span className={styles.overline}>Culinary Excellence</span>
          <h1>A Feast for the Senses</h1>
          <p>
            From award-winning riverside gastronomy to our legendary Afternoon Tea,
            discover unparalleled dining experiences.
          </p>
        </div>
      </section>

      {/* Venues */}
      <section className="section" id="venues">
        <div className="container">
          <div className="section-header">
            <span className="overline">Our Restaurants</span>
            <h2>Exceptional Venues</h2>
          </div>
          <div className={styles.venuesList}>
            {diningVenues.map((venue, i) => (
              <div key={venue.name} className={`${styles.venueRow} ${i % 2 !== 0 ? styles.venueRowReverse : ''}`}>
                <div className={styles.venueImageWrap}>
                  <Image src={venue.image} alt={venue.name} fill className={styles.venueImage} />
                </div>
                <div className={styles.venueContent}>
                  <span className={styles.venueType}>{venue.type}</span>
                  <h3>{venue.name}</h3>
                  <p>{venue.desc}</p>
                  <div className={styles.venueDetails}>
                    <div>
                      <strong>Hours:</strong> <span>{venue.hours}</span>
                    </div>
                    <div>
                      <strong>Dress Code:</strong> <span>{venue.dressCode}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="btn btn-primary">Make a Reservation</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Services Grid */}
      <section className="section section-cream" id="dining-services">
        <div className="container">
          <div className="section-header">
            <span className="overline">Bespoke Services</span>
            <h2>Catered to Your Preferences</h2>
          </div>
          <div className="grid-2">
            {diningServices.map(service => (
              <div key={service.title} className={`card ${styles.dsCard}`}>
                <span className={styles.dsIcon}>{service.icon}</span>
                <div>
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
