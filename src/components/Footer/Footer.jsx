import styles from "./Footer.module.css";
import logo from "../../assets/ifl-logo.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/Facebook.svg";
import youtube from "../../assets/youtube.svg";
import tiktok from "../../assets/tiktok.svg";

const socialIcons = [
  { src: instagram, alt: "Instagram" },
  { src: facebook, alt: "Facebook" },
  { src: youtube, alt: "YouTube" },
  { src: tiktok, alt: "TikTok" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <img src={logo} alt="IFL" className={styles.logo} />

        <div className={styles.links}>
          <a href="/" className={styles.link}>
            Şərtlər və qaydalar
          </a>
          <a href="/" className={styles.link}>
            Gizlilik Siyasəti
          </a>
        </div>

        <button type="button" className={styles.toTop} onClick={scrollToTop} aria-label="Back to top">
          <span className={styles.toTopArrow}>↑</span>
        </button>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottomRow}>
        <div className={styles.social}>
          {socialIcons.map((icon) => (
            <a key={icon.alt} href="/" className={styles.socialIcon} aria-label={icon.alt}>
              <img src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </div>
        <div className={styles.copy}>2021 International Fighting League</div>
      </div>
    </footer>
  );
}
