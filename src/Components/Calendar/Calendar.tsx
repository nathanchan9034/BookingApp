import React from "react";
import styles from "./Calendar.module.css";
import CalendarDateHeader from "./CalendarDateHeader";
import CalendarMonthHeader from "./CalendarMonthHeader";
import CalendarDays from "./CalendarDays";
import CalendarBookingConfirmation from "./CalendarBookingConfirmation";
import CalendarUpcoming from "./CalendarUpcoming";

const Calendar = () => {
  return (
    <>
      <div className={styles.baseContainer}>
        <h1 className={styles.titleText}>BE THE CHANGE Coaching: Dashboard</h1>
        <div className={styles.subContainerTop}>
          <div className={styles.topLeft}>
            <div className={styles.subText}>Availability Calendar</div>
            <div className={styles.gapSmall}></div>
            <div className={styles.calendarContainer}>
              {/* CALENDAR HTML */}
              {/* CALENDAR HTML */}
              {/* CALENDAR HTML */}

              <CalendarMonthHeader />
              <CalendarDateHeader />
              <CalendarDays />
            </div>
          </div>
          <div className={styles.topRight}>
            <div className={styles.subText}>Booking Confirmation</div>
            <div className={styles.gapSmall}></div>
            <div className={styles.confirmBookingContainer}>
              {/* BOOKING CONFIRMATION HTML */}
              {/* BOOKING CONFIRMATION HTML */}
              {/* BOOKING CONFIRMATION HTML */}

              <CalendarBookingConfirmation />
            </div>
          </div>
        </div>
        <div className={styles.gapLarge}></div>
        <div className={styles.subContainerBottom}>
          <div className={styles.bottom}>
            <div className={styles.subText}>Upcoming Coaching Meetings</div>
            <div className={styles.gapSmall}></div>
            <div className={styles.dashboardContainerNoMeeting}>
              {/* BOOKING CONFIRMATION HTML */}
              {/* BOOKING CONFIRMATION HTML */}
              {/* BOOKING CONFIRMATION HTML */}

              <CalendarUpcoming />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
