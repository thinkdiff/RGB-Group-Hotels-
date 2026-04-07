"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // IMPORTANT: Replace this with your Google Apps Script Web App URL
  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwhWmWYJLeSvTmBF5cx5G4ijxX8HCEMvNnuAfMyTfpQAz2wGZFlZ7A0pQuvNJ2V7Acm/exec";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // With no-cors, we can't see the response body, but we assume success if no error is thrown
      setFormStatus("success");
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus("error");
      setErrorMessage("Something went wrong. Please try again or contact us directly.");
    }
  };

  return (
    <>
      <Navbar />

      <section className={styles.pageHero} id="contact-hero">
        <Image src="/exterior-v2.jpg" alt="Aura River Resort Entrance" fill quality={90} className={styles.heroImg} />
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
                  <p>Aura River Resort<br />2.5 Ahead from Shivpuri police station<br />wine Shop kathiya village<br />Shivpuri Rishikesh - 249192</p>
                </div>

                <div className={styles.infoBlock}>
                  <h4>Reservations</h4>
                  <p>Phone: +91-9457141414<br />Email: shivam@rbghotels.com</p>
                </div>

                <div className={styles.infoBlock}>
                  <h4>Concierge</h4>
                  <p>Phone: +91-9760141414<br />Email: shivam@rbghotels.com</p>
                </div>

                <div className={styles.infoBlock}>
                  <h4>Events & Dining</h4>
                  <p>Phone: +91-7078141414<br />Email: shivam@rbghotels.com</p>
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
                    {formStatus === "error" && (
                      <div className={styles.errorMessage} style={{ color: "red", marginBottom: "1rem" }}>
                        {errorMessage}
                      </div>
                    )}
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="firstName">First Name *</label>
                        <input type="text" id="firstName" name="firstName" required />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="lastName">Last Name *</label>
                        <input type="text" id="lastName" name="lastName" required />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address *</label>
                        <input type="email" id="email" name="email" required />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="subject">Subject / Enquiry Type *</label>
                      <select id="subject" name="subject" required>
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
                      <textarea id="message" name="message" rows={5} required></textarea>
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
