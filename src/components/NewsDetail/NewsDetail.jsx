import styles from "./NewsDetail.module.css";
import Header from "../Header/Header";
import arrowIcon from "../../assets/arrow-right.svg";
import heroImage from "../../assets/news1.jpg";
import dateFrame from "../../assets/date-frame.svg";
import viewsFrame from "../../assets/views-frame.svg";
import shareNews from "../../assets/share-news.svg";

export default function NewsDetail() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.content}>
        <h1 className={styles.heading}>
          IFL Qran-prinin ilk turunun çəki mərasimi baş tutub.
        </h1>

        <div className={styles.divider} />

        <div className={styles.metaRow}>
          <img
            src={dateFrame}
            alt="Tarix"
            className={styles.metaIcon}
          />
          <img
            src={viewsFrame}
            alt="Baxış sayı"
            className={styles.metaIcon}
          />
          <img
            src={shareNews}
            alt="Xəbəri paylaşın"
            className={styles.shareIcon}
          />
        </div>

        <div className={styles.body}>
          <p>
            4 döyüşdən sonra qalib gələn idmançılar yarımfinala addımladı. Bu
            mərhələdə döyüşlər olduqca hərarətli keçdi.
          </p>
          <p>
            Turun seçilmiş döyüşü Denis məlikov və Amil Mustafayev arasında oldu.
            Gecənin performansı əzmkarlığı ilə seçilən Yusif Əliyevin aktivinə
            yazıldı.
          </p>
          <p>
            Nəzərinizə çatdıraq ki, tədbir CBC Sport kanalı vasitəsilə canlı
            yayımlanır.
          </p>
          <p>Yarımfinal və Final mərhələsi 10 sentyabrda keçiriləcək.</p>
        </div>

        <section className={styles.media}>
          <div className={styles.mediaHeader}>
            <h2 className={styles.mediaTitle}>1/16 IFL Grand Prix</h2>
          </div>

          <div className={styles.mediaFrame}>
            <img src={heroImage} alt="1/16 IFL Grand Prix" className={styles.heroImage} />

            <div className={styles.controls}>
              <button
                type="button"
                className={`${styles.controlButton} ${styles.controlPrev}`}
                aria-label="Previous"
              >
                <img src={arrowIcon} alt="" aria-hidden className={styles.controlIconLeft} />
              </button>
              <button
                type="button"
                className={styles.controlButton}
                aria-label="Next"
              >
                <img src={arrowIcon} alt="" aria-hidden className={styles.controlIcon} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
