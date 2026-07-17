import styles from "./HowItWorks.module.css";

const steps = [
  {
    n: "01",
    title: "Discover",
    text: "Search and filter by craft, price, or maker until a piece catches your eye.",
  },
  {
    n: "02",
    title: "Connect",
    text: "Read the maker's story and honest reviews from people who bought before you.",
  },
  {
    n: "03",
    title: "Own",
    text: "Buy directly from the artisan and give a handmade piece a new home.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="how-title">
      <div className="container">
        <h2 id="how-title" className={styles.title}>
          From &ldquo;oh, nice&rdquo; to owning it
        </h2>

        <ol className={styles.steps}>
          {steps.map((s) => (
            <li key={s.n} className={styles.step}>
              <span className={styles.num} aria-hidden="true">
                {s.n}
              </span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
