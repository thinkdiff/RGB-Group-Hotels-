"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/guest-services", label: "Guest Services" },
    { href: "/rooms", label: "Rooms & Suites" },
    { href: "/dining", label: "Dining" },
    { href: "/spa", label: "Spa & Wellness" },
    { href: "/concierge", label: "Concierge" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      id="main-navbar"
    >
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo} id="nav-logo">
          <span className={styles.logoIcon}>✦</span>
          <div className={styles.logoText}>
            <span className={styles.logoName}>The RBGm</span>
            <span className={styles.logoSub}>RISHIKESH</span>
          </div>
        </Link>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
              id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={`btn btn-primary ${styles.navCta}`}>
            Book Now
          </Link>
        </div>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="nav-menu-toggle"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
