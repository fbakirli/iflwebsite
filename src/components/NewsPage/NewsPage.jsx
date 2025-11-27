import styles from "./NewsPage.module.css";
import Header from "../Header/Header";
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

export default function NewsPage({ activePage, onNavigate }) {
  return (
    <div className={styles.page}>
      <Header activePage={activePage} onNavigate={onNavigate} />

      <main className={styles.content}>
        <div className={styles.headerRow}>
          <h1 className={styles.heading}>News</h1>

          <div className={styles.actions}>
            <button type="button" className={styles.primaryButton}>
              <span className={styles.primaryButtonLabel}>daha Ətraflı</span>
              <span className={styles.primaryButtonUnderline} aria-hidden />
            </button>
          </div>
        </div>

        <div className={styles.cards}>
          {newsItems.map((item) => (
            <article key={item.id} className={styles.card}>
              <img src={item.image} alt={item.title} className={styles.image} />

              <div className={styles.body}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.title}>{item.title}</h3>
              </div>

              <button
                type="button"
                className={styles.arrowButton}
                onClick={
                  item.id === 1 ? () => onNavigate?.("newsDetail") : undefined
                }
                aria-disabled={item.id !== 1}
                aria-label={`Read more about ${item.title}`}
              >
                <img src={arrowIcon} alt="" aria-hidden className={styles.arrowIcon} />
              </button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
