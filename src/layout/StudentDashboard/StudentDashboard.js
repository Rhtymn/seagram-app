import React from 'react';
import styles from './StudentDashboard.module.css';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';
import CourseListContainer from '../../UI/CourseListContainer/CourseListContainer';
import CourseContainer from '../../UI/CourseContainer/CourseContainer';

const ProgressBar = (props) => {
  return <div className={`${styles.course_progress}`}>
  <div className={`${styles.progress_bar}`}></div>
  <span>{props.progress}</span>
</div>
}

const EnrolledCourse = ({courseName,instructor,progress}) => {
  return <CourseContainer courseName={courseName} instructor={instructor}>
        <ProgressBar progress={progress}/>
    </CourseContainer>
}

const StudentDashboard = () => {
  return (
    <ContentContainer>
      <CourseListContainer listName="Enrolled Course">
        <EnrolledCourse courseName="Machine Learning" instructor="Alan Turing" progress="35%"/>
        <EnrolledCourse courseName="Machine Learning" instructor="Alan Turing" progress="35%"/>
        <EnrolledCourse courseName="Machine Learning" instructor="Alan Turing" progress="35%"/>
        <EnrolledCourse courseName="Machine Learning" instructor="Alan Turing" progress="35%"/>
      </CourseListContainer>
    </ContentContainer>
  )
}

export default StudentDashboard