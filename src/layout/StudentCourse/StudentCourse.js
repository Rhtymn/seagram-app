import React from 'react';
import styles from './StudentCourse.module.css';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';
import CourseListContainer from '../../UI/CourseListContainer/CourseListContainer';
import CourseContainer from '../../UI/CourseContainer/CourseContainer';
import { useSelector } from 'react-redux/es/exports';

const VerifiedCourse = (props) => {
  return <CourseContainer {...props}>
  </CourseContainer>;
}

const StudentCourse = () => {
  const verifiedCourse = useSelector((state) => state.course.verifiedCourse);
  const verifiedCourseList = verifiedCourse.map((course) => <VerifiedCourse key={course.id} {...course}/>)

  return (
    <ContentContainer>
      <CourseListContainer listName="Verified Course">
        {verifiedCourseList}
      </CourseListContainer>
    </ContentContainer>
  )
}

export default StudentCourse