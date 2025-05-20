import React from "react";
import styles from "./Home.module.css";

const HomeDescBottom = () => {
  return (
    <a
      href="about"
      className={`${styles.baseText} ${styles.baseDescription} ${styles.linkStyle}`}
    >
      See What We Do
    </a>
  );
};

export default HomeDescBottom;
