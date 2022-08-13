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

import useSort from '../../hooks/useSort';
import usePagination from '../../hooks/usePagination';

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
  const isShowCourseDetails = useSelector((state)=>state.uiStudent.isShowCourseDetails);
  const verifiedCourse = useSelector((state) => state.course.verifiedCourse);
  const {selectedSortBy, isShowSortOption, selectSortClickHandler, optionSortClickHandler} = useSort("verifiedCourse", verifiedCourseActions);

  const pagination = usePagination("enrolledCourse", verifiedCourseActions, verifiedCourse);
  const sortedCourseProgram = sortCourse(verifiedCourse,selectedSortBy);
  
  const start = pagination.activePage*pagination.selectedRowNumber - pagination.selectedRowNumber;
  const end = pagination.activePage*pagination.selectedRowNumber;
  const verifiedCourseList = sortedCourseProgram.slice(start,end).map((course) => <VerifiedCourse key={course.id} {...course}/>)

  const ctx = {
    nextPageHandler: pagination.nextPageHandler,
    prevPageHandler: pagination.prevPageHandler,
    start,
    end,
    totalCourse: pagination.totalCourse
  };

  const Content = <ContentContainer>
    <CourseListContainer listName="Verified Course" {...ctx} courseType="verified">
      <SelectContainer label="Sort by:" selected={selectedSortBy} onSelectClick={selectSortClickHandler}>
        <Options active={isShowSortOption}>
          <OptionItem onOptionClick={optionSortClickHandler}>Name</OptionItem>
          <OptionItem onOptionClick={optionSortClickHandler}>Instructor</OptionItem>
        </Options>
      </SelectContainer>
      {verifiedCourseList}
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
    <VerifiedCourseDetails/>
  </CourseDetailsContainer>
  
  return (<>
    {!isShowCourseDetails && Content}
    {isShowCourseDetails && CourseDetails}
  </>)
}

export default StudentCourse