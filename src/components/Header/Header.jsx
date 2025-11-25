import styles from "./Header.module.css";
import logo from "../../assets/ifl-logo.svg";
import az from "../../assets/az-logo.svg";


export default function Header() {
  return (
    <header className={styles.header}>
      {/* Left: Logo */}
      <div className={styles.logoWrapper}>
        <img src={logo} alt="IFL Logo" className={styles.logo} />
      </div>

      {/* Middle: Nav links */}
      <nav className={styles.nav}>
        <a href="#home" className={`${styles.navItem} ${styles.navItemActive}`}>
          Ana səhifə
        </a>
        <a href="#news" className={styles.navItem}>
          Xəbərlər
        </a>
        <a href="#fighters" className={styles.navItem}>
          Döyüşçülər
        </a>
        <a href="#events" className={styles.navItem}>
          Tədbirlər
        </a>
        <a href="#shop" className={styles.navItem}>
          Shop
        </a>
      </nav>

      {/* Right: Language + primary button */}
      <div className={styles.actions}>
        <button className={styles.langButton}>
        <img src={az} alt="AZ lang" className={styles.az} />
        </button>

        <div className={styles.primaryButton}>
          <button className={styles.primaryButtonInner}>
            Kabinetə giriş
          </button>
          <div className={styles.primaryUnderline} />
        </div>
      </div>
    </header>
  );
}
