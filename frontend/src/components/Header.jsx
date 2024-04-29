import React from "react";
import { ReactComponent as Logo } from "../assets/headerImages/PROVOCALIcon.svg";
import accountIconWht from "../assets/headerImages/accountIcon.svg";
import accountIconBlk from "../assets/headerImages/accountIconBlack.svg";
import helpIconWht from "../assets/headerImages/helpIcon.svg";
import helpIconBlk from "../assets/headerImages/helpIconBlack.svg";

import styles from "../styles/HeaderStyles.module.css";

const Header = ({ theme }) => {
    const accountIconSrc = theme === "dark" ? accountIconWht : accountIconBlk;
    const helpIconSrc = theme === "dark" ? helpIconBlk : helpIconWht;

    return (
        <div className={styles.header}>
            <div className={styles.logoCont}>
                <Logo className={theme === "dark" ? styles.logoDark : styles.logoLight} />
            </div>
            <div className={styles.iconsCont}>
                <img src={accountIconSrc} alt="" className={styles.accIcon} />
                <img src={helpIconSrc} alt="" className={styles.helpIcon} />
            </div>
        </div>
    );
};

export default Header;
