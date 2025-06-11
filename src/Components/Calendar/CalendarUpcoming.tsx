import React from "react";
import styles from "./Calendar.module.css";

const CalendarUpcoming = () => {
  const exists = false;

  return exists ? (
    <div></div>
  ) : (
    <div className={styles.noMeeting}>No meetings booked.</div>
  );
};

export default CalendarUpcoming;
