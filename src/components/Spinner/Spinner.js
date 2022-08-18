import React from "react";
import styles from "./Spinner.module.css";

const Spinner = (props) => {
  const SpinnerClasses = props.isVisible
    ? `${styles.spinner_container}`
    : `${styles.spinner_container} d-none`;

  return (
    <div className={SpinnerClasses}>
      <div class="spinner-grow text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
