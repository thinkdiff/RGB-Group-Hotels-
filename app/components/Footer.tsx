import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="site-footer">
      {/* Top band */}
      <div className={styles.topBand}>
        <div className="container">
          <div className={styles.topGrid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.logo}>
                <span className={styles.logoIcon}>✦</span>
                <div>
                  <span className={styles.logoName}>The RBGm</span>
                  <span className={styles.logoSub}>RISHIKESH</span>
                </div>
              </div>
              <p className={styles.tagline}>
                Voted one of Rishikesh&rsquo;s finest luxury resorts. 
                Where natural beauty meets modern sophistication.
              </p>
              <div className={styles.socials}>
                {["Instagram", "Facebook", "X", "LinkedIn"].map((s) => (
                  <span key={s} className={styles.socialLink} aria-label={s}>
                    {s[0]}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.column}>
              <h4>Experience</h4>
              <Link href="/rooms">Rooms & Suites</Link>
              <Link href="/dining">Fine Dining</Link>
              <Link href="/spa">Spa & Wellness</Link>
              <Link href="/concierge">Concierge</Link>
              <Link href="/guest-services">Guest Services</Link>
            </div>

            <div className={styles.column}>
              <h4>Services</h4>
              <Link href="/concierge">Airport Transfers</Link>
              <Link href="/concierge">Event Planning</Link>
              <Link href="/guest-services">Business Centre</Link>
              <Link href="/rooms">Pet-Friendly Stays</Link>
              <Link href="/contact">Loyalty Programme</Link>
            </div>

            <div className={styles.column}>
              <h4>Contact</h4>
              <p>2.5 Ahead from Shivpuri police station</p>
              <p>wine Shop kathiya village</p>
              <p>Shivpuri Rishikesh - 249192</p>
              <p>+91-9457141414</p>
              <p>shivam@rbghotels.com</p>
              <Link href="/contact" className={`btn btn-secondary ${styles.footerCta}`}>
                Book Your Stay
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p>&copy; {new Date().getFullYear()} The RBGm Rishikesh. All rights reserved.</p>
            <div className={styles.bottomLinks}></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
