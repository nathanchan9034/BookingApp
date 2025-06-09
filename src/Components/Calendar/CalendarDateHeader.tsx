import React from 'react'
import styles from './Calendar.module.css'

const CalendarDateHeader = () => {
  return (
      <div className={styles.header}>
        <div className={styles.headerSection}>
          Sun
        </div>
        <div className={styles.headerSection}>
          Mon
        </div>
        <div className={styles.headerSection}>
          Tue
        </div>
        <div className={styles.headerSection}>
          Wed
        </div>
        <div className={styles.headerSection}>
          Thu
        </div>
        <div className={styles.headerSection}>
          Fri
        </div>
        <div className={styles.headerSection}>
          Sat
        </div>
      </div>
  )
}

export default CalendarDateHeader