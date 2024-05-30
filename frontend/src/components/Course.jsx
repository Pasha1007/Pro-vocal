import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as MoveBack } from "../assets/secondaryIcons/moveBackIcon.svg";
import { ReactComponent as Waves } from "../assets/coursePageAssets/courseBottomWave.svg";
import styles from "../styles/CourseStyles.module.css";
import MainButton from "../atoms/buttons/MainButton";
import Header from "./Header";
import SkeletonModel from "../atoms/3dmodels/skeleton";
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
          <div className={styles.courseTextMaterials}>
            <span>
              Діафрагма - це м'яз, що розділяє грудну і черевну порожнини. Вона
              є ключовим елементом вокальної техніки, оскільки контролює обсяг
              повітря, що виходить з легенів під час співу. <br></br>
              <br></br>Правильне використання діафрагми може допомогти співакові
              досягнути глибокого, потужного звучання та контролювати тонус
              голосових зв'язок.
            </span>
            <span className={styles.fatText}>
              <br></br>
              <br></br>
              Вдих: діафрагма скорочується та опускається<br></br>
              <br></br>Видих: діафрагма розслабляється та піднімається
            </span>
          </div>
          <div className={styles.courseImgMaterials}>
            <SkeletonModel />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <MainButton text="Готово!" linkTo="/courses" type="big" />
        </div>
      </div>

      <Waves className={styles.wave} />
    </div>
  );
};

export default Course;
