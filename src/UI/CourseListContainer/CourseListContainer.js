import React from 'react';
import styles from './CourseListContainer.module.css';

const Pagination = (props) => {
  return <div className={`${styles.pagination}`}>
    <div className={`${styles.prev}`} onClick={props.onPrevPage}>
      <i class="fa-solid fa-circle-chevron-left"></i>
    </div>
    <div className={`${styles.next}`} onClick={props.onNextPage}>
      <i class="fa-solid fa-circle-chevron-right"></i>
    </div>
  </div>
}

const CourseListContainer = (props) => {
  return (
    <div className={`${styles.enrolledCourse_container}`}>
        <h1>{props.listName}</h1>
        {props.children[0]}
        <ul>
            {props.children[1]}
        </ul>
        <div className={`${styles.courseList_actions}`}>
          {props.children[2]}
          <div className={`${styles.page}`}>{`${props.minIdx+1}-${props.maxIdx} of ${props.totalCourse}`}</div>
          <Pagination onNextPage={props.nextPageHandler} onPrevPage={props.prevPageHandler}/>
        </div>
    </div>
  )
}

export default CourseListContainer;