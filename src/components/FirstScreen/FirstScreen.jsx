import styles from "./FirstScreen.module.css";
import bgImage from "../../assets/bg-rectangle118.png";
import VideoCard from "../VideoCard/VideoCard";
import smgLogo from "../../assets/SMG.svg";
import azmmafLogo from "../../assets/AZMMAF.svg";
import cbcLogo from "../../assets/CBC.svg";


export default function FirstScreen() {
  return (
    <div
      className={styles.firstScreen}
      style={{ "--bg-image": `url(${bgImage})` }}
    >
      <div className={styles.heroRow}>
        <div className={styles.heroContent}>
          {/* LEFT SIDE */}
          <div className={styles.contentLeft}>
            <h1 className={styles.title}>
              WHERE THERE IS UNITY <br />
              THERE IS ALWAYS <br />
              VICTORY
            </h1>

            <button className={styles.primaryButton}>DAHA ƏTRAFLI</button>
          </div>

          {/* BOTTOM LOGOS */}
          <div className={styles.logos}>
            <img src={smgLogo} alt="SMG" className={styles.smgLogo} />
            <img src={azmmafLogo} alt="AZMMAF" className={styles.azmmafLogo} />
            <img src={cbcLogo} alt="CBC" className={styles.cbcLogo} />
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <VideoCard />
        </div>
      </div>
    </div>
  );
}
