import React from "react";
import styles from "./AccessBooking.module.css";

const AccessBooking = () => {
  return (
    <>
      <div className={styles.baseContainer}>
        <div className={styles.left}>
          <h1 className={`${styles.baseText} ${styles.titleText}`}>
            Already Submitted a Form?
          </h1>

          <h1 className={`${styles.baseText} ${styles.descText}`}>
            <a href="auth" className={styles.linkStyle}>
              Book a Session
            </a>
          </h1>
        </div>

        <div className={styles.right}>
          <h1 className={`${styles.baseText} ${styles.titleText}`}>
            Ready to be Changed?
          </h1>

          <h1 className={`${styles.baseText} ${styles.descText}`}>
            <a href="form" className={styles.linkStyle}>
              Submit a Form
            </a>
          </h1>
        </div>
      </div>
    </>
  );
};

export default AccessBooking;
