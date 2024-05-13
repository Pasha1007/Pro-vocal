import React from "react";
import styles from "../../styles/MainButtonStyles.module.css";

const MainButton = ({ text }) => {
  return <button className={styles.startBtn}>{text}</button>;
};

export default MainButton;
