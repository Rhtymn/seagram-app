import React from 'react';
import styles from './CourseListContainer.module.css';

const Pagination = (props) => {
  const prevClasses = props.currentPage === 1 ? `${styles.prev} ${styles.disable}` : `${styles.prev}`;
  const nextClasses = props.currentPage === props.maxPage ? `${styles.next} ${styles.disable}` : `${styles.next}`;
  
  return <div className={`${styles.pagination}`}>
    <div className={prevClasses} onClick={props.onPrevPage}>
      <i class="fa-solid fa-circle-chevron-left"></i>
    </div>
    <div className={nextClasses} onClick={props.onNextPage}>
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
          <div className={`${styles.page}`}>{props.pageInformation}</div>
          <Pagination onNextPage={props.nextPageHandler} onPrevPage={props.prevPageHandler} currentPage={props.currentPage} maxPage={props.maximumPage}/>
        </div>
    </div>
  )
}

export default CourseListContainer;