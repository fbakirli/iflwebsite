import { useState } from "react";
import styles from "./FormSection.module.css";
import downButton from "../../assets/downbutton.svg";
import formBackground from "../../assets/formbg.jpeg";

export default function FormSection() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [kg, setKg] = useState("");
  const [experience, setExperience] = useState("");
  const [type, setType] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <section
      className={styles.formSection}
      style={{
        backgroundImage: `url(${formBackground})`,
      }}
    >
      <div className={styles.formOverlay} />
      <div className={styles.formContent}>
        <h2 className={styles.formTitle}>
          Döyüşçüsənsə, iştirak üçün müraciət et!
        </h2>

        <div className={styles.formBox}>
          <div className={styles.formHeader}>
            <h3 className={styles.formHeading}>Fill the form</h3>
            <div className={styles.formDivider} />
          </div>

          <div className={styles.formGrid}>
            <label className={styles.field}>
              {!name && (
                <span className={styles.fieldOverlay}>
                  Name &amp; Surname <span className={styles.overlayStar}>*</span>
                </span>
              )}
              <input
                type="text"
                className={styles.fieldInput}
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-required="true"
              />
            </label>
            <label className={styles.field}>
              {!dob && (
                <span className={styles.fieldOverlay}>
                  Date of birth <span className={styles.overlayStar}>*</span>
                </span>
              )}
              <input
                type="text"
                className={styles.fieldInput}
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                aria-required="true"
              />
            </label>

            <label className={styles.field}>
              {!kg && (
                <span className={`${styles.fieldOverlay} ${styles.selectOverlay}`}>
                  KG <span className={styles.overlayStar}>*</span>
                </span>
              )}
              <select
                className={`${styles.fieldInput} ${styles.selectField}`}
                value={kg}
                style={{
                  backgroundImage: `url(${downButton})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "calc(100% - 16px) center",
                  backgroundSize: "24px 24px",
                }}
                aria-required="true"
                required
                onChange={(e) => setKg(e.target.value)}
              >
                <option value="" disabled hidden>
                  KG *
                </option>
                <option value="text">text</option>
              </select>
            </label>
            <label className={styles.field}>
              {!experience && (
                <span className={`${styles.fieldOverlay} ${styles.selectOverlay}`}>
                  Experience <span className={styles.overlayStar}>*</span>
                </span>
              )}
              <select
                className={`${styles.fieldInput} ${styles.selectField}`}
                value={experience}
                style={{
                  backgroundImage: `url(${downButton})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "calc(100% - 16px) center",
                  backgroundSize: "24px 24px",
                }}
                aria-required="true"
                required
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="" disabled hidden>
                  Experience *
                </option>
                <option value="text">text</option>
              </select>
            </label>

            <label className={styles.field}>
              {!type && (
                <span className={`${styles.fieldOverlay} ${styles.selectOverlay}`}>
                  Type <span className={styles.overlayStar}>*</span>
                </span>
              )}
              <select
                className={`${styles.fieldInput} ${styles.selectField}`}
                value={type}
                style={{
                  backgroundImage: `url(${downButton})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "calc(100% - 16px) center",
                  backgroundSize: "24px 24px",
                }}
                aria-required="true"
                required
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" disabled hidden>
                  Type *
                </option>
                <option value="text">text</option>
              </select>
            </label>
            <label className={styles.field}>
              {!mobile && (
                <span className={styles.fieldOverlay}>
                  Mobil Nömrə <span className={styles.overlayStar}>*</span>
                </span>
              )}
              <input
                type="text"
                className={styles.fieldInput}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                aria-required="true"
              />
            </label>
          </div>

          <div className={styles.formFooter}>
            <div className={styles.formNote}>
              <span className={styles.checkmark} aria-hidden />
              <span>Where there is unity there is always victory</span>
            </div>
            <button type="button" className={styles.submitButton}>
              Göndər
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
