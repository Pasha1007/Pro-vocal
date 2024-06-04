import React, { useState } from "react";
import Header from "./Header";
import styles from "../styles/CoursesCatalogStyles.module.css";
import { ReactComponent as Waves } from "../assets/coursePageAssets/coursePageWaves.svg";
import CourseBlock from "./CourseBlock";

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
    <div className={styles.mainContainer}>
      <Header theme="dark" />
      <Waves className={styles.wave} />

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
              return <CourseBlock title={item.title} blured={item.avaliable} />;
            })}
          </div>
        </div>
        <div className={styles.opportunitiesContainer}>
          <div className={styles.blocksTitle}>
            <span>Можливості</span>
          </div>
          <div className={styles.listCourses}>
            {opportunitiesTitles.map((item) => {
              return <CourseBlock title={item.title} blured={item.avaliable} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCatalog;
