import React, { useState } from "react";
import styles from "./EnrolledCourseDetails.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          </div>
        </div>
        <div className={`${styles.lecture__link}`}>
          <a href="#">Learn</a>
        </div>
      </div>
    </li>
  );
};

const EnrolledCourseDetails = (props) => {
  const params = useParams();
  const lectures = useSelector((state) => state.enrolledCourse.lectures);
  const relatedLectures = lectures.filter(
    (lecture) => lecture.courseId === params.courseId
  );
  const Spinner = (
    <div class="spinner-grow text-secondary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
  const LectureList = relatedLectures.map((lecture) => (
    <Lecture key={lecture.id} {...lecture} />
  ));
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
            {props.lectureIsLoad && Spinner}
            {LectureList}
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
