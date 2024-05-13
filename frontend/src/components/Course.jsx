import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as MoveBack } from "../assets/secondaryIcons/moveBackIcon.svg";
import { ReactComponent as Waves } from "../assets/coursePageAssets/courseBottomWave.svg";

import styles from "../styles/CourseStyles.module.css";
import MainButton from "../atoms/buttons/MainButton";
import Header from "./Header";

const Course = () => {
  return (
    <div className={styles.mainCont}>
      <Header theme="dark" />
      <div className={styles.courseContainer}>
        <div className={styles.moveIconCont}>
          <Link to="/courses">
            <MoveBack />
          </Link>
        </div>
        <div className={styles.courseMaterialsCont}>
          <div className={styles.courseTextMaterials}></div>
          <div className={styles.courseImgMaterials}></div>
        </div>
        <div className={styles.buttonContainer}>
          <MainButton text="Готово!" />
        </div>
      </div>

      <Waves className={styles.wave} />
    </div>
  );
};

export default Course;
