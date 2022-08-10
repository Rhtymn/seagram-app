import React from 'react';
import styles from './StudentDashboard.module.css';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';

const StudentDashboard = () => {
  return (
    <ContentContainer>
      <div className={`${styles.enrolledCourse_container}`}>
        <h1>Enrolled Course</h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </ContentContainer>
  )
}

export default StudentDashboard