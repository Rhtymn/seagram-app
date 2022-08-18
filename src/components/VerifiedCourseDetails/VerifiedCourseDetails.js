import React from "react";
import styles from "./VerifiedCourseDetails.module.css";
import { useSelector } from "react-redux";
import Button from "../../UI/Button/Button";
import Spinner from "../Spinner/Spinner";

const VerifiedCourseDetails = (props) => {
  const SpinnerContainer = (
    <div className={`${styles.spinner_container}`}>
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

  const Content = (
    <div className={`${styles.course_information}`}>
      <div className="d-flex justify-content-between align-items-center">
        {!props.isLoading && <h1>{props.state.title}</h1>}
        {!props.isLoading && <span>{props.state.instructor}</span>}
      </div>
      <div className={`${styles.divider}`}></div>
      <div className={`${styles.description}`}>
        <div className={`${styles.description_title}`}>
          <h2>Description</h2>
        </div>
        <div className={`${styles.description_text}`}>
          {!props.isLoading && <p>{props.state.description}</p>}
          {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
        nisl condimentum id venenatis a condimentum vitae sapien
        pellentesque. Vitae ultricies leo integer malesuada.
      </p> */}
        </div>
      </div>
      {!props.isLoading && props.state.back && <Button>Enroll</Button>}
    </div>
  );

  return (
    <>
      {props.isLoading && SpinnerContainer}
      {!props.isLoading && Content}
    </>
  );
};

export default VerifiedCourseDetails;
