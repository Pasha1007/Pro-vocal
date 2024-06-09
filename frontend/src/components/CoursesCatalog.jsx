import React, { useState } from "react";
import Header from "./Header";
import styles from "../styles/CoursesCatalogStyles.module.css";
import { ReactComponent as Waves } from "../assets/coursePageAssets/coursePageWaves.svg";
import CourseBlock from "./CourseBlock";
import MainButton from "../atoms/buttons/MainButton";
const CoursesCatalog = () => {
  const [progress, setProgress] = useState(10);
  const [isAdmin, setIsAdmin] = useState(true);
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const courseTitles = [
    { title: "Сила (дихальна система)", avaliable: true, type: 1 },
    {
      title: "Джерело (голосові зв’язки в гортані)",
      avaliable: true,
      type: 1,
    },
    {
      title: "Фільтр (резонатор дихального тракту)",
      avaliable: false,
      type: 1,
    },
  ];
  const opportunitiesTitles = [
    { title: "Гортань", avaliable: true, type: 1 },
    { title: "М’яке піднебіння", avaliable: true, type: 1 },
    { title: "Перснеподібний хрящ", avaliable: false, type: 1 },
  ];
  const breathingTechniques = [
    { title: "Фальцет", avaliable: true, type: 2 },
    { title: "Белт", avaliable: true, type: 2 },
    { title: "Мікст", avaliable: false, type: 2 },
  ];

  return (
    <div className={styles.mainContainer}>
      {showModal && (
        <div className={styles.addCourseModal}>
          <button className={styles.closeModal} onClick={toggleModal}>
            X
          </button>
        </div>
      )}
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
            {isAdmin && (
              <div className={styles.addCourseBtnCont}>
                <button className={styles.butOnBut} onClick={toggleModal}>
                  <MainButton text="Додати курс" type="small" />
                </button>
              </div>
            )}
          </div>
          <div className={styles.listCourses}>
            {courseTitles.map((item) => {
              return (
                <CourseBlock
                  title={item.title}
                  blured={item.avaliable}
                  type={item.type}
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
                <CourseBlock
                  title={item.title}
                  blured={item.avaliable}
                  type={item.type}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.opportunitiesContainer}>
          <div className={styles.blocksTitle}>
            <span>Техніки вокалу</span>
          </div>
          <div className={styles.listCourses}>
            {breathingTechniques.map((item) => {
              return (
                <CourseBlock
                  title={item.title}
                  blured={item.avaliable}
                  type={item.type}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCatalog;
