import React from 'react';
import styles from './StudentCourse.module.css';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';

const StudentCourse = () => {
  return (
    <ContentContainer><div className={`${styles.student_course}`}>StudentCourse</div></ContentContainer>
  )
}

export default StudentCourse