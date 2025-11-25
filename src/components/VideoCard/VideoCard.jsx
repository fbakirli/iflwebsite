import styles from "./VideoCard.module.css";
import poster from "../../assets/poster-final.png";
import WatchLiveButton from "../WatchLiveButton/WatchLiveButton";

export default function VideoCard() {
  return (
    <div className={styles.videoCard}>

  <img src={poster} className={styles.poster} />

  <p className={styles.subtitle}>LIGHTWEIGHT GRAND PRIX</p>

  <h2 className={styles.title}>FINAL DAY OF THE<br/>GRAND PRIX</h2>

  <div className={styles.buttonWrapper}>
    <WatchLiveButton />
  </div>

  </div>

  );
}
