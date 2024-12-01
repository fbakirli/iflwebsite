import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "../NewsPage/NewsPage.module.css";
import arrowIcon from "../../assets/arrow-right.svg";
import newsImage1 from "../../assets/news1.jpg";
import newsImage2 from "../../assets/news2.jpg";
import newsImage3 from "../../assets/news3.jpg";

const newsItems = [
  {
    id: 1,
    title: "IFL Qran-prinin 1/4 final mərhələsinin çəki mərasimi keçirilib.",
    category: "Yarışlar",
    image: newsImage1,
  },
  {
    id: 2,
    title: "IFL Qran-prinin 1/4 final mərhələsinin çəki mərasimi",
    category: "Yarışlar",
    image: newsImage2,
  },
  {
    id: 3,
    title: "IFL Qran-prinin 1/4 final mərhələsinin çəki mərasimi keçirilib.",
    category: "Yarışlar",
    image: newsImage3,
  },
];

export default function NewsFullPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.content}>
        <div className={styles.headerRow}>
          <h1 className={styles.heading}>Latest News</h1>
        </div>

        <NewsGrid items={newsItems} navigate={navigate} />

        <FeatureRow image={newsImage1} reversed={false} />

        <NewsGrid items={newsItems} navigate={navigate} />

        <FeatureRow image={newsImage2} reversed />
      </main>

      <Footer />
    </div>
  );
}

function NewsGrid({ items, navigate }) {
  return (
    <div className={styles.cards}>
      {items.map((item) => (
        <article key={item.id} className={styles.card}>
          <div
            className={styles.image}
            role="img"
            aria-label={item.title}
            style={{ backgroundImage: `url(${item.image})` }}
          />

          <div className={styles.body}>
            <span className={styles.category}>{item.category}</span>
            <h3 className={styles.title}>{item.title}</h3>
          </div>

          <button
            type="button"
            className={styles.arrowButton}
            onClick={item.id === 1 ? () => navigate(`/news/${item.id}`) : undefined}
            aria-disabled={item.id !== 1}
            aria-label={`Read more about ${item.title}`}
          >
            <img src={arrowIcon} alt="" aria-hidden className={styles.arrowIcon} />
          </button>
        </article>
      ))}
    </div>
  );
}

function FeatureRow({ image, reversed = false }) {
  return (
    <section className={`${styles.featureRow} ${reversed ? styles.featureRowReversed : ""}`}>
      <div className={styles.featureImage} style={{ backgroundImage: `url(${image})` }} />

      <div className={styles.featureContent}>
        <span className={styles.featureCategory}>Yarışlar</span>
        <h3 className={styles.featureTitle}>
          IFL Qran-Prinin 1/4 final mərhələsinin çəki mərasimi keçirilib.
        </h3>
        <button type="button" className={styles.featureButton} aria-label="Read more">
          <img src={arrowIcon} alt="" aria-hidden className={styles.featureButtonIcon} />
        </button>
      </div>
    </section>
  );
}
