import React from 'react';
import ReactDOM from 'react-dom';
import styles from './CourseDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CourseDetails = () => {
  const dispatch = useDispatch();
  const courseInfo = useSelector((state)=>state.ui.activeCourseDetails);
  const toggleCourseDetails = () => {
    dispatch(uiActions.toggleCourseDetails());
  }

  return (ReactDOM.createPortal(
    <div className={`${styles.course_details_container}`}>
      <div className={`${styles.course_details_actions}`} onClick={toggleCourseDetails}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div className={`${styles.course_information}`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h1>{courseInfo.courseName}</h1>
          <span>{courseInfo.instructor}</span>
        </div>
        <div className={`${styles.divider}`}></div>
        <div className={`${styles.description}`}>
          <h2>Description</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Nibh nisl condimentum id venenatis a condimentum vitae 
            sapien pellentesque. Vitae ultricies leo integer malesuada.
          </p>
        </div>
        <button>Enroll</button>
      </div>
    </div>
  ,document.getElementById("course-details-modal")))
}

export default CourseDetails