import React from 'react';
import styles from './CourseContainer.module.css';
import { useDispatch } from 'react-redux';
import { uiStudentActions } from '../../store/ui-student-slice';

const CourseContainer = (props) => {
  const dispatch = useDispatch();
  const courseClickHandler = () => {
    const courseDetails = {
      id: props.id,
      type: props.type,
      courseName: props.courseName,
      instructor: props.instructor,
      progress: props.progress,
    }
    dispatch(uiStudentActions.setActiveCourseDetails(courseDetails));
    dispatch(uiStudentActions.toggleCourseDetails());
  }

  return (
    <li className={`${styles.course_container}`} onClick={courseClickHandler}>
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