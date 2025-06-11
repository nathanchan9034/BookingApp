import React, { useState } from "react";
import styles from "./Calendar.module.css";

type title = {
  title: string;
};

const CalendarBookingConfirmation = () => {
  const selected = false;
  const [inputs, setInputs] = useState<title>({
    title: "",
  });

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return selected ? (
    <label>
      Select a Title For Your Booking:
      <input
        type="text"
        name="title"
        value={inputs.title || ""}
        onChange={handleChangeTitle}
        required
      />
    </label>
  ) : (
    <div className={styles.noSelected}>
      Select a date and time to confirm booking.
    </div>
  );
};

export default CalendarBookingConfirmation;
