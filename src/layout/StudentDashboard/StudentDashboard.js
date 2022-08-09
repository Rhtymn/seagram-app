import React from 'react';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';
import styles from './StudentDashboard.module.css';

const StudentDashboard = () => {
  return (
    <ContentContainer><div className={`${styles.student_dashboard}`}>StudentDashboard</div></ContentContainer>
  )
}

export default StudentDashboard