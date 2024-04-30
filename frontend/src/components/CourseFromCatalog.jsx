import React from "react";
import styles from "../styles/CoursesCatalogStyles.module.css";
import { ReactComponent as Logo } from "../assets/headerImages/PROVOCALIcon.svg";

import { Link } from "react-router-dom";

const CourseFromCatalog = ({ title, blured }) => {
  return (
    <div className={styles.courseContainer}>
      <Link to="/courses/course">
        <div className={styles.courseImgCont}>
          {blured ? (
            <Logo style={{ color: "#FFFFFF" }} />
          ) : (
            <Logo style={{ color: "#FFFFFF", filter: "blur(4px)" }} />
          )}
        </div>
      </Link>

      <div className={styles.courseTitle}>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default CourseFromCatalog;
