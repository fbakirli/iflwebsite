import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/ifl-logo.svg";
import az from "../../assets/az-logo.svg";
import uk from "../../assets/uk.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/Facebook.svg";
import youtube from "../../assets/youtube.svg";
import tiktok from "../../assets/tiktok.svg";

const navItems = [
  { id: "home", label: "Ana səhifə" },
  { id: "news", label: "Xəbərlər" },
  { id: "fighters", label: "Döyüşçülər" },
  { id: "events", label: "Tədbirlər" },
  { id: "shop", label: "Shop" },
];

export default function Header({ activePage = "home", onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (event, page) => {
    event.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
    setMenuOpen(false);
  };

  const headerClassName = `${styles.header} ${
    activePage === "home" ? styles.headerTransparent : styles.headerSolid
  }`;

  return (
    <>
      <header className={headerClassName}>
        <div className={styles.inner}>
          {/* Left: Logo */}
          <div className={styles.logoWrapper}>
            <img src={logo} alt="IFL Logo" className={styles.logo} />
          </div>

          {/* Middle: Nav links */}
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`${styles.navItem} ${
                  activePage === item.id ||
                  (item.id === "news" && activePage === "newsDetail")
                    ? styles.navItemActive
                    : ""
                }`}
              >
                {item.label}
              </a>
            ))}
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

          {/* Mobile burger */}
          <button
            className={styles.burger}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className={`${styles.mobileMenu} ${styles.mobileMenuOpen}`}>
          <div className={styles.mobileTop}>
            <img src={logo} alt="IFL Logo" className={styles.mobileLogo} />
            <button
              className={styles.closeButton}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
          </div>

          <div className={styles.mobileLogin}>Kabinetə giriş</div>
          <div className={styles.mobileDivider} />

          <ul className={styles.mobileNav} role="menu">
            {navItems.map((item, index) => (
              <li key={item.id} className={styles.mobileNavItemWrapper}>
                <button
                  type="button"
                  className={styles.mobileNavItem}
                  onClick={(e) => handleClick(e, item.id)}
                  role="menuitem"
                >
                  <span className={styles.mobileNavNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.mobileNavLabel}>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.mobileLangRow}>
            <div className={styles.langBadge}>
              <img src={az} alt="AZ" className={styles.langBadgeImg} />
            </div>
            <div className={`${styles.langBadge} ${styles.langBadgeOutline}`}>
              <img src={uk} alt="UK" className={styles.langBadgeImg} />
            </div>
          </div>

          <div className={styles.mobileSocial}>
            <span className={styles.socialTitle}>Sosial media</span>
            <div className={styles.socialIcons}>
              <span className={styles.socialIcon}>
                <img src={instagram} alt="Instagram" className={styles.socialIconImg} />
              </span>
              <span className={styles.socialIcon}>
                <img src={facebook} alt="Facebook" className={styles.socialIconImg} />
              </span>
              <span className={styles.socialIcon}>
                <img src={youtube} alt="YouTube" className={styles.socialIconImg} />
              </span>
              <span className={styles.socialIcon}>
                <img src={tiktok} alt="TikTok" className={styles.socialIconImg} />
              </span>
            </div>
          </div>

          <p className={styles.mobileFooter}>2021 International Fighting League</p>
        </div>
      )}
    </>
  );
}
