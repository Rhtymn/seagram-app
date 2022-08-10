import React from 'react';
import styles from './StudentCourse.module.css';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';
import CourseListContainer from '../../UI/CourseListContainer/CourseListContainer';
import CourseContainer from '../../UI/CourseContainer/CourseContainer';

const VerifiedCourse = (props) => {
  return <CourseContainer {...props}>
  </CourseContainer>;
}

const StudentCourse = () => {
  return (
    <ContentContainer>
      <CourseListContainer listName="Verified Course">
        <VerifiedCourse courseName="Machine Learning" instructor="Alan Turing"/>
        <VerifiedCourse courseName="Machine Learning" instructor="Alan Turing"/>
        <VerifiedCourse courseName="Machine Learning" instructor="Alan Turing"/>
        <VerifiedCourse courseName="Machine Learning" instructor="Alan Turing"/>
      </CourseListContainer>
    </ContentContainer>
  )
}

export default StudentCourse