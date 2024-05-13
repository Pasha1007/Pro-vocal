import React from "react";
import styles from "../styles/CoursesCatalogStyles.module.css";
import { ReactComponent as Logo } from "../assets/headerImages/PROVOCALIcon.svg";

import { Link } from "react-router-dom";

const CourseBlock = ({ title, blured }) => {
  return (
    <div className={styles.courseContainer}>
      {blured ? (
        <Link to="/courses/course">
          <div className={styles.courseImgCont}>
            <Logo style={{ color: "#FFFFFF", transform: "scale(1.03)" }} />
          </div>
        </Link>
      ) : (
        <div className={styles.courseImgCont}>
          <Logo style={{ color: "#FFFFFF", filter: "blur(4px)" }} />
        </div>
      )}
      <div className={styles.courseTitle}>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default CourseBlock;
