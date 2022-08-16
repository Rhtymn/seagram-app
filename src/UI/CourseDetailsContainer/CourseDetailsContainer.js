import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import styles from './CourseDetailsContainer.module.css';

const CourseDetailsContainer = (props) => {
  return (ReactDOM.createPortal(
    <div className={`${styles.course_details_container}`}>
      <div className={`${styles.course_details_actions}`} onClick={props.toggle}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      {props.children}
    </div>
  ,document.getElementById("course-details-modal")))
}

export default CourseDetailsContainer;