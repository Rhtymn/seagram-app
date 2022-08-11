import React from 'react';
import styles from './StudentDashboard.module.css';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';
import CourseListContainer from '../../UI/CourseListContainer/CourseListContainer';
import CourseContainer from '../../UI/CourseContainer/CourseContainer';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import CourseDetailsContainer from '../../UI/CourseDetailsContainer/CourseDetailsContainer';
import EnrolledCourseDetails from '../../components/EnrolledCourseDetails/EnrolledCourseDetails';

const ProgressBar = (props) => {
  return <div className={`${styles.course_progress}`}>
  <div className={`${styles.progress_bar}`}></div>
  <span>{props.progress}</span>
</div>
}

const EnrolledCourse = (props) => {
  return <CourseContainer {...props}>
        <ProgressBar progress={props.progress}/>
    </CourseContainer>
}

const StudentDashboard = () => {
  const isShowCourseDetails = useSelector((state)=>state.ui.isShowCourseDetails);
  const enrolledCourse = useSelector((state) => state.course.enrolledCourse);
  const enrolledCourseList = enrolledCourse.map((course) => <EnrolledCourse key={course.id} {...course}/>)

  const Content = <ContentContainer>
    <CourseListContainer listName="Enrolled Course">
      {enrolledCourseList}
    </CourseListContainer>
  </ContentContainer>

  const CourseDetails = <CourseDetailsContainer>
    <EnrolledCourseDetails/>
  </CourseDetailsContainer>

  return (
    <>
      {!isShowCourseDetails && Content}
      {isShowCourseDetails && CourseDetails}
    </>
  )
}

export default StudentDashboard