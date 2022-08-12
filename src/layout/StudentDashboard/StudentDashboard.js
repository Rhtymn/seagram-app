import React from 'react';
import styles from './StudentDashboard.module.css';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';
import CourseListContainer from '../../UI/CourseListContainer/CourseListContainer';
import CourseContainer from '../../UI/CourseContainer/CourseContainer';
import { useDispatch, useSelector} from 'react-redux';
import CourseDetailsContainer from '../../UI/CourseDetailsContainer/CourseDetailsContainer';
import EnrolledCourseDetails from '../../components/EnrolledCourseDetails/EnrolledCourseDetails';
import { enrolledCourseActions } from '../../store/enrolledCourse-slice';
import {sortCourse} from "../../Helper"

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
  const dispatch = useDispatch();
  const isShowCourseDetails = useSelector((state)=>state.ui.isShowCourseDetails);
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

  const ctx = {
    selectedRowNumber,selectedSortBy,isShowRowOption,isShowSortOption,maxPage,activePage,start,end,totalCourse,
    selectSortClickHandler,optionSortClickHandler,selectRowClickHandler,optionRowClickHandler,
    nextPageHandler, prevPageHandler
  }

  const Content = <ContentContainer>
    <CourseListContainer listName="Enrolled Course" {...ctx}>
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