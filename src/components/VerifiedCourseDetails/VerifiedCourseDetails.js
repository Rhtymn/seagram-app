import React from "react";
import styles from "./VerifiedCourseDetails.module.css";
import { useSelector } from "react-redux";
import Button from "../../UI/Button/Button";

const VerifiedCourseDetails = (props) => {
  return (
    <>
      <div className={`${styles.course_information}`}>
        <div className="d-flex justify-content-between align-items-center">
          <h1>{props.state.title}</h1>
          <span>{props.state.instructor}</span>
        </div>
        <div className={`${styles.divider}`}></div>
        <div className={`${styles.description}`}>
          <div className={`${styles.description_title}`}>
            <h2>Description</h2>
          </div>
          <div className={`${styles.description_text}`}>
            <p>{props.state.description}</p>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              nisl condimentum id venenatis a condimentum vitae sapien
              pellentesque. Vitae ultricies leo integer malesuada.
            </p> */}
          </div>
        </div>
        <Button>Enroll</Button>
      </div>
    </>
  );
};

export default VerifiedCourseDetails;
