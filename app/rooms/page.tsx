import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Rooms & Suites | The RBGm London",
  description:
    "Discover our exquisitely appointed rooms and suites at The RBGm London — from Deluxe Rooms to the Royal Penthouse, each featuring marble bathrooms, Egyptian cotton linens, and panoramic London views.",
};

const rooms = [
  {
    name: "Deluxe Room",
    size: "35 sqm",
    price: "From £450/night",
    features: [
      "King or twin beds",
      "City garden view",
      "Marble en-suite bathroom",
      "In-room safe & minibar",
      "Nespresso machine",
    ],
    image: "/room.png",
  },
  {
    name: "Premier Suite",
    size: "55 sqm",
    price: "From £750/night",
    features: [
      "Separate living area",
      "Parliament or Thames view",
      "Walk-in rain shower & soaking tub",
      "Butler service on request",
      "Complimentary afternoon tea",
    ],
    image: "/room.png",
  },
  {
    name: "Family Suite",
    size: "70 sqm",
    price: "From £950/night",
    features: [
      "Inter-connecting rooms",
      "Children's welcome amenities",
      "Baby cot & high chair available",
      "Private dining table for 6",
      "Pet-friendly upon request",
    ],
    image: "/room.png",
  },
  {
    name: "Royal Penthouse",
    size: "150 sqm",
    price: "From £3,500/night",
    features: [
      "Private terrace with panoramic views",
      "Grand piano & fireplace",
      "Dedicated 24-hour butler",
      "Private dining room for 12",
      "Chauffeur-driven Rolls-Royce",
    ],
    image: "/room.png",
  },
];

const roomServices = [
  { icon: "🌡️", label: "Temperature Control", desc: "Personalised room temperature adjustable at any time via in-room tablet or by calling reception." },
  { icon: "🛏️", label: "Pillow Menu", desc: "Choose from 8 pillow types including memory foam, buckwheat, goose down, and hypoallergenic options." },
  { icon: "🎨", label: "Room Décor Requests", desc: "Celebrate special occasions with rose petals, candles, balloons, or bespoke floral arrangements." },
  { icon: "🐾", label: "Pet-Friendly Suites", desc: "Select suites welcome well-behaved pets with beds, bowls, treats, and a pet-sitting service available." },
  { icon: "💻", label: "In-Room Tech", desc: "55-inch smart TV, Bluetooth speaker, USB charging, and complimentary high-speed Wi-Fi throughout." },
  { icon: "🔒", label: "Late Check-out", desc: "Subject to availability. Guaranteed until 3:00 PM for Prestige Club members." },
];

export default function RoomsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={styles.pageHero} id="rooms-hero">
        <Image src="/room.png" alt="Luxury suite" fill quality={85} className={styles.heroImg} />
        <div className={styles.pageHeroOverlay} />
        <div className={styles.pageHeroContent}>
          <span className={styles.overline}>Rooms & Suites</span>
          <h1>Your Private Sanctuary</h1>
          <p>
            120 exquisitely appointed rooms and suites, each a masterpiece
            of British elegance with modern comforts and breathtaking London views.
          </p>
        </div>
      </section>

      {/* Room Cards */}
      <section className="section" id="room-types">
        <div className="container">
          <div className="section-header">
            <span className="overline">Accommodation</span>
            <h2>Choose Your Experience</h2>
            <p>Every room tells a story of craftsmanship and comfort.</p>
          </div>
          <div className={styles.roomsGrid}>
            {rooms.map((r) => (
              <div key={r.name} className={styles.roomCard} id={`room-${r.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className={styles.roomImageWrap}>
                  <Image src={r.image} alt={r.name} width={600} height={400} quality={80} className={styles.roomImage} />
                  <span className={styles.roomPrice}>{r.price}</span>
                </div>
                <div className={styles.roomInfo}>
                  <div className={styles.roomHeader}>
                    <h3>{r.name}</h3>
                    <span className={styles.roomSize}>{r.size}</span>
                  </div>
                  <ul className={styles.roomFeatures}>
                    {r.features.map((f) => (
                      <li key={f}>✦ {f}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                    Reserve
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Services */}
      <section className="section section-cream" id="room-services">
        <div className="container">
          <div className="section-header">
            <span className="overline">Room Services</span>
            <h2>Every Comfort, Considered</h2>
          </div>
          <div className="grid-3">
            {roomServices.map((s) => (
              <div key={s.label} className={`card ${styles.rsCard}`}>
                <span style={{ fontSize: "2rem" }}>{s.icon}</span>
                <h4>{s.label}</h4>
                <p style={{ fontSize: "0.9rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="section section-dark" style={{ textAlign: "center" }} id="upgrade-cta">
        <div className="container">
          <span className={styles.overline} style={{ color: "var(--gold-300)" }}>Room Upgrades</span>
          <h2 style={{ color: "var(--cream)", maxWidth: 600, margin: "0.5rem auto" }}>
            Interested in an Upgrade?
          </h2>
          <p style={{ margin: "1rem auto", color: "var(--light-gray)", maxWidth: 550 }}>
            Speak with our reception team about available upgrades upon arrival
            or contact us in advance for guaranteed availability.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ marginTop: "1rem" }}>
            Enquire About Upgrades
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
