import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Concierge Services | Aura River Resort, Rishikesh",
  description:
    "Bespoke concierge services at Aura River Resort, Rishikesh. Adventure tickets, private tours, chauffeur services, and exclusive Rishikesh experiences.",
  alternates: { canonical: "https://rbghotels.com/concierge" },
  openGraph: {
    title: "Concierge Services | Aura River Resort, Rishikesh",
    description:
      "Bespoke concierge services at Aura River Resort, Rishikesh — adventure tickets, private tours, and exclusive experiences.",
    url: "https://rbghotels.com/concierge",
  },
};

const conciergeServices = [
  {
    title: "Chauffeur & Transfers",
    desc: "Arrive in style. We arrange private airport transfers, hourly chauffeur services, and luxury car rentals including our house Rolls-Royce Phantom.",
    icon: "🚘",
  },
  {
    title: "Theatre & Entertainment",
    desc: "Unrivalled access to local adventures. We secure premium arrangements for river rafting, bungee jumping, and exclusive Rishikesh natural treks.",
    icon: "🎫",
  },
  {
    title: "Curated Tours",
    desc: "Discover Rishikesh through our private guided tours. From historical temple walks and scenic views to camping alongside the Ganges.",
    icon: "🗺️",
  },
  {
    title: "Restaurant Reservations",
    desc: "Access the inaccessible. Our Concierge maintains close relationships with Rishikesh's finest dining establishments, securing priority reservations for our guests.",
    icon: "🍾",
  },
  {
    title: "Personal Shopping",
    desc: "Private appointments at Mayfair boutiques, Harrods, and Selfridges. We can also arrange for a stylist to bring selections directly to your suite.",
    icon: "🛍️",
  },
  {
    title: "Family & Childcare",
    desc: "Certified babysitting services, bespoke children's itineraries, and family-friendly dining recommendations to ensure a stress-free stay.",
    icon: "🧸",
  },
];

export default function ConciergePage() {
  return (
    <>
      <Navbar />

      <section className={styles.pageHero} id="concierge-hero">
        <Image src="/exterior-v2.jpg" alt="Concierge arranging a car" fill quality={90} className={styles.heroImg} />
        <div className={styles.pageHeroOverlay} />
        <div className={styles.pageHeroContent}>
          <span className={styles.overline}>Les Clefs d'Or Concierge</span>
          <h1>Mastering the Impossible</h1>
          <p>
            With the golden keys lapel pinned to their uniform, our Concierge team 
            unlocks the very best of Rishikesh, crafting bespoke itineraries and unforgettable experiences.
          </p>
        </div>
      </section>

      <section className="section" id="concierge-services">
        <div className="container">
          <div className="section-header">
            <span className="overline">Exclusive Access</span>
            <h2>At Your Command</h2>
            <p>Our network of contacts across Rishikesh ensures you experience the region exactly as you wish.</p>
          </div>
          <div className={styles.servicesGrid}>
            {conciergeServices.map(s => (
              <div key={s.title} className={styles.serviceBox}>
                <span className={styles.serviceIcon}>{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="celebrations">
        <div className="container">
          <div className={styles.celebrationGrid}>
            <div className={styles.celebrationContent}>
              <span className={styles.overline} style={{ color: 'var(--gold-300)' }}>Special Occasions</span>
              <h2 style={{ color: 'var(--cream)'}}>Celebrate Life's Milestones</h2>
              <hr className="gold-divider gold-divider-left" />
              <p style={{ color: 'var(--light-gray)'}}>
                Planning an anniversary, a surprise proposal, or a milestone birthday? 
                Allow our Concierge and Events team to orchestrate every detail. 
                From filling a suite with thousands of red roses to securing a private dining 
                room at a Michelin-starred restaurant, we transform celebrations into lifelong memories.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Plan an Event
              </Link>
            </div>
            <div className={styles.celebrationQuote}>
              <blockquote>
                "The concierge team arranged a private after-hours tour of the Churchill War Rooms for my husband's 50th birthday. An absolute triumph."
              </blockquote>
              <cite>— The Sterling Family</cite>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
