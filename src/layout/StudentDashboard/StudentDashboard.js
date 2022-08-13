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
  const dispatch = useDispatch();
  const isShowCourseDetails = useSelector((state)=>state.uiStudent.isShowCourseDetails);
  const enrolledCourse = useSelector((state) => state.course.enrolledCourse);

  const selectedRowNumber = useSelector((state)=>state.enrolledCourse.selectedRowNumber);
  const selectedSortBy = useSelector((state)=>state.enrolledCourse.selectedSortBy);
  const isShowRowOption = useSelector((state)=>state.enrolledCourse.isShowRowOption);
  const isShowSortOption = useSelector((state)=>state.enrolledCourse.isShowSortOption);
  const activePage = useSelector((state)=>state.enrolledCourse.activePage);
  const totalCourse = enrolledCourse.length;
  const maxPage = Math.ceil(totalCourse/ parseInt(selectedRowNumber)); 

  const selectSortClickHandler = () => {
    dispatch(enrolledCourseActions.toggleSortOption());
  }
  const optionSortClickHandler = (sortBy) => {
    dispatch(enrolledCourseActions.setSelectedSortBy(sortBy));
  }
  const selectRowClickHandler = () => {
    dispatch(enrolledCourseActions.toggleRowOption());
  }
  const optionRowClickHandler = (rowNumber) => {
    dispatch(enrolledCourseActions.setSelectedRowNumber(rowNumber));
  }
  const nextPageHandler = () => {
    if (activePage + 1 > maxPage) return;
    dispatch(enrolledCourseActions.setActivePage(activePage + 1));
  } 
  const prevPageHandler = () => {
    if (activePage - 1 === 0) return;
    dispatch(enrolledCourseActions.setActivePage(activePage - 1));
  }

  const sortedEnrolledCourse = sortCourse(enrolledCourse,selectedSortBy);
  const start = activePage*selectedRowNumber - selectedRowNumber;
  const end = activePage*selectedRowNumber;
  const enrolledCourseList = sortedEnrolledCourse.slice(start,end).map((course) => <EnrolledCourse key={course.id} {...course}/>)

  const ctx = {nextPageHandler, prevPageHandler}

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
      <SelectContainer label={"Course per page:"} selected={selectedRowNumber} onSelectClick={selectRowClickHandler}>
          <Options active={isShowRowOption}>
            <OptionItem onOptionClick={optionRowClickHandler}>5</OptionItem>
            <OptionItem onOptionClick={optionRowClickHandler}>10</OptionItem>
            <OptionItem onOptionClick={optionRowClickHandler}>15</OptionItem>
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