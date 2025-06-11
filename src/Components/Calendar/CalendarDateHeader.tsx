import React from "react";
import styles from "./Calendar.module.css";

const CalendarDateHeader = () => {
  return (
    <div className={styles.dateHeader}>
      <div className={styles.dateHeaderSection}>Sun</div>
      <div className={styles.dateHeaderSection}>Mon</div>
      <div className={styles.dateHeaderSection}>Tue</div>
      <div className={styles.dateHeaderSection}>Wed</div>
      <div className={styles.dateHeaderSection}>Thu</div>
      <div className={styles.dateHeaderSection}>Fri</div>
      <div className={styles.dateHeaderSection}>Sat</div>
    </div>
  );
};

export default CalendarDateHeader;
