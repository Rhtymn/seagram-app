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
import { uiStudentActions } from '../../store/ui-student-slice';

import SelectContainer from '../../UI/SelectContainer/SelectContainer';
import Options from '../../UI/Options/Options';
import OptionItem from '../../UI/Options/OptionItem';

const VerifiedCourse = (props) => {
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

  return <CourseContainer {...props} courseType="verified" onClickCourse={courseClickHandler}>
  </CourseContainer>;
}

const StudentCourse = () => {
  const dispatch = useDispatch();
  const isShowCourseDetails = useSelector((state)=>state.uiStudent.isShowCourseDetails);
  const verifiedCourse = useSelector((state) => state.course.verifiedCourse);
  
  const selectedRowNumber = useSelector((state)=>state.verifiedCourse.selectedRowNumber);
  const selectedSortBy = useSelector((state)=>state.verifiedCourse.selectedSortBy);
  const isShowRowOption = useSelector((state)=>state.verifiedCourse.isShowRowOption);
  const isShowSortOption = useSelector((state)=>state.verifiedCourse.isShowSortOption);
  const activePage = useSelector((state)=>state.verifiedCourse.activePage);
  const totalCourse = verifiedCourse.length;
  const maxPage = Math.ceil(totalCourse / parseInt(selectedRowNumber)); 

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
  const nextPageHandler = () => {
    if (activePage + 1 > maxPage) return;
    dispatch(verifiedCourseActions.setActivePage(activePage + 1));
  } 
  const prevPageHandler = () => {
    if (activePage - 1 === 0) return;
    dispatch(verifiedCourseActions.setActivePage(activePage - 1));
  }

  const sortedVerifiedCourse = sortCourse(verifiedCourse, selectedSortBy);
  const start = activePage*selectedRowNumber - selectedRowNumber;
  const end = activePage*selectedRowNumber;
  const verifiedCourseList = sortedVerifiedCourse.slice(start,end).map((course) => <VerifiedCourse key={course.id} {...course}/>)

  const ctx = {nextPageHandler, prevPageHandler, start, end, totalCourse}

  const Content = <ContentContainer>
    <CourseListContainer listName="Verified Course" {...ctx} courseType="verified">
      <SelectContainer label="Sort by:" selected={selectedSortBy} onSelectClick={selectSortClickHandler}>
        <Options active={isShowSortOption}>
          <OptionItem onOptionClick={optionSortClickHandler}>Name</OptionItem>
          <OptionItem onOptionClick={optionSortClickHandler}>Instructor</OptionItem>
        </Options>
      </SelectContainer>
      {verifiedCourseList}
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
    <VerifiedCourseDetails/>
  </CourseDetailsContainer>
  
  return (<>
    {!isShowCourseDetails && Content}
    {isShowCourseDetails && CourseDetails}
  </>)
}

export default StudentCourse