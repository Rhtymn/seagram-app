import React from 'react';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';
import CourseListContainer from '../../UI/CourseListContainer/CourseListContainer';
import styles from './InstructorDashboard.module.css';
import {useDispatch, useSelector} from 'react-redux'
import CourseContainer from '../../UI/CourseContainer/CourseContainer';
import { courseProgramActions } from '../../store/courseProgram-slice';
import {sortCourse} from "../../Helper"
import SelectContainer from '../../UI/SelectContainer/SelectContainer';
import Options from '../../UI/Options/Options';
import OptionItem from '../../UI/Options/OptionItem';
import useSort from '../../hooks/useSort';
import usePagination from "../../hooks/usePagination";

const CourseProgram = (props) => {
  return <CourseContainer {...props} courseType="courseProgram">
  </CourseContainer>
}

const InstructorDashboard = () => {
  const courseProgram = useSelector((state)=>state.course.courseProgram);
  const {selectedSortBy, isShowSortOption, selectSortClickHandler, optionSortClickHandler} = useSort("courseProgram", courseProgramActions);
  const pagination = usePagination("courseProgram", courseProgramActions, courseProgram)
  const sortedCourseProgram = sortCourse(courseProgram,selectedSortBy);
  
  const start = pagination.activePage*pagination.selectedRowNumber - pagination.selectedRowNumber;
  const end = pagination.activePage*pagination.selectedRowNumber;
  const courseProgramList = sortedCourseProgram.slice(start,end).map((course) => <CourseProgram key={course.id} {...course}/>)

  const ctx = {
    nextPageHandler: pagination.nextPageHandler,
    prevPageHandler: pagination.prevPageHandler,
    start,
    end,
    totalCourse: pagination.totalCourse
  };

  const Content = <ContentContainer>
    <CourseListContainer listName="Course Program" {...ctx}>
      <SelectContainer label="Sort by:" selected={selectedSortBy} onSelectClick={selectSortClickHandler}>
        <Options active={isShowSortOption}>
          <OptionItem onOptionClick={optionSortClickHandler}>Name</OptionItem>
          <OptionItem onOptionClick={optionSortClickHandler}>Enrolled</OptionItem>
        </Options>
      </SelectContainer>
      {courseProgramList}
      <SelectContainer label={"Course per page:"} selected={pagination.selectedRowNumber} onSelectClick={pagination.selectRowClickHandler}>
          <Options active={pagination.isShowRowOption}>
            <OptionItem onOptionClick={pagination.optionRowClickHandler}>5</OptionItem>
            <OptionItem onOptionClick={pagination.optionRowClickHandler}>10</OptionItem>
            <OptionItem onOptionClick={pagination.optionRowClickHandler}>15</OptionItem>
          </Options>
      </SelectContainer>
    </CourseListContainer>
  </ContentContainer>

  return (
    <>
      {Content}
    </>
  )
}

export default InstructorDashboard