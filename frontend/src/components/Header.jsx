import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/headerImages/PROVOCALIcon.svg";
import accountIconWht from "../assets/headerImages/accountIcon.svg";
import accountIconBlk from "../assets/headerImages/accountIconBlack.svg";
import MainButton from "../atoms/buttons/MainButton";
import styles from "../styles/HeaderStyles.module.css";

const Header = ({ theme }) => {
  const accountIconSrc = theme === "dark" ? accountIconWht : accountIconBlk;

  return (
    <div className={styles.header}>
      <div
        className={
          theme === "dark" ? styles.logoDarkCont : styles.logoLightCont
        }
      >
        <Link to="/">
          <Logo
            className={theme === "dark" ? styles.logoDark : styles.logoLight}
          />
        </Link>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span>Головна</span>
        </Link>
        <Link
          to="/courses"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <span>Курс</span>
        </Link>
      </div>
      {theme === "light" ? (
        <div
          className={
            theme === "light" ? styles.iconsLightCont : styles.iconsCont
          }
        >
          <img src={accountIconSrc} alt="" className={styles.accIcon} />
        </div>
      ) : (
        <div>
          <Link to="/login" className={styles.loginText}>
            <span>Увійти</span>
          </Link>
          <MainButton text="Реєстрація" linkTo="/register" type="small" />
        </div>
      )}
    </div>
  );
};

export default Header;
