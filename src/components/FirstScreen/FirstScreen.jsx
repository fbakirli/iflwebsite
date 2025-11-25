import styles from "./FirstScreen.module.css";
import bgImage from "../../assets/bg-rectangle118.png";
import Header from "../Header/Header";
import VideoCard from "../VideoCard/VideoCard";
import smgLogo from "../../assets/SMG.svg";
import azmmafLogo from "../../assets/AZMMAF.svg";
import cbcLogo from "../../assets/CBC.svg";


export default function FirstScreen() {
  return (
    <div
      className={styles.firstScreen}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />

      <div className={styles.heroRow}>
        {/* LEFT SIDE */}
        <div className={styles.contentLeft}>
          <h1 className={styles.title}>
            WHERE THERE IS UNITY <br />
            THERE IS ALWAYS <br />
            VICTORY
          </h1>

          <button className={styles.primaryButton}>DAHA ƏTRAFLI</button>
        </div>

        {/* RIGHT SIDE */}
        <VideoCard />

        {/* BOTTOM LOGOS */}
        <div className={styles.logos}>
          <img src={smgLogo} alt="SMG" className={styles.smgLogo} />
          <img src={azmmafLogo} alt="AZMMAF" className={styles.azmmafLogo} />
          <img src={cbcLogo} alt="CBC" className={styles.cbcLogo} />
        </div>
      </div>
    </div>
  );
}
