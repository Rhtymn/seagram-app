import React from 'react';
import styles from './StudentDashboard.module.css';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';
import CourseListContainer from '../../UI/CourseListContainer/CourseListContainer';
import CourseContainer from '../../UI/CourseContainer/CourseContainer';
import { useDispatch, useSelector} from 'react-redux';
import CourseDetailsContainer from '../../UI/CourseDetailsContainer/CourseDetailsContainer';
import EnrolledCourseDetails from '../../components/EnrolledCourseDetails/EnrolledCourseDetails';
import { enrolledCourseActions } from '../../store/enrolledCourse-slice';
import { uiStudentActions } from '../../store/ui-student-slice';
import {sortCourse} from "../../Helper"

import useSort from '../../hooks/useSort';
import usePagination from '../../hooks/usePagination';

import SelectContainer from '../../UI/SelectContainer/SelectContainer';
import Options from '../../UI/Options/Options';
import OptionItem from '../../UI/Options/OptionItem';

const ProgressBar = (props) => {
  return <div className={`${styles.course_progress}`}>
  <div className={`${styles.progress_bar}`}></div>
  <span>{props.progress}</span>
</div>
}

const EnrolledCourse = (props) => {
  const dispatch = useDispatch();
  const courseClickHandler = () => {
    const courseDetails = {
      id: props.id,
      type: props.type,
      courseName: props.courseName,
      instructor: props.instructor,
      progress: props.progress,
    }
    dispatch(uiStudentActions.setActiveCourseDetails(courseDetails));
    dispatch(uiStudentActions.toggleCourseDetails());
  }

  return <CourseContainer {...props} courseType="enrolled" onClickCourse={courseClickHandler}>
        <ProgressBar progress={props.progress}/>
    </CourseContainer>
}

const StudentDashboard = () => {
  const isShowCourseDetails = useSelector((state)=>state.uiStudent.isShowCourseDetails);
  const enrolledCourse = useSelector((state) => state.course.enrolledCourse);
  const {selectedSortBy, isShowSortOption, selectSortClickHandler, optionSortClickHandler} = useSort("enrolledCourse", enrolledCourseActions);
  
  const pagination = usePagination("enrolledCourse", enrolledCourseActions, enrolledCourse);
  const sortedCourseProgram = sortCourse(enrolledCourse,selectedSortBy);
  
  const start = pagination.activePage*pagination.selectedRowNumber - pagination.selectedRowNumber;
  const end = pagination.activePage*pagination.selectedRowNumber;
  const enrolledCourseList = sortedCourseProgram.slice(start,end).map((course) => <EnrolledCourse key={course.id} {...course}/>)

  const ctx = {
    nextPageHandler: pagination.nextPageHandler,
    prevPageHandler: pagination.prevPageHandler,
    start,
    end,
    totalCourse: pagination.totalCourse
  };
  
  const Content = <ContentContainer>
    <CourseListContainer listName="Enrolled Course" {...ctx}>
      <SelectContainer label="Sort by:" selected={selectedSortBy} onSelectClick={selectSortClickHandler}>
        <Options active={isShowSortOption}>
          <OptionItem onOptionClick={optionSortClickHandler}>Name</OptionItem>
          <OptionItem onOptionClick={optionSortClickHandler}>Instructor</OptionItem>
          <OptionItem onOptionClick={optionSortClickHandler}>Progress</OptionItem>
        </Options>
      </SelectContainer>
      {enrolledCourseList}
      <SelectContainer label={"Course per page:"} selected={pagination.selectedRowNumber} onSelectClick={pagination.selectRowClickHandler}>
          <Options active={pagination.isShowRowOption}>
            <OptionItem onOptionClick={pagination.optionRowClickHandler}>5</OptionItem>
            <OptionItem onOptionClick={pagination.optionRowClickHandler}>10</OptionItem>
            <OptionItem onOptionClick={pagination.optionRowClickHandler}>15</OptionItem>
          </Options>
      </SelectContainer>
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