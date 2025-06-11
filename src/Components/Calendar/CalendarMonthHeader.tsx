import React from "react";
import styles from "./Calendar.module.css";

const CalendarMonthHeader = () => {
  const month = [
    "J a n u a r y",
    "F e b r u a r y",
    "M a r c h",
    "A p r i l",
    "M a y",
    "J u n e",
    "J u l y",
    "A u g u s t",
    "S e p t e m b e r",
    "O c t o b e r",
    "N o v e m b e r",
    "D e c e m b e r",
  ];
  const d = new Date();
  let monthTitle = month[d.getMonth()];

  return (
    <>
      <div className={styles.monthHeader}>
        <div className={styles.prevMonth}>&#10094; </div>
        <div className={styles.monthHeaderSection}>{monthTitle}</div>
        <div className={styles.nextMonth}> &#10095;</div>
      </div>
    </>
  );
};

export default CalendarMonthHeader;
