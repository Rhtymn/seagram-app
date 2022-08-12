import React from 'react';
import styles from './StudentCourse.module.css';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';
import CourseListContainer from '../../UI/CourseListContainer/CourseListContainer';
import CourseContainer from '../../UI/CourseContainer/CourseContainer';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import CourseDetailsContainer from '../../UI/CourseDetailsContainer/CourseDetailsContainer';
import VerifiedCourseDetails from '../../components/VerifiedCourseDetails/VerifiedCourseDetails';
import { verifiedCourseActions } from '../../store/verifiedCourse-slice';
import {sortCourse} from "../../Helper"

const VerifiedCourse = (props) => {
  return <CourseContainer {...props}>
  </CourseContainer>;
}

const StudentCourse = () => {
  const dispatch = useDispatch();
  const isShowCourseDetails = useSelector((state)=>state.ui.isShowCourseDetails);
  const verifiedCourse = useSelector((state) => state.course.verifiedCourse);
  

  const selectedRowNumber = useSelector((state)=>state.verifiedCourse.selectedRowNumber);
  const selectedSortBy = useSelector((state)=>state.verifiedCourse.selectedSortBy);
  const isShowRowOption = useSelector((state)=>state.verifiedCourse.isShowRowOption);
  const isShowSortOption = useSelector((state)=>state.verifiedCourse.isShowSortOption);

  const selectSortClickHandler = () => {
    dispatch(verifiedCourseActions.toggleSortOption());
  }
  const optionSortClickHandler = (sortBy) => {
    dispatch(verifiedCourseActions.setSelectedSortBy(sortBy));
  }
  const selectRowClickHandler = () => {
    dispatch(verifiedCourseActions.toggleRowOption());
  }
  const optionRowClickHandler = (rowNumber) => {
    dispatch(verifiedCourseActions.setSelectedRowNumber(rowNumber));
  }

  const ctx = {
    selectedRowNumber,selectedSortBy,isShowRowOption,isShowSortOption,
    selectSortClickHandler,optionSortClickHandler,selectRowClickHandler,optionRowClickHandler
  }

  const sortedVerifiedCourse = sortCourse(verifiedCourse, selectedSortBy);
  const verifiedCourseList = sortedVerifiedCourse.map((course) => <VerifiedCourse key={course.id} {...course}/>)

  const Content = <ContentContainer>
    <CourseListContainer listName="Verified Course" {...ctx}>
      {verifiedCourseList}
    </CourseListContainer>
  </ContentContainer>

  const CourseDetails = <CourseDetailsContainer>
    <VerifiedCourseDetails/>
  </CourseDetailsContainer>
  
  return (<>
    {!isShowCourseDetails && Content}
    {isShowCourseDetails && CourseDetails}
  </>)
}

export default StudentCourse