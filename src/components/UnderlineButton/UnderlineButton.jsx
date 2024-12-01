import styles from "./UnderlineButton.module.css";

export default function UnderlineButton({
  label,
  width = 181,
  height = 48,
  textColor = "#000000",
  underlineColor = "#000000",
  background = "rgba(255, 255, 255, 0.12)",
  iconSrc,
  iconAlt = "",
  icon,
  onClick,
}) {
  return (
    <button
      type="button"
      className={styles.button}
      style={{
        "--btn-width": `${width}px`,
        "--btn-height": `${height}px`,
        "--btn-text": textColor,
        "--btn-underline": underlineColor,
        "--btn-bg": background,
      }}
      onClick={onClick}
    >
      <span className={styles.label}>{label}</span>
      {icon ? (
        <span className={styles.icon}>{icon}</span>
      ) : iconSrc ? (
        <img src={iconSrc} alt={iconAlt} className={styles.iconImage} />
      ) : null}
      <span className={styles.underline} aria-hidden />
    </button>
  );
}
