import React, { useState, useEffect, useCallback } from "react";
import styles from "./EnrolledCourseDetails.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { enrolledCourseActions } from "../../store/enrolledCourse-slice";

const Lecture = (props) => {
  const [isShowDetails, setIsShowDetails] = useState(false);
  const LectureDetailsClasses = isShowDetails
    ? `${styles.lecture_information}`
    : `${styles.lecture_information} d-none`;

  const lectureClickHandler = () => {
    setIsShowDetails((prev) => {
      return !prev;
    });
  };

  const navigateLinkHandler = (e) => {
    e.preventDefault();
    window.open(`${props.material.url}`);
  };

  return (
    <li className={`${styles.lecture_item}`} onClick={lectureClickHandler}>
      <div className={`${styles.lecture_title}`}>
        <div>{props.title}</div>
        <div
          className={`${styles.estimated}`}
        >{`${props.estimatedTime} minute`}</div>
      </div>
      <div className={LectureDetailsClasses}>
        <div className={`${styles.lecture__description}`}>
          <div className="mb-1">Description</div>
          <div>{props.lectureDetails.description}</div>
        </div>
        <div className={`${styles.lecture__link}`}>
          <a href="#" onClick={navigateLinkHandler}>
            Learn
          </a>
        </div>
      </div>
    </li>
  );
};

const EnrolledCourseDetails = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const lectures = useSelector((state) => state.enrolledCourse.lectures);
  const params = useParams();
  const Spinner = (
    <div class="spinner-grow text-secondary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );

  useEffect(() => {
    // GET LECTURE
    const getLectures = async () => {
      let response = await fetch(
        `https://seagram-api.herokuapp.com/api/Courses/${params.courseId}/lectures`
      );
      const lectures = await response.json();
      // console.log(lectures);

      let urls = lectures.map(
        (lecture) =>
          `https://seagram-api.herokuapp.com/api/Courses/${params.courseId}/lectures/${lecture.id}/lectureDetails`
      );
      let request = urls.map((url) =>
        fetch(url).then((response) => response.json())
      );

      const lectureDetails = await Promise.all(request).then((datas) => {
        const result = [];
        datas.forEach((data) => {
          result.push(data);
        });
        return result;
      });
      // console.log(lectureDetails);

      urls = lectureDetails.map(
        (ld) =>
          `https://seagram-api.herokuapp.com/api/LectureDetails/${ld.id}/material`
      );
      request = urls.map((url) =>
        fetch(url).then((response) => response.json())
      );

      const materials = await Promise.all(request).then((datas) => {
        const result = [];
        datas.forEach((data) => {
          result.push(data);
        });
        return result;
      });
      // console.log(materials);

      const newLectures = lectures.map((lecture, idx) => {
        return {
          ...lecture,
          lectureDetails: lectureDetails[idx],
          material: materials[idx],
        };
      });
      // console.log(newLectures);
      dispatch(enrolledCourseActions.setLectures(newLectures));
      setIsLoading(false);
    };
    const getQuiz = async () => {};
    getLectures();
  }, []);

  let LectureList;
  if (!isLoading) {
    LectureList = lectures.map((lecture) => <Lecture {...lecture} />);
  }

  return (
    <>
      <div className={`${styles.course_information}`}>
        <div className="d-flex justify-content-between align-items-center">
          <h1>{props.state.title}</h1>
          <span>{props.state.instructor}</span>
        </div>
        <div className={`${styles.status}`}>Enrolled</div>
        <div className={`${styles.divider}`}></div>
        <div className={`${styles.description}`}>
          <div className={`${styles.description_title}`}>
            <h2>Description</h2>
          </div>
          <div className={`${styles.description_text}`}>
            <p>{props.state.description}</p>
          </div>
        </div>
        <div className={`${styles.divider}`}></div>
        <div className={`${styles.lecture}`}>
          <h2>Lecture</h2>
          <ul>
            {isLoading && Spinner}
            {!isLoading && LectureList}
          </ul>
        </div>
        <div className={`${styles.divider}`}></div>
        <div className={`${styles.quiz}`}>
          <h2>Quiz</h2>
          <ul>
            <li>Quiz 1</li>
            <li>Quiz 2</li>
            <li>Quiz 3</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default EnrolledCourseDetails;
