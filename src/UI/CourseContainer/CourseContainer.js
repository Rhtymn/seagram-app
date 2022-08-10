import React from 'react';
import styles from './CourseContainer.module.css';

const CourseContainer = (props) => {
  return (
    <li className={`${styles.course_container}`}>
        <div className={`${styles.coloured}`}></div>
            <div className={`${styles.course_information}`}>
            <h2>{props.courseName}</h2>
            <span>{props.instructor}</span>
            {props.children}
        </div>
    </li>
  )
}

export default CourseContainer