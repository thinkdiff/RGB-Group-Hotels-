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
                  <a key={s} href="#" className={styles.socialLink} aria-label={s}>
                    {s[0]}
                  </a>
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
              <a href="#">Airport Transfers</a>
              <a href="#">Event Planning</a>
              <a href="#">Business Centre</a>
              <a href="#">Pet-Friendly Stays</a>
              <a href="#">Loyalty Programme</a>
            </div>

            <div className={styles.column}>
              <h4>Contact</h4>
              <p>2.5 Ahead from Shivpuri police station</p>
              <p>wine Shop kathiya village</p>
              <p>Shivpuri Rishikesh - 249192</p>
              <p>+91 98765 43210</p>
              <p>reservations@aurariverresort.co.in</p>
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
            <div className={styles.bottomLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
