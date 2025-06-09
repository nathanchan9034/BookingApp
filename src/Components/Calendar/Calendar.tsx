import React from 'react'
import styles from './Calendar.module.css'
import CalendarDateHeader from './CalendarDateHeader'

const Calendar = () => {
  return (
    <>
      <div className={styles.baseContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.titleText}>
            BE THE CHANGE Coaching: Dashboard
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={`${styles.left} ${styles.subText}`}>
            Booking Calendar
            <div className={styles.calendarContainer}>
              <CalendarDateHeader />
            </div>
          </div>
          <div className={`${styles.right} ${styles.subText}`}>
            My Meetings
            <div className={styles.dashboardContainer}></div>  
          </div>
        </div>
      </div>
    </>
  )
}

export default Calendar