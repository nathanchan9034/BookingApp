import React from "react";
import styles from "./AccessBooking.module.css";

const AccessBookingHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerSection}>
        <a href="home" className={styles.linkStyle}>
          Home
        </a>
      </div>

      <div className={styles.headerSection}>
        <a href="about" className={styles.linkStyle}>
          About Us
        </a>
      </div>

      <div className={styles.headerSection}>
        <a href="book" className={styles.linkStyle}>
          Book a Coaching Session
        </a>
      </div>

      <div className={styles.headerSection}>
        <a href="contact" className={styles.linkStyle}>
          Contact
        </a>
      </div>
    </header>
  );
};

export default AccessBookingHeader;
