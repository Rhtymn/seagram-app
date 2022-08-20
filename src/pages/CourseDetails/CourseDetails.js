import React from "react";
import styles from "./CourseDetails.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import VerifiedCourseDetails from "../../components/VerifiedCourseDetails/VerifiedCourseDetails";
import EnrolledCourseDetails from "../../components/EnrolledCourseDetails/EnrolledCourseDetails";

const CourseDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const backHandler = () => {
    if (location.state.back) {
      navigate(`${location.state.back}`);
      return;
    }
    navigate("/login");
  };

  return (
    <div className={`${styles.course_details_container}`}>
      <div className={`${styles.course_details_actions}`} onClick={backHandler}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      {location.state.type === "verified" && (
        <VerifiedCourseDetails state={location.state} />
      )}
      {location.state.type === "enrolled" && (
        <EnrolledCourseDetails state={location.state} />
      )}
    </div>
  );
};

export default CourseDetails;
