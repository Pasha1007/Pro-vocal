import React, { useState } from "react";
import Header from "./Header";
import styles from "../styles/CoursesCatalogStyles.module.css";
import { Link } from "react-router-dom";

const CoursesCatalog = () => {
  const [progress, setProgress] = useState(10);

  const courseTitles = [
    "Сила (дихальна система)",
    "Джерело (голосові зв’язки в гортані)",
    "Фільтр (резонатор дихального тракту)",
  ];
  const opportunitiesTitles = [
    "Гортань",
    "М’яке піднебіння",
    "Перснеподібний хрящ",
  ];

  return (
    <div>
      <Header theme="light" />
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
              {courseTitles.map((title) => {
                return (
                  <div className={styles.courseContainer}>
                    <Link to="/courses/course">
                      <div className={styles.courseImgCont}></div>
                      <div className={styles.courseTitle}>
                        <span>{title}</span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.opportunitiesContainer}>
            <div className={styles.blocksTitle}>
              <span>Можливості</span>
            </div>
            <div className={styles.listCourses}>
              {opportunitiesTitles.map((title) => {
                return (
                  <div className={styles.courseContainer}>
                    <a href="/courses/course">
                      <div className={styles.courseImgCont}></div>
                      <div className={styles.courseTitle}>
                        <span>{title}</span>
                      </div>
                    </a>
                  </div>
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
