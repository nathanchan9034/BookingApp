import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";

type shortInputs = {
  clientName: string;
  age: string;
  email: string;
  otherSource: string;
};

type longInputs = {
  clientBio: string;
  reasonForBooking: string;
  otherInfo: string;
};

const Form = () => {
  const [inputs, setInputs] = useState<shortInputs>({
    clientName: "",
    age: "",
    email: "",
    otherSource: "",
  });

  const [textarea, setTextarea] = useState<longInputs>({
    clientBio: "",
    reasonForBooking: "",
    otherInfo: "",
  });

  const [source, setSource] = useState("");

  const handleChangeShort = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleChangeLong = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setTextarea((values) => ({ ...values, [name]: value }));
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSource(event.target.value);
  };

  useEffect(() => {
    if (source !== "other" && inputs.otherSource !== "") {
      setInputs((prev) => ({ ...prev, otherSource: "" }));
    }
  }, [source]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !inputs.clientName ||
      !inputs.age ||
      !inputs.email ||
      !textarea.clientBio ||
      !textarea.reasonForBooking ||
      source == "" ||
      (source == "other" && inputs.otherSource == "")
    ) {
      alert("Please fill out all fields of the form");
      return;
    }

    console.log("Client Data: ", { inputs, textarea, source });
  };

  const complete =
    inputs.clientName &&
    inputs.age &&
    inputs.email &&
    textarea.clientBio &&
    textarea.reasonForBooking &&
    ((source !== "other" && source !== "") ||
      (source === "other" && inputs.otherSource.trim() !== ""));

  return (
    <>
      <div>
        <h1 className={`${styles.baseText} ${styles.titleText}`}>
          placeholder title
        </h1>
        <p className={`${styles.baseText} ${styles.descText}`}>
          placeholder desc 1
        </p>
        <p className={`${styles.baseText} ${styles.descText}`}>
          placeholder desc 2
        </p>
        <p className={`${styles.baseText} ${styles.descText}`}>
          * = Required field
        </p>
      </div>

      <main>
        <div className={styles.baseContainer}>
          <div className={styles.fieldsContainer}>
            <form onSubmit={handleSubmit}>
              <label className={styles.fieldDesc}>
                *Name:
                <input
                  className={styles.fieldsShort}
                  type="text"
                  name="clientName"
                  value={inputs.clientName || ""}
                  onChange={handleChangeShort}
                  required
                />
              </label>

              <label className={styles.fieldDesc}>
                *Age:
                <input
                  className={styles.fieldsShort}
                  type="string"
                  name="age"
                  value={inputs.age || ""}
                  onChange={handleChangeShort}
                  required
                />
              </label>

              <label className={styles.fieldDesc}>
                *Email Address:
                <input
                  className={styles.fieldsShort}
                  type="string"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChangeShort}
                  required
                />
              </label>

              <label className={styles.fieldDesc}>
                *How did you find us?:
                <select
                  className={styles.fieldsSelect}
                  value={source}
                  onChange={handleChangeSelect}
                  required
                >
                  <option value="">Select from the Dropdown menu:</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="instagram">Instagram</option>
                  <option value="website">Website</option>
                  <option value="ad">Advertisement</option>
                  <option value="other">Other (Specify)</option>
                </select>
              </label>

              {source === "other" && (
                <label className={styles.fieldDesc}>
                  *Please Specify Below:
                  <input
                    className={styles.fieldsShort}
                    type="string"
                    name="otherSource"
                    value={inputs.otherSource || ""}
                    onChange={handleChangeShort}
                    required
                  ></input>
                </label>
              )}

              <label className={styles.fieldDesc}>
                *Tell me About Yourself:
                <textarea
                  className={styles.fieldsLong}
                  name="clientBio"
                  value={textarea.clientBio}
                  onChange={handleChangeLong}
                  required
                />
              </label>

              <label className={styles.fieldDesc}>
                *Reason for Booking:
                <textarea
                  className={styles.fieldsLong}
                  name="reasonForBooking"
                  value={textarea.reasonForBooking}
                  onChange={handleChangeLong}
                  required
                />
              </label>

              <label className={styles.fieldDesc}>
                Other Information (Optional):
                <textarea
                  className={styles.fieldsLong}
                  name="otherInfo"
                  value={textarea.otherInfo}
                  onChange={handleChangeLong}
                />
              </label>

              <input
                className={
                  complete ? styles.activeSubmitBtn : styles.baseSubmitBtn
                }
                type="Submit"
              />
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Form;
