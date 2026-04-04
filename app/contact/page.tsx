"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <section className={styles.pageHero} id="contact-hero">
        <Image src="/exterior.png" alt="The RBGm London Entrance" fill quality={90} className={styles.heroImg} />
        <div className={styles.pageHeroOverlay} />
        <div className={styles.pageHeroContent}>
          <span className={styles.overline}>Contact & Reservations</span>
          <h1>We Look Forward to Welcoming You</h1>
          <p>
            Whether you are planning a future stay, have a question about an existing reservation, 
            or wish to arrange a special request, our team is at your disposal.
          </p>
        </div>
      </section>

      <section className="section" id="contact-details">
        <div className="container">
          <div className={styles.contactContainer}>
            
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <div className="section-header" style={{ textAlign: "left", marginBottom: "2rem" }}>
                <span className="overline">Get in Touch</span>
                <h2>Contact Information</h2>
                <hr className="gold-divider gold-divider-left" />
              </div>

              <div className={styles.infoBlocks}>
                <div className={styles.infoBlock}>
                  <h4>Address</h4>
                  <p>The RBGm London<br />1 Mayfair Place<br />London, W1K 2AL<br />United Kingdom</p>
                </div>

                <div className={styles.infoBlock}>
                  <h4>Reservations</h4>
                  <p>Phone: +44 (0)20 7946 0958<br />Email: reservations@rbgm-london.com</p>
                </div>

                <div className={styles.infoBlock}>
                  <h4>Concierge</h4>
                  <p>Phone: +44 (0)20 7946 0959<br />Email: concierge@rbgm-london.com</p>
                </div>

                <div className={styles.infoBlock}>
                  <h4>Events & Dining</h4>
                  <p>Phone: +44 (0)20 7946 0960<br />Email: events@rbgm-london.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactFormWrapper}>
              <div className={styles.formCard}>
                <h3>Send an Enquiry</h3>
                <p>Complete the form below and a member of our team will assist you shortly.</p>
                
                {formStatus === "success" ? (
                  <div className={styles.successMessage}>
                    <span className={styles.successIcon}>✓</span>
                    <h4>Thank You</h4>
                    <p>Your enquiry has been received. Our reservations team will contact you within 24 hours.</p>
                    <button className="btn btn-secondary" onClick={() => setFormStatus("idle")}>
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="firstName">First Name *</label>
                        <input type="text" id="firstName" required />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="lastName">Last Name *</label>
                        <input type="text" id="lastName" required />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address *</label>
                        <input type="email" id="email" required />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="subject">Subject / Enquiry Type *</label>
                      <select id="subject" required>
                        <option value="">Please select...</option>
                        <option value="reservation">Room Reservation</option>
                        <option value="dining">Dining Reservation</option>
                        <option value="concierge">Concierge Request</option>
                        <option value="events">Meetings & Events</option>
                        <option value="other">Other Enquiry</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message">Message *</label>
                      <textarea id="message" rows={5} required></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className={`btn btn-primary ${styles.submitBtn}`}
                      disabled={formStatus === "submitting"}
                    >
                      {formStatus === "submitting" ? "Sending..." : "Submit Enquiry"}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
