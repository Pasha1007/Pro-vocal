import React from "react";
import styles from "../styles/ProCourseComponent.module.css";
import threeDBlock from "../assets/mainPageAssets/3dBlockIcon.png";
import MainButton from "../atoms/buttons/MainButton";

const blocksContents = [
  {
    id: 1,
    img: threeDBlock,
    title: "3Д-моделі",
    content: "Навчання стало цікавіше завдяки моделям",
  },
  {
    id: 2,
    img: threeDBlock,
    title: "3Д-моделі",
    content: "Навчання стало цікавіше завдяки моделям",
  },
  {
    id: 3,
    img: threeDBlock,
    title: "3Д-моделі",
    content: "Навчання стало цікавіше завдяки моделям",
  },
  {
    id: 4,
    img: threeDBlock,
    title: "3Д-моделі",
    content: "Навчання стало цікавіше завдяки моделям",
  },
];

const OneOfFourBlocks = ({ icon, title, content }) => {
  return (
    <div className={styles.courseBlock}>
      <img className={styles.blockIcon} src={icon} alt="" />
      <span className={styles.blockTitle}>{title}</span>
      <p>{content}</p>
    </div>
  );
};

const ProCourse = () => {
  return (
    <div className={styles.proCourseContainer}>
      <div className={styles.proCourseLeft}>
        <div className={styles.headerPRO}>
          <em>pro </em>
          <span>курс</span>
        </div>
        <div className={styles.descrCont}>
          <span>
            Цей курс вокалу розроблений для того, щоб допомогти вам розширити
            свій діапазон, покращити контроль над голосом та співати з більшою
            впевненістю. Ми використовуємо передову методику Estill Voice та
            інноваційні 3D-моделі, щоб зробити процес навчання максимально
            ефективним та цікавим.
          </span>
        </div>
        <MainButton text="Розпочати" linkTo="/login" />
      </div>
      <div className={styles.proCourseRight}>
        <div className={styles.blocksCont}>
          {blocksContents.map((item) => {
            return (
              <OneOfFourBlocks
                key={item.id}
                icon={item.img}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProCourse;
