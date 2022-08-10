import React from 'react';
import styles from './CourseListContainer.module.css';

const CourseListContainer = (props) => {
  return (
    <div className={`${styles.enrolledCourse_container}`}>
        <h1>{props.listName}</h1>
        <ul>
            {props.children}
        </ul>
    </div>
  )
}

export default CourseListContainer