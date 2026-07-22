import Link from "next/link";
import styles from "./Footer.module.css";

const columns = [
  {
    heading: "Shop",
    links: [
      { label: "Ceramics", href: "/products?category=ceramics" },
      { label: "Textiles", href: "/products?category=textiles" },
      { label: "Jewelry", href: "/products?category=jewelry" },
      { label: "Woodwork", href: "/products?category=woodwork" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Products", href: "/products" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Artisans", href: "/artisans" },
      { label: "Become a seller", href: "/register/artisan" },
    ],
  },
  {
    heading: "Account",
    links: [
      { label: "Sign in", href: "/login" },
      { label: "Register as customer", href: "/register/customer" },
      { label: "Register as artisan", href: "/register/artisan" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span aria-hidden="true">✿</span> Handcrafted Haven
          </Link>
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
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
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
