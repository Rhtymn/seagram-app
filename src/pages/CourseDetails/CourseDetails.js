import React, { useEffect, useState } from "react";
import styles from "./CourseDetails.module.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import VerifiedCourseDetails from "../../components/VerifiedCourseDetails/VerifiedCourseDetails";
import EnrolledCourseDetails from "../../components/EnrolledCourseDetails/EnrolledCourseDetails";
import { useDispatch } from "react-redux";
import { enrolledCourseActions } from "../../store/enrolledCourse-slice";

const CourseDetails = () => {
  const dispatch = useDispatch();
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
  const [isLoading, setIsLoading] = useState(true);
  const [lectureIsLoad, setLecturesIsLoad] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [lectures, setLectures] = useState([]);
  const backHandler = () => {
    if (location.state.back) {
      navigate(`${location.state.back}`);
      return;
    }
    navigate("/login");
  };
  const getCourse = async () => {
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

  const getLectures = async () => {
    const response = await fetch(
      `http://seagram-api.herokuapp.com/api/Courses/${location.state.id}/lectures`
    );
    const lectureData = await response.json();
    setLectures([...lectureData]);
    dispatch(enrolledCourseActions.addedLectures([...lectureData]));
    setLecturesIsLoad(false);
  };

  useEffect(() => {
    if (location.state) {
      if (location.state.type === "enrolled") {
        getLectures();
      }
      // GET ALL LECTURES FROM THIS COURSE
      setIsLoading(false);
      return;
    }
    getCourse();
  }, []);

  return (
    <div className={`${styles.course_details_container}`}>
      <div className={`${styles.course_details_actions}`} onClick={backHandler}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      {isLoading && SpinnerContainer}
      {!isLoading && location.state.type === "verified" && (
        <VerifiedCourseDetails state={location.state} isLoading={isLoading} />
      )}
      {!isLoading && location.state.type === "enrolled" && (
        <EnrolledCourseDetails
          state={location.state}
          isLoading={isLoading}
          lectures={lectures}
          lectureIsLoad={lectureIsLoad}
        />
      )}
    </div>
  );
};

export default CourseDetails;
