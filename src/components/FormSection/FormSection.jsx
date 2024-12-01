import styles from "./FormSection.module.css";
import downButton from "../../assets/downbutton.svg";
import formBackground from "../../assets/formbg.jpeg";

export default function FormSection() {
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
              <span className={`${styles.fieldLabel} ${styles.visuallyHidden}`}>
                Name &amp; Surname *
              </span>
              <input
                type="text"
                className={styles.fieldInput}
                placeholder="Name & Surname *"
              />
            </label>
            <label className={styles.field}>
              <span className={`${styles.fieldLabel} ${styles.visuallyHidden}`}>
                Date of birth *
              </span>
              <input
                type="text"
                className={styles.fieldInput}
                placeholder="Date of birth *"
              />
            </label>

            <label className={styles.field}>
              <span className={`${styles.fieldLabel} ${styles.visuallyHidden}`}>KG *</span>
              <button type="button" className={`${styles.fieldInput} ${styles.selectFake}`}>
                KG <span className={styles.required}>*</span>
                <img src={downButton} alt="" aria-hidden className={styles.selectIcon} />
              </button>
            </label>
            <label className={styles.field}>
              <span className={`${styles.fieldLabel} ${styles.visuallyHidden}`}>
                Experience *
              </span>
              <button type="button" className={`${styles.fieldInput} ${styles.selectFake}`}>
                Experience <span className={styles.required}>*</span>
                <img src={downButton} alt="" aria-hidden className={styles.selectIcon} />
              </button>
            </label>

            <label className={styles.field}>
              <span className={`${styles.fieldLabel} ${styles.visuallyHidden}`}>Type *</span>
              <button type="button" className={`${styles.fieldInput} ${styles.selectFake}`}>
                Type <span className={styles.required}>*</span>
                <img src={downButton} alt="" aria-hidden className={styles.selectIcon} />
              </button>
            </label>
            <label className={styles.field}>
              <span className={`${styles.fieldLabel} ${styles.visuallyHidden}`}>
                Mobile Nömrə *
              </span>
              <input
                type="text"
                className={styles.fieldInput}
                placeholder="Mobile Nömrə *"
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
