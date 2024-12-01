import { useState } from "react";
import styles from "./NewsDetail.module.css";
import Header from "../Header/Header";
import NewsPage from "../NewsPage/NewsPage";
import Footer from "../Footer/Footer";
import arrowIcon from "../../assets/arrow-right.svg";
import heroImage from "../../assets/news1.jpg";
import newsImage2 from "../../assets/news2.jpg";
import newsImage3 from "../../assets/news3.jpg";
import videoTime from "../../assets/videotime.svg";
import noiseTexture from "../../assets/c5090d0dee6f871b15ef56fbc835666af3a95ef5.png";
import dateFrame from "../../assets/date-frame.svg";
import viewsFrame from "../../assets/views-frame.svg";
import shareNews from "../../assets/share-news.svg";

const mediaSlides = [
  { src: heroImage, alt: "1/16 IFL Grand Prix weigh-in" },
  { src: newsImage2, alt: "IFL Grand Prix quarterfinals" },
  { src: newsImage3, alt: "IFL Grand Prix face-off moment" },
];

function MediaCarousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultiple = slides.length > 1;

  const goPrev = () => {
    if (!hasMultiple) return;
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    if (!hasMultiple) return;
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[activeIndex];

  return (
    <div className={styles.mediaFrame}>
      <img
        src={activeSlide.src}
        alt={activeSlide.alt}
        className={styles.heroImage}
      />

      <div className={styles.controls} aria-label="Media carousel controls">
        <button
          type="button"
          className={styles.controlButton}
          aria-label="Previous"
          onClick={goPrev}
          disabled={!hasMultiple}
        >
          <img src={arrowIcon} alt="" aria-hidden className={styles.controlIconLeft} />
        </button>
        <button
          type="button"
          className={styles.controlButton}
          aria-label="Next"
          onClick={goNext}
          disabled={!hasMultiple}
        >
          <img src={arrowIcon} alt="" aria-hidden className={styles.controlIcon} />
        </button>
      </div>
    </div>
  );
}

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

          <MediaCarousel slides={mediaSlides} />
        </section>

        <section className={styles.fakeVideoSection}>
          <div className={styles.fakeVideoContent}>
            <div className={styles.fakeVideoMedia}>
              <img
                src={newsImage2}
                alt="IFL Grand Prix 1/4 Final highlight"
                className={styles.fakeVideoImage}
              />

              <img
                src={videoTime}
                alt="Video playback controls"
                className={styles.fakeVideoTime}
              />
            </div>

            <div className={styles.fakeVideoInfo}>
              <span className={styles.fakeVideoCategory}>Yarışlar</span>
              <h3 className={styles.fakeVideoTitle}>IFL GRAND PRIX 1/4 fİnal</h3>

              <div className={styles.fightFrame}>
                <span className={styles.fightNames}>Anar vs Farid</span>
              </div>
            </div>
          </div>
        </section>

        <NewsPage showHeader={false} />

        <section
          className={styles.runningLineSection}
          style={{ backgroundImage: `linear-gradient(0deg, #000000, #000000), linear-gradient(180deg, rgba(0, 0, 0, 0) 29.17%, #00ff00 100%), url(${noiseTexture})` }}
        >
          <div className={styles.runningLineContent}>
            <div className={styles.marquee} aria-label="Lightweight Grand Prix ticker">
              <div className={styles.marqueeInner}>
                <span>lightweight grand prix – 08/11/21 - lightweight grand prix –08/11/21 - lightweight grand prix – GP -&nbsp;</span>
                <span>lightweight grand prix – 08/11/21 - lightweight grand prix –08/11/21 - lightweight grand prix – GP -&nbsp;</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
