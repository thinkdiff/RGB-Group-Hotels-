"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./page.module.css";
import {
  Bell, Hotel, Utensils, Droplets, Compass, PartyPopper,
  Waves, Sparkles, Dumbbell, Car, Wifi, Briefcase, Shirt, PawPrint
} from "lucide-react";

/* ---------- data ---------- */

const services = [
  {
    icon: <Bell />,
    title: "Guest Services",
    desc: "Welcome messages, weather updates, wake-up calls, check-in & check-out assistance — personalised for every guest.",
    href: "/guest-services",
  },
  {
    icon: <Hotel />,
    title: "Rooms & Suites",
    desc: "Elegant upgrades, climate control, bespoke décor, pet-friendly suites, and in-room tech concierge.",
    href: "/rooms",
  },
  {
    icon: <Utensils />,
    title: "Fine Dining",
    desc: "Michelin-starred restaurant, 24-hour room service, late-night menus, dietary accommodations & local recommendations.",
    href: "/dining",
  },
  {
    icon: <Droplets />,
    title: "Spa & Wellness",
    desc: "Award-winning spa, heated pool, fitness centre, and personalised treatment programmes.",
    href: "/spa",
  },
  {
    icon: <Compass />,
    title: "Concierge",
    desc: "Airport transfers, restaurant reservations, event planning, theatre tickets, cultural tours and bespoke experiences.",
    href: "/concierge",
  },
  {
    icon: <PartyPopper />,
    title: "Celebrations",
    desc: "Anniversary, birthday or special-occasion planning with personalised greetings, décor, and curated menus.",
    href: "/concierge",
  },
];

const amenities = [
  { icon: <Waves />, label: "Heated Pool" },
  { icon: <Sparkles />, label: "Luxury Spa" },
  { icon: <Dumbbell />, label: "Fitness Centre" },
  { icon: <Car />, label: "Valet Parking" },
  { icon: <Wifi />, label: "High-Speed Wi-Fi" },
  { icon: <Briefcase />, label: "Business Centre" },
  { icon: <Shirt />, label: "Laundry & Pressing" },
  { icon: <PawPrint />, label: "Pet Friendly" },
];

const testimonials = [
  {
    quote:
      "From the moment our family arrived, we felt like royalty. The concierge arranged a private Thames cruise for our anniversary — utterly unforgettable.",
    author: "Victoria & James Harrington",
    detail: "Family Stay, December 2025",
  },
  {
    quote:
      "The nature programme was exceptional. Our kids were entertained with curated local tours while we enjoyed the spa. Truly a five-star family experience.",
    author: "The Patel Family",
    detail: "Family Holiday, March 2026",
  },
  {
    quote:
      "Impeccable service, breathtaking room views of the Himalayas, and the finest evening tea I've had in Rishikesh. Five years running as the best — well deserved.",
    author: "Catherine Whitmore",
    detail: "Weekend Retreat, January 2026",
  },
];

/* ---------- component ---------- */

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroOverlay} />
        <Image
          src="/hero-lobby-v2.jpg"
          alt="Aura River Resort"
          fill
          priority
          quality={90}
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <span className={`${styles.heroBadge} animate-fade-in-up`}>
            ★ Voted Rishikesh&rsquo;s Finest Resort
          </span>
          <h1 className="animate-fade-in-up delay-1">
            Welcome to <br />
            <em>Aura River Resort</em>
          </h1>
          <p className="animate-fade-in-up delay-2">
            A sanctuary of natural elegance in the heart of Shivpuri.
            Experience luxury cottages, world-class dining, and the warmest
            hospitality that connects you with nature.
          </p>
          <div className={`${styles.heroCtas} animate-fade-in-up delay-3`}>
            <Link href="/contact" className="btn btn-primary">
              Reserve Your Stay
            </Link>
            <Link href="/guest-services" className="btn btn-white">
              Explore Services
            </Link>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span>Scroll to discover</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ===== WELCOME MESSAGE ===== */}
      <section className={`section ${styles.welcome}`} id="welcome">
        <div className="container">
          <div className={styles.welcomeGrid}>
            <div className={styles.welcomeText}>
              <span className={styles.overline}>A Message from the General Manager</span>
              <h2>
                Dear valued guests,<br /> welcome home.
              </h2>
              <hr className="gold-divider gold-divider-left" />
              <p>
                On behalf of our entire team here at Aura River Resort, it is my
                personal pleasure to welcome you and your family. For over five
                glorious years, we have had the privilege of being recognised as
                one of Rishikesh&rsquo;s finest luxury resorts — and that honour
                begins and ends with you.
              </p>
              <p>
                Whether you are joining us for a family holiday, a special
                celebration, or a restful retreat, our
                dedicated team is here to ensure every moment of your stay is
                nothing short of extraordinary.
              </p>
              <p>
                Please do not hesitate to reach out to our concierge at any
                hour. We are, quite simply, at your service.
              </p>
              <p className={styles.signature}>
                <em>
                  Warmest regards,
                  <br />
                  <strong>General Manager</strong>
                  <br />
                  Aura River Resort
                </em>
              </p>
            </div>
            <div className={styles.welcomeImage}>
              <Image
                src="/exterior-v2.jpg"
                alt="Aura River Resort exterior"
                width={560}
                height={420}
                quality={85}
                className={styles.welcomeImg}
              />
              <div className={styles.welcomeImageAccent} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="section section-cream" id="services-overview">
        <div className="container">
          <div className="section-header">
            <span className="overline">Our Services</span>
            <h2>Everything You Need, Thoughtfully Curated</h2>
            <p>
              From the moment you arrive until the day you depart, our
              comprehensive guest services ensure complete comfort and
              peace of mind for you and your family.
            </p>
          </div>
          <div className="grid-3">
            {services.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className={`card ${styles.serviceCard} animate-fade-in-up delay-${i + 1}`}
                id={`service-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span className={styles.serviceIcon}>{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className={styles.serviceArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ROOMS PREVIEW ===== */}
      <section className="section" id="rooms-preview">
        <div className="container">
          <div className={styles.splitSection}>
            <div className={styles.splitImage}>
              <Image
                src="/rooms/camps.jpg"
                alt="Luxury cottage with mountain view"
                width={600}
                height={450}
                quality={85}
                className={styles.splitImg}
              />
            </div>
            <div className={styles.splitContent}>
              <span className={styles.overline}>Cottages & Camps</span>
              <h2>Your Private Sanctuary Awaits</h2>
              <hr className="gold-divider gold-divider-left" />
              <p>
                Each of our exquisitely appointed cottages and camps has been
                designed to provide the ultimate in comfort and natural
                elegance, many offering stunning views across the majestic
                Himalayas and the River Ganges.
              </p>
              <ul className={styles.featureList}>
                <li>Egyptian cotton linens & pillow menu</li>
                <li>Marble en-suite bathrooms with heated floors</li>
                <li>Personalised room temperature control</li>
                <li>In-room tech concierge & high-speed Wi-Fi</li>
                <li>Pet-friendly suites available</li>
                <li>Late check-out upon request</li>
              </ul>
              <Link href="/rooms" className="btn btn-primary">
                View Rooms & Suites
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DINING ===== */}
      <section className="section section-dark" id="dining-preview">
        <div className="container">
          <div className={styles.splitSection}>
            <div className={styles.splitContent}>
              <span className={styles.overline} style={{ color: "var(--gold-300)" }}>
                Dining & Culinary
              </span>
              <h2>A Feast for Every Sense</h2>
              <hr className="gold-divider gold-divider-left" />
              <p>
                Our signature restaurant serves
                contemporary cuisine with seasonal ingredients sourced
                from the finest organic farms. Enjoy our legendary buffet, 24-hour
                room service, or let us recommend the best of Rishikesh&rsquo;s
                culinary scene.
              </p>
              <ul className={styles.featureList}>
                <li>Michelin-starred The Amber Room restaurant</li>
                <li>Traditional Afternoon Tea in the Drawing Room</li>
                <li>24-hour room service menu</li>
                <li>Late-night dining until 2:00 AM</li>
                <li>Special dietary accommodations (vegetarian, halal, kosher, gluten-free)</li>
                <li>Local restaurant reservations via concierge</li>
              </ul>
              <Link href="/dining" className="btn btn-secondary" style={{ borderColor: "var(--gold-300)", color: "var(--gold-300)" }}>
                Explore Dining
              </Link>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/dining-v2.jpg"
                alt="Fine dining"
                width={600}
                height={450}
                quality={85}
                className={styles.splitImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPA PREVIEW ===== */}
      <section className="section" id="spa-preview">
        <div className="container">
          <div className={styles.splitSection}>
            <div className={styles.splitImage}>
              <Image
                src="/spa-v2.jpg"
                alt="Resort Spa & Wellness"
                width={600}
                height={450}
                quality={85}
                className={styles.splitImg}
              />
            </div>
            <div className={styles.splitContent}>
              <span className={styles.overline}>Spa & Wellness</span>
              <h2>Restore, Rejuvenate, Revive</h2>
              <hr className="gold-divider gold-divider-left" />
              <p>
                Our award-winning Mayfair Spa offers a tranquil escape with
                bespoke treatment programmes, a 20-metre heated pool, sauna,
                steam room, and a fully equipped fitness centre. Appointments
                can be booked through your concierge or at reception.
              </p>
              <div className={styles.spaHours}>
                <div>
                  <strong>Spa</strong>
                  <span>8:00 AM – 10:00 PM</span>
                </div>
                <div>
                  <strong>Pool</strong>
                  <span>6:30 AM – 9:30 PM</span>
                </div>
                <div>
                  <strong>Fitness</strong>
                  <span>24 Hours</span>
                </div>
              </div>
              <Link href="/spa" className="btn btn-primary">
                Book a Treatment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AMENITIES STRIP ===== */}
      <section className={`section section-cream ${styles.amenities}`} id="amenities-strip">
        <div className="container">
          <div className="section-header">
            <span className="overline">Hotel Amenities</span>
            <h2>Complimentary for Every Guest</h2>
          </div>
          <div className={styles.amenitiesGrid}>
            {amenities.map((a) => (
              <div key={a.label} className={styles.amenityItem}>
                <span className={styles.amenityIcon}>{a.icon}</span>
                <span className={styles.amenityLabel}>{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="overline">Guest Experiences</span>
            <h2>Cherished Moments, Lasting Memories</h2>
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`card ${styles.testimonialCard}`}
                id={`testimonial-${i}`}
              >
                <div className={styles.quoteIcon}>&ldquo;</div>
                <p className={styles.quoteText}>{t.quote}</p>
                <div className={styles.quoteAuthor}>
                  <strong>{t.author}</strong>
                  <span>{t.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAMILY CTA ===== */}
      <section className={`section ${styles.familyCta}`} id="family-cta">
        <div className={styles.familyCtaOverlay} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className={styles.familyCtaContent}>
            <span className={styles.overline} style={{ color: "var(--gold-300)" }}>
              Family-Friendly Luxury
            </span>
            <h2>Bring the Whole Family</h2>
            <p>
              From children&rsquo;s activity programmes and family suites to
              pet-friendly accommodations and adventure activities, Aura River
              Resort is designed to delight guests of every age.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary">
                Plan Your Family Stay
              </Link>
              <Link href="/concierge" className="btn btn-white">
                Speak to Our Concierge
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROMOTIONS BANNER ===== */}
      <section className={`section section-cream ${styles.promoBanner}`} id="promotions">
        <div className="container">
          <div className={styles.promoGrid}>
            <div className={styles.promoCard}>
              <span className={styles.promoTag}>Spring Special</span>
              <h3>Complimentary Afternoon Tea</h3>
              <p>
                Book a stay of two nights or more this April and enjoy our
                renowned traditional afternoon tea, compliments of the house.
              </p>
              <Link href="/contact" className="btn btn-dark">
                Book This Offer
              </Link>
            </div>
            <div className={styles.promoCard}>
              <span className={styles.promoTag}>Loyalty Programme</span>
              <h3>RBGm Prestige Club</h3>
              <p>
                Join our exclusive loyalty programme and enjoy complimentary
                room upgrades, late check-outs, spa credits, and priority
                reservations on every visit.
              </p>
              <Link href="/contact" className="btn btn-dark">
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
