import styles from "./FirstScreen.module.css";
import bgImage from "../../assets/bg-rectangle118.png";
import VideoCard from "../VideoCard/VideoCard";

export default function FirstScreen() {
  return (
    <div 
      className={styles.firstScreen} 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.contentLeft}>
        <h1 className={styles.title}>
          WHERE THERE IS UNITY <br />
          THERE IS ALWAYS <br />
          VICTORY
        </h1>

        <button className={styles.primaryButton}>
          DAHA ƏTRAFLI
        </button>

        <div className={styles.logos}>
          <img src="/assets/smg-logo.png" alt="SMG" />
          <img src="/assets/azmmaf-logo.png" alt="AZMMAF" />
          <img src="/assets/cbc-logo.png" alt="CBC Sport" />
        </div>
      </div>

      <VideoCard />
    </div>
  );
}
