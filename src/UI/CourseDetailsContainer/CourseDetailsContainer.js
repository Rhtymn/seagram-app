import React from 'react';
import ReactDOM from 'react-dom';
import styles from './CourseDetailsContainer.module.css';
import { useDispatch } from 'react-redux';
import { uiStudentActions } from '../../store/ui-student-slice';

const CourseDetailsContainer = (props) => {
  const dispatch = useDispatch();
  const toggleCourseDetails = () => {
    dispatch(uiStudentActions.toggleCourseDetails());
  }

  return (ReactDOM.createPortal(
    <div className={`${styles.course_details_container}`}>
      <div className={`${styles.course_details_actions}`} onClick={toggleCourseDetails}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      {props.children}
    </div>
  ,document.getElementById("course-details-modal")))
}

export default CourseDetailsContainer;