import React from "react";
import styles from "../styles/UGonLearnOrbitStyles.module.css";

const UGonLearnOrbit = () => {
  return (
    <div className={styles.UGonLearnContainer}>
      <div className={styles.UGonLearnContent}>
        <div className={styles.orbitContainer}>
          <div className={`${styles.blueDot} ${styles.dot1}`}>
            <div></div>
          </div>
          <div className={`${styles.blueDot} ${styles.dot2}`}>
            <div></div>
          </div>
          <div className={`${styles.blueDot} ${styles.dot3}`}>
            <div></div>
          </div>
          <div className={`${styles.blueDot} ${styles.dot4}`}>
            <div></div>
          </div>
          <div className={`${styles.blueDot} ${styles.dot5}`}>
            <div></div>
          </div>
          <div className={styles.orbit1}>
            <div className={styles.orbit2}>
              <div className={styles.orbit3}>
                <span>Чого ви навчитесь обравши наш курс?</span>
                <div className={styles.orbitBackground}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UGonLearnOrbit;
