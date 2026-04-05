import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Spa & Wellness | Aura River Resort",
  description:
    "Restore and rejuvenate at The Resort Spa. Featuring bespoke treatments and holistic wellness.",
};

const treatments = [
  {
    name: "Signature Golden Radiance Facial",
    duration: "90 Minutes",
    price: "£220",
    desc: "A luxurious anti-aging treatment using 24k gold leaf and botanicals to restore youth and luminosity to the skin.",
  },
  {
    name: "Deep Tissue Muscle Recovery",
    duration: "60 / 90 Minutes",
    price: "£150 / £200",
    desc: "Targeted deep pressure massage to relieve severe tension and heal stressed muscles. Ideal for post-travel recovery.",
  },
  {
    name: "Couples Retreat Package",
    duration: "120 Minutes",
    price: "£450 (for two)",
    desc: "A romantic escape featuring a synchronized massage, private steam shower access, and complimentary champagne and truffles.",
  },
  {
    name: "Pre-Natal Nurture Therapy",
    duration: "60 Minutes",
    price: "£140",
    desc: "A comforting and highly restorative treatment designed specifically for expectant mothers to alleviate fatigue and promote calm.",
  },
];

export default function SpaPage() {
  return (
    <>
      <Navbar />

      <section className={styles.pageHero} id="spa-hero">
        <Image src="/spa-v2.jpg" alt="The Resort Spa Pool" fill quality={90} className={styles.heroImg} />
        <div className={styles.pageHeroOverlay} />
        <div className={styles.pageHeroContent}>
          <span className={styles.overline}>The Resort Spa</span>
          <h1>An Oasis of Tranquillity</h1>
          <p>
            Immerse yourself in serenity. Our spa offers a holistic 
            approach to wellbeing right in the lap of nature.
          </p>
        </div>
      </section>

      <section className="section" id="spa-facilities">
        <div className="container">
          <div className={styles.facilitiesGrid}>
            <div className={styles.facilityText}>
              <span className="overline">Facilities</span>
              <h2>Wellness Redefined</h2>
              <hr className="gold-divider gold-divider-left" />
              <p>
                Spanning across a tranquil valley, The Resort Spa provides an exceptional 
                array of facilities designed to completely restore mind and body. 
                Complimentary access is provided for all resort guests.
              </p>
              <ul className={styles.featureList}>
                <li>20-metre heated indoor infinity pool</li>
                <li>Himalayan salt sauna & eucalyptus steam room</li>
                <li>Ice fountain & vitality plunge pools</li>
                <li>Six private treatment suites</li>
                <li>Deep-relaxation lounge with organic teas</li>
                <li>24-hour state-of-the-art Technogym fitness centre</li>
              </ul>
              <div className={styles.hoursBox}>
                <h4>Opening Hours</h4>
                <div className={styles.hoursRow}>
                  <span>Spa Treatments:</span>
                  <span>9:00 AM – 9:00 PM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Pool & Thermal Suite:</span>
                  <span>6:00 AM – 10:00 PM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Fitness Centre:</span>
                  <span>24 Hours</span>
                </div>
              </div>
            </div>
            <div className={styles.facilityImageWrap}>
              <Image src="/spa-v2.jpg" alt="Spa Facilities" fill className={styles.facilityImage} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream" id="spa-treatments">
        <div className="container">
          <div className="section-header">
            <span className="overline">Treatments</span>
            <h2>Curated Therapies</h2>
            <p>Our expert therapists utilize the world's finest skincare to create profoundly transformative experiences.</p>
          </div>
          <div className={styles.treatmentsList}>
            {treatments.map((t) => (
              <div key={t.name} className={styles.treatmentCard}>
                <div className={styles.treatmentHeader}>
                  <h3>{t.name}</h3>
                  <span className={styles.treatmentPrice}>{t.price}</span>
                </div>
                <span className={styles.treatmentDuration}>{t.duration}</span>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/contact" className="btn btn-primary">Book an Appointment</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
