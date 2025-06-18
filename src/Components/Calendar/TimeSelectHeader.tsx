import React from "react";
import styles from "./Calendar.module.css";

const TimeSelectHeader = () => {
  return (
    <div className={styles.timeSelectHeader}>
      <div className={styles.timeSelectHeaderSection}>Time</div>
      <div className={styles.timeSelectHeaderSection}>Sun</div>
      <div className={styles.timeSelectHeaderSection}>Mon</div>
      <div className={styles.timeSelectHeaderSection}>Tue</div>
      <div className={styles.timeSelectHeaderSection}>Wed</div>
      <div className={styles.timeSelectHeaderSection}>Thu</div>
      <div className={styles.timeSelectHeaderSection}>Fri</div>
      <div className={styles.timeSelectHeaderSection}>Sat</div>
    </div>
  );
};

export default TimeSelectHeader;
