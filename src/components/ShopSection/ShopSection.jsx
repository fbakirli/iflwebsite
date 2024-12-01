import styles from "./ShopSection.module.css";
import shopBackground from "../../assets/d8f5fcbc4bea8051c76d3995759a52d4a9a2f187.gif";
import UnderlineButton from "../UnderlineButton/UnderlineButton";

export default function ShopSection() {
  return (
    <section
      className={styles.shopSection}
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" +
          shopBackground +
          ")",
      }}
    >
      <div className={styles.shopContent}>
        <h2 className={styles.shopTitle}>NEW generation of serious style</h2>
        <UnderlineButton
          label="daha Ətraflı"
          width={186}
          textColor="#ffffff"
          underlineColor="#ffffff"
        />
      </div>
    </section>
  );
}
