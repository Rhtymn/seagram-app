import React from 'react';
import styles from './CourseContainer.module.css';

const CourseContainer = (props) => {
  if (props.courseType === "verified" || props.courseType === "enrolled") {
    return (
      <li className={`${styles.course_container}`} onClick={props.onClickCourse}>
        <div className={`${styles.coloured}`}></div>
            <div className={`${styles.course_information}`}>
            <h2>{props.courseName}</h2>
            <span>{props.instructor}</span>
            {props.children}
        </div>
    </li>
    )
  }

  if (props.courseType === "courseProgram") {
    return (
      <li className={`${styles.course_container}`} onClick={props.onClickCourse}>
        <div className={`${styles.coloured}`}></div>
            <div className={`${styles.course_information}`}>
            <h2>{props.courseName}</h2>
            <span>Enrolled students : {props.enrolledStudent}</span>
            {props.children}
        </div>
    </li>
    )
  }
}

export default CourseContainer