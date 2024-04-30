import React from "react";
import styles from "../styles/OpenVoiceStyles.module.css";

const OpenVoice = () => {
  return (
    <div className={styles.openYourVoiceCont}>
      <span className={styles.openVoiceTitle}>
        Відкрийте для себе свій голос по-новому!
      </span>
      <div className={styles.openVoiceContent}>
        <div className={styles.openVoiceLeft}></div>
        <div className={styles.openVoiceRight}></div>
      </div>
    </div>
  );
};

export default OpenVoice;
