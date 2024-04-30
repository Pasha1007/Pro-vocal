import React, { useState } from "react";
import Header from "./Header";
import styles from "../styles/CoursesCatalogStyles.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Waves } from "../assets/coursePageAssets/coursePageWaves.svg";
import { ReactComponent as Logo } from "../assets/headerImages/PROVOCALIcon.svg";
import CourseFromCatalog from "./CourseFromCatalog";

const CoursesCatalog = () => {
  const [progress, setProgress] = useState(10);

  const courseTitles = [
    { title: "Сила (дихальна система)", avaliable: true },
    { title: "Джерело (голосові зв’язки в гортані)", avaliable: false },
    { title: "Фільтр (резонатор дихального тракту)", avaliable: false },
  ];
  const opportunitiesTitles = [
    { title: "Гортань", avaliable: true },
    { title: "М’яке піднебіння", avaliable: false },
    { title: "Перснеподібний хрящ", avaliable: false },
  ];

  return (
    <div>
      <Header theme="light" />
      <Waves className={styles.wave} />
      <div className={styles.mainContainer}>
        <div className={styles.catalogContainer}>
          <div className={styles.progressContainer}>
            <div className={styles.progressTitle}>
              <span className={styles.titleTxt}>Прогрес курсу</span>
              <span className={styles.progressPercent}>{progress}%</span>
            </div>
            <progress
              className={styles.progressBar}
              value={progress}
              max={100}
            ></progress>
          </div>
          <div className={styles.introductionContainer}>
            <div className={styles.blocksTitle}>
              <span>Введення в Estill Voice</span>
            </div>
            <div className={styles.listCourses}>
              {courseTitles.map((item) => {
                return (
                  <CourseFromCatalog
                    title={item.title}
                    blured={item.avaliable}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.opportunitiesContainer}>
            <div className={styles.blocksTitle}>
              <span>Можливості</span>
            </div>
            <div className={styles.listCourses}>
              {opportunitiesTitles.map((item) => {
                return (
                  <CourseFromCatalog
                    title={item.title}
                    blured={item.avaliable}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCatalog;
