import React, { useEffect, useState } from "react";
import styles from "./CourseDetails.module.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import VerifiedCourseDetails from "../../components/VerifiedCourseDetails/VerifiedCourseDetails";
import EnrolledCourseDetails from "../../components/EnrolledCourseDetails/EnrolledCourseDetails";
import { useDispatch, useSelector } from "react-redux";
import { enrolledCourseActions } from "../../store/enrolledCourse-slice";

const CourseDetails = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
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

  useEffect(() => {
    // GET LECTURES
    const getLecture = async () => {
      // const response = await fetch(
      //   `http://seagram-api.herokuapp.com/api/Courses/${params.courseId}/lectures`
      // );
      // let lectureDatas = await response.json();
      // console.log(lectureDatas);
      // let urls = lectureDatas.map(
      //   (lecture) =>
      //     `http://seagram-api.herokuapp.com/api/Courses/${params.courseId}/lectures/${lecture.id}/lectureDetails`
      // );
      // let requests = urls.map((url) =>
      //   fetch(url).then((response) => response.json())
      // );
      // const lectureDetails = await Promise.all(requests).then((datas) => {
      //   const result = [];
      //   datas.forEach((data) => {
      //     result.push(data);
      //   });
      //   return result;
      // });
      // lectureDatas = lectureDatas.map((lecture, idx) => {
      //   const newLectureData = { ...lecture, details: lectureDetails[idx] };
      //   return newLectureData;
      // });
      // urls = lectureDatas.map(
      //   (lecture) =>
      //     `http://seagram-api.herokuapp.com/api/Lectures/${lecture.id}/LectureDetails/material`
      // );
      // requests = urls.map((url) =>
      //   fetch(url).then((response) => response.json())
      // );
      // const materials = await Promise.all(requests).then((datas) => {
      //   const result = [];
      //   datas.forEach((data) => {
      //     result.push(data);
      //   });
      //   return result;
      // });
      // console.log(lectureDatas);
      // const materials = await fetch(`http://seagram-api.herokuapp.com/api/Lectures/${}/LectureDetails/material`)
    };
    getLecture();
  }, []);

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
