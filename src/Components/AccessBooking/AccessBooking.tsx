import React from "react";
import styles from "./AccessBooking.module.css";
import AccessBookingHeader from "./AccessBookingHeader";

const AccessBooking = () => {
  return (
    <>
    <AccessBookingHeader />
    <main>
      <div className={styles.baseContainer}>
        <div className={styles.top}>
          <h1 className={`${styles.baseText} ${styles.titleText}`}>
            Already Submitted a Form?
          </h1>

          <h1 className={`${styles.baseText} ${styles.descText}`}>
            <a href="auth" className={styles.linkStyle}>
              Book a Session
            </a>
          </h1>
        </div>

        <div className={styles.bottom}>
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
      </main>
    </>
  );
};

export default AccessBooking;
