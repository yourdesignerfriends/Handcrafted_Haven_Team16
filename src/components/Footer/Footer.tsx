import styles from "./Footer.module.css";

const columns = [
  {
    heading: "Shop",
    links: ["Ceramics", "Textiles", "Jewelry", "Woodwork"],
  },
  {
    heading: "Company",
    links: ["About", "How it works", "Artisans", "Contact"],
  },
  {
    heading: "Account",
    links: ["Sign in", "Register", "Seller dashboard"],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo}>
            <span aria-hidden="true">✿</span> Handcrafted Haven
          </a>
          <p className={styles.tagline}>
            A marketplace for people who make things by hand.
          </p>
        </div>

        <nav className={styles.cols} aria-label="Footer">
          {columns.map((col) => (
            <div key={col.heading} className={styles.col}>
              <h3 className={styles.colHeading}>{col.heading}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        {/* TODO: replace with your team's real names */}
        <p>&copy; 2026 Handcrafted Haven. Built by Team 16.</p>
        <p className={styles.small}>WDD 430 · BYU-Idaho</p>
      </div>
    </footer>
  );
}
