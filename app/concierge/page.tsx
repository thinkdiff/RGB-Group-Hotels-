import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Concierge Services | The RBGm London",
  description:
    "Bespoke concierge services at The RBGm London. Let us arrange theatre tickets, private tours, Chauffeur services, and exclusive London experiences.",
};

const conciergeServices = [
  {
    title: "Chauffeur & Transfers",
    desc: "Arrive in style. We arrange private airport transfers, hourly chauffeur services, and luxury car rentals including our house Rolls-Royce Phantom.",
    icon: "🚘",
  },
  {
    title: "Theatre & Entertainment",
    desc: "Unrivalled access to the West End. We secure premium seating for sold-out shows, ballet, opera, and exclusive London sporting events.",
    icon: "🎫",
  },
  {
    title: "Curated Tours",
    desc: "Discover London through our private guided tours. From historical walks and museum private viewings to helicopter flights over the Thames.",
    icon: "🗺️",
  },
  {
    title: "Restaurant Reservations",
    desc: "Access the inaccessible. Our Concierge maintains close relationships with London's finest dining establishments, securing priority reservations for our guests.",
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
        <Image src="/exterior.png" alt="Concierge arranging a car" fill quality={90} className={styles.heroImg} />
        <div className={styles.pageHeroOverlay} />
        <div className={styles.pageHeroContent}>
          <span className={styles.overline}>Les Clefs d'Or Concierge</span>
          <h1>Mastering the Impossible</h1>
          <p>
            With the golden keys lapel pinned to their uniform, our Concierge team 
            unlocks the very best of London, crafting bespoke itineraries and unforgettable experiences.
          </p>
        </div>
      </section>

      <section className="section" id="concierge-services">
        <div className="container">
          <div className="section-header">
            <span className="overline">Exclusive Access</span>
            <h2>At Your Command</h2>
            <p>Our network of contacts across London ensures you experience the city exactly as you wish.</p>
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
