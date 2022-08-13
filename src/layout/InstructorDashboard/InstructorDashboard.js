import React from 'react';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';
import CourseListContainer from '../../UI/CourseListContainer/CourseListContainer';
import styles from './InstructorDashboard.module.css';
import {useDispatch, useSelector} from 'react-redux'
import CourseContainer from '../../UI/CourseContainer/CourseContainer';

const CourseProgram = (props) => {
  return <CourseContainer {...props} courseType="courseProgram">
  </CourseContainer>
}

const InstructorDashboard = () => {
  const dispatch = useDispatch();
  const courseProgram = useSelector((state)=>state.course.courseProgram);
  const courseProgramList = courseProgram.map((course) => <CourseProgram key={course.id} {...course}/>)

  const Content = <ContentContainer>
    <CourseListContainer listName="Course Program">
      {courseProgramList}
    </CourseListContainer>
  </ContentContainer>
  
  return (
    <>
      {Content}
    </>
  )
}

export default InstructorDashboard