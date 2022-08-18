import React, { useState } from "react";
import styles from "./CourseDetails.module.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import VerifiedCourseDetails from "../../components/VerifiedCourseDetails/VerifiedCourseDetails";

const CourseDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const backHandler = () => {
    if (location.state.back) {
      navigate(`${location.state.back}`);
      return;
    }
    navigate("/login");
  };

  useState(() => {
    if (location.state) {
      setIsLoading(false);
      return;
    }
    const getCourse = async () => {
      console.log("hello");
      const response = await fetch(
        `http://seagram-api.herokuapp.com/api/Courses/${params.courseId}`
      );
      const courseData = await response.json();
      location.state = {
        ...courseData,
        type: `${courseData.isVerified}`,
        instructor: "Robert",
      };
      setIsLoading(false);
    };
    getCourse();
  }, []);

  return (
    <div className={`${styles.course_details_container}`}>
      <div className={`${styles.course_details_actions}`} onClick={backHandler}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <VerifiedCourseDetails state={location.state} isLoading={isLoading} />
    </div>
  );
};

export default CourseDetails;
