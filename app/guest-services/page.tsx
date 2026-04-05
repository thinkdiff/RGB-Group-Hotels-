import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";
import { Mail, Key, Clock, Luggage, Plane, Sun, BellRing, Utensils, Shirt, Wifi, Wine, Landmark, Car, Ticket, Hospital, PartyPopper, MessageSquare, Globe, Search, Carrot } from "lucide-react";

export const metadata = {
  title: "Guest Services | Aura River Resort",
  description:
    "Comprehensive guest services at Aura River Resort — welcome messages, weather updates, dining recommendations, transportation, event planning, and more.",
};

const guestServices = [
  {
    category: "Arrival & Departure",
    items: [
      {
        title: "Welcome Message",
        desc: "Every guest receives a personalised welcome letter upon check-in, along with a complimentary glass of champagne and a curated guide to the week's events.",
        icon: <Mail />,
      },
      {
        title: "Check-in Assistance",
        desc: "Our reception team guides you through a seamless check-in experience. Express check-in is available for returning guests and Prestige Club members.",
        icon: <Key />,
      },
      {
        title: "Check-out Information",
        desc: "Standard check-out is at 11:00 AM. Late check-out until 3:00 PM is complimentary for Prestige Club members. Express check-out is available via in-room television.",
        icon: <Clock />,
      },
      {
        title: "Luggage Storage",
        desc: "Complimentary luggage storage for early arrivals and late departures. Our porters will deliver luggage to your room when ready.",
        icon: <Luggage />,
      },
      {
        title: "Airport Transfer",
        desc: "Private driver transfers from all nearby airports/stations. Safaris and family-sized vehicles available.",
        icon: <Plane />,
      },
    ],
  },
  {
    category: "Daily Services",
    items: [
      {
        title: "Weather Update",
        desc: "A daily weather card is placed in your room each morning, helping you plan the perfect day in Rishikesh.",
        icon: <Sun />,
      },
      {
        title: "Wake-up Call",
        desc: "Set wake-up calls through your in-room phone, television, or simply request via our concierge. Fresh coffee or tea delivery available.",
        icon: <BellRing />,
      },
      {
        title: "Room Service",
        desc: "24-hour room service featuring our full à la carte menu. Special dietary requirements are always accommodated with advance notice.",
        icon: <Utensils />,
      },
      {
        title: "Laundry & Pressing",
        desc: "Same-day laundry and dry-cleaning service with collection before 10:00 AM. Express 2-hour pressing also available.",
        icon: <Shirt />,
      },
      {
        title: "Wi-Fi Access",
        desc: "Complimentary high-speed Wi-Fi throughout the hotel. Our tech concierge can assist with connectivity or in-room device setup.",
        icon: <Wifi />,
      },
    ],
  },
  {
    category: "Local & Information",
    items: [
      {
        title: "Local Dining Recommendations",
        desc: "Our concierge curates personalised dining recommendations based on your preferences — from local organic food to family-friendly cafés.",
        icon: <Wine />,
      },
      {
        title: "Local Attractions",
        desc: "Triveni Ghat, Neer Garh Waterfall, and more. We arrange private tours and bespoke itineraries.",
        icon: <Landmark />,
      },
      {
        title: "Transportation Options",
        desc: "Safari jeeps, private drivers, or bicycle hire — we arrange your preferred way to explore Rishikesh.",
        icon: <Car />,
      },
      {
        title: "Cultural Events",
        desc: "Weekly cultural calendar featuring theatre, exhibitions, concerts, and seasonal markets curated by our team.",
        icon: <Ticket />,
      },
      {
        title: "Emergency Contacts",
        desc: "24-hour front desk assistance. We maintain relationships with leading local medical providers, pharmacies, and emergency services.",
        icon: <Hospital />,
      },
    ],
  },
  {
    category: "Special Requests",
    items: [
      {
        title: "Event Planning",
        desc: "Our events team specialises in weddings, corporate gatherings, birthday celebrations, and intimate private dinners in our exclusive venues.",
        icon: <PartyPopper />,
      },
      {
        title: "Guest Feedback",
        desc: "We welcome your feedback at any point during your stay. Speak with our Guest Relations Manager or complete our in-room feedback card.",
        icon: <MessageSquare />,
      },
      {
        title: "Language Translation",
        desc: "Our multilingual team speaks 12 languages. Translation services and printed materials in your preferred language available upon request.",
        icon: <Globe />,
      },
      {
        title: "Lost & Found",
        desc: "Items can be reported at reception or by calling our dedicated lost property line. We post recovered items worldwide.",
        icon: <Search />,
      },
      {
        title: "Special Dietary Requirements",
        desc: "Vegan, vegetarian, halal, kosher, gluten-free, and allergy-specific menus available across all dining outlets with advance notice.",
        icon: <Carrot />,
      },
    ],
  },
];

export default function GuestServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={styles.pageHero} id="guest-services-hero">
        <div className={styles.pageHeroOverlay} />
        <div className={styles.pageHeroContent}>
          <span className={styles.overline}>Guest Services</span>
          <h1>At Your Service, Always</h1>
          <p>
            From the warmth of your welcome to the ease of your departure,
            every detail is thoughtfully attended to by our dedicated team.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      {guestServices.map((cat) => (
        <section key={cat.category} className={`section ${styles.serviceSection}`}>
          <div className="container">
            <div className={styles.catHeader}>
              <h2>{cat.category}</h2>
              <hr className="gold-divider gold-divider-left" />
            </div>
            <div className={styles.servicesGrid}>
              {cat.items.map((item) => (
                <div
                  key={item.title}
                  className={`card ${styles.serviceItem}`}
                  id={`gs-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span className={styles.itemIcon}>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Quick-contact CTA */}
      <section className={`section section-dark`} id="gs-cta">
        <div className="container" style={{ textAlign: "center" }}>
          <span className={styles.overline} style={{ color: "var(--gold-300)" }}>
            Need Assistance?
          </span>
          <h2 style={{ color: "var(--cream)", maxWidth: 600, margin: "0.5rem auto" }}>
            Our concierge team is available 24 hours a day
          </h2>
          <p style={{ margin: "1rem auto", color: "var(--light-gray)" }}>
            Call extension 0 from your room, dial +91 98765 43210, or
            simply visit our reception desk.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
