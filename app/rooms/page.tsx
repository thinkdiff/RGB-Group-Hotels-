import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";
import { Thermometer, BedDouble, Paintbrush, PawPrint, Monitor, Clock } from "lucide-react";

export const metadata = {
  title: "Cottages & Camps | Aura River Resort",
  description:
    "Discover our exquisitely appointed cottages and camps at Aura River Resort — each offering a unique experience with panoramic views of the Himalayas and the Ganges.",
};

const rooms = [
  {
    name: "Camps",
    size: "20 sqm",
    price: "From ₹3500/night",
    features: [
      "Mountain view",
      "Attached washroom",
      "Invertor backup",
      "Tea/coffee maker",
      "Adventure activity access",
    ],
    image: "/rooms/camps.jpg",
  },
  {
    name: "Wall Cottage Cooler",
    size: "30 sqm",
    price: "From ₹4500/night",
    features: [
      "River view",
      "Air cooler",
      "Private patio",
      "Comfortable bedding",
      "Room service",
    ],
    image: "/rooms/wall-cottage.jpg",
  },
  {
    name: "Premium AC Cottage",
    size: "35 sqm",
    price: "From ₹6500/night",
    features: [
      "Air conditioning",
      "Premium furniture",
      "Ganges view",
      "En-suite bathroom",
      "Mini fridge",
    ],
    image: "/rooms/premium-ac-cottage.jpg",
  },
  {
    name: "Premium Wooden Cottages",
    size: "40 sqm",
    price: "From ₹8000/night",
    features: [
      "Wooden interiors with natural aesthetics",
      "Air conditioning",
      "Spacious balcony overlooking the valley",
      "Luxury toiletries",
      "Complimentary breakfast",
    ],
    image: "/rooms/premium-wooden-cottage.jpg",
  },
  {
    name: "Igloo Cottages",
    size: "25 sqm",
    price: "From ₹5500/night",
    features: [
      "Unique igloo architecture",
      "Air conditioning",
      "Cosy atmosphere",
      "Star-gazing skylight",
      "Private seating area",
    ],
    image: "/rooms/igloo-cottage.jpg",
  },
];

const roomServices = [
  { icon: <Thermometer />, label: "Temperature Control", desc: "Personalised room temperature adjustable at any time via in-room tablet or by calling reception." },
  { icon: <BedDouble />, label: "Pillow Menu", desc: "Choose from 8 pillow types including memory foam, buckwheat, goose down, and hypoallergenic options." },
  { icon: <Paintbrush />, label: "Room Décor Requests", desc: "Celebrate special occasions with rose petals, candles, balloons, or bespoke floral arrangements." },
  { icon: <PawPrint />, label: "Pet-Friendly Suites", desc: "Select suites welcome well-behaved pets with beds, bowls, treats, and a pet-sitting service available." },
  { icon: <Monitor />, label: "In-Room Tech", desc: "55-inch smart TV, Bluetooth speaker, USB charging, and complimentary high-speed Wi-Fi throughout." },
  { icon: <Clock />, label: "Late Check-out", desc: "Subject to availability. Guaranteed until 3:00 PM for Prestige Club members." },
];

export default function RoomsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={styles.pageHero} id="rooms-hero">
        <Image src="/rooms-hero-v2.jpg" alt="Luxury cottage" fill quality={85} className={styles.heroImg} />
        <div className={styles.pageHeroOverlay} />
        <div className={styles.pageHeroContent}>
          <span className={styles.overline}>Cottages & Camps</span>
          <h1>Your Private Sanctuary</h1>
          <p>
            Exquisitely appointed cottages and camps, each a masterpiece
            of natural elegance with modern comforts and breathtaking mountain views.
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
