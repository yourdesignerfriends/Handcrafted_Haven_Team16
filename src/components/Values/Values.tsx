import styles from "./Values.module.css";

const values = [
  {
    title: "Straight from the source",
    text: "Every sale goes to the artisan who made the piece — no middleman markup.",
  },
  {
    title: "One of a kind",
    text: "No mass production. If you see something you love, it may be the only one.",
  },
  {
    title: "Kinder by design",
    text: "Made in small batches, from real materials, and built to be used for years.",
  },
];

export default function Values() {
  return (
    <section className={styles.section} aria-labelledby="values-title">
      <div className="container">
        <h2 id="values-title" className={styles.srOnly}>
          Why Handcrafted Haven
        </h2>
        <ul className={styles.grid}>
          {values.map((v) => (
            <li key={v.title} className={styles.item}>
              <span className={styles.rule} aria-hidden="true" />
              <h3 className={styles.itemTitle}>{v.title}</h3>
              <p className={styles.itemText}>{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
