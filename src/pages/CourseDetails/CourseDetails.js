import React from "react";
import styles from "./CourseDetails.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import VerifiedCourseDetails from "../../components/VerifiedCourseDetails/VerifiedCourseDetails";

const CourseDetails = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const backHandler = () => {
    navigate("/student/course");
  };

  console.log(location.state);
  if (location.state.type === "verified") {
    return (
      <div className={`${styles.course_details_container}`}>
        <div
          className={`${styles.course_details_actions}`}
          onClick={backHandler}
        >
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <VerifiedCourseDetails state={location.state} />
      </div>
    );
  }
};

export default CourseDetails;
