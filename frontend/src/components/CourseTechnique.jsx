import { React } from "react";
import { Link, useParams } from "react-router-dom";

import { ReactComponent as MoveBack } from "../assets/secondaryIcons/moveBackIcon.svg";
import { ReactComponent as Waves } from "../assets/coursePageAssets/courseBottomWave.svg";
import styles from "../styles/CourseStyles.module.css";
import MainButton from "../atoms/buttons/MainButton";
import Header from "./Header";
import AudioPlayer from "./AudioPalyer/AudioPlayer";
import tracks from "./AudioPalyer/tracks";
const CourseTechinque = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

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
          <div className={styles.additionalCont}>
            <div className={styles.courseTextMaterials}>
              <h2>{decodedTitle}</h2>
              <span>
                Белт – вокальний прийом, у якому високі ноти співаються на
                опорі, а не фальцетом, голос звучить потужно, щільно та об'ємно.
              </span>
              <span className={styles.fatText2}>
                <ul className={styles.twoColumnList}>
                  <li>ГС: тверда/м’яка</li>
                  <li>ГС: тверда/м’яка</li>
                  <li>ГС: товсті</li>
                  <li>ЩХ: вертикальний</li>
                  <li>ПХ: нахилений</li>
                  <li>СЧН: скорочений</li>
                  <li>Гортань: висока</li>
                  <li>Язик: високий</li>
                  <li>МП: високе</li>
                  <li>НЩ: середня</li>
                  <li>Губи: середні</li>
                  <li>ГіШ: в тонусі? напружені?</li>
                  <li>Торс: в тонусі? напружені?</li>
                </ul>
              </span>
            </div>
            <AudioPlayer tracks={tracks} />
          </div>
          <div className={styles.courseImgMaterials}></div>
        </div>
        <div className={styles.buttonContainer}>
          <MainButton text="Готово!" linkTo="/courses" type="big" />
        </div>
      </div>

      <Waves className={styles.wave} />
    </div>
  );
};

export default CourseTechinque;
