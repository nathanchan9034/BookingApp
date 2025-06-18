import React from "react";
import styles from "./Calendar.module.css";
import CalendarMonthHeader from "./CalendarMonthHeader";
import TimeSelectHeader from "./TimeSelectHeader";

const TimeSelect = () => {
  return (
    <>
      <div className={styles.subContainerTop}>
        <div className={styles.fullTop}>
          <div className={styles.subText}>Select a Time to Book</div>
          <div className={styles.gapSmall}></div>
          <div className={styles.timeSelectContainer}>
            <CalendarMonthHeader />
            <TimeSelectHeader />
            <ul>
              <li>10:00 AM</li>
              <li>11:00 AM</li>
              <li>12:00 PM</li>
              <li>1:00 PM</li>
              <li>2:00 PM</li>
              <li>3:00 PM</li>
              <li>4:00 PM</li>
              <li>5:00 PM</li>
              <li>6:00 PM</li>
              <li>7:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeSelect;
