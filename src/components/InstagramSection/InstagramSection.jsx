import styles from "./InstagramSection.module.css";
import UnderlineButton from "../UnderlineButton/UnderlineButton";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
import insta1 from "../../assets/instaimg1.jpg";
import insta2 from "../../assets/instaimg2.jpg";
import insta3 from "../../assets/instaimg3.jpg";
import insta4 from "../../assets/instaimg4.jpg";
import insta5 from "../../assets/instaimg5.jpg";
import insta6 from "../../assets/instaimg6.jpg";

const images = [insta1, insta2, insta3, insta4, insta5, insta6];

export default function InstagramSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.headerRow}>
          <h2 className={styles.title}>Instagram</h2>

          <UnderlineButton
            label="Follow us"
            width={186}
            textColor="#000000"
            underlineColor="#000000"
            background="transparent"
            icon={<InstagramIcon />}
          />
        </div>

        <div className={styles.grid}>
          {images.map((src, index) => (
            <div
              key={src}
              className={styles.tile}
              style={{ backgroundImage: `url(${src})` }}
              aria-label={`Instagram post ${index + 1}`}
            />
          ))}
        </div>

        <div className={styles.mobileActions}>
          <UnderlineButton
            label="Follow us"
            width={186}
            textColor="#000000"
            underlineColor="#000000"
            background="transparent"
            icon={<InstagramIcon />}
          />
        </div>
      </div>
    </section>
  );
}
