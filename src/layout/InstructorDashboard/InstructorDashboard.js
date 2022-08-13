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

const CourseProgram = (props) => {
  return <CourseContainer {...props} courseType="courseProgram">
  </CourseContainer>
}

const InstructorDashboard = () => {
  const dispatch = useDispatch();
  const courseProgram = useSelector((state)=>state.course.courseProgram);

  const selectedRowNumber = useSelector((state)=>state.courseProgram.selectedRowNumber);
  const selectedSortBy = useSelector((state)=>state.courseProgram.selectedSortBy);
  const isShowRowOption = useSelector((state)=>state.courseProgram.isShowRowOption);
  const isShowSortOption = useSelector((state)=>state.courseProgram.isShowSortOption);
  const activePage = useSelector((state)=>state.courseProgram.activePage);
  const totalCourse = courseProgram.length;
  const maxPage = Math.ceil(totalCourse/ parseInt(selectedRowNumber)); 

  const selectSortClickHandler = () => {
    dispatch(courseProgramActions.toggleSortOption());
  }
  const optionSortClickHandler = (sortBy) => {
    dispatch(courseProgramActions.setSelectedSortBy(sortBy));
  }
  const selectRowClickHandler = () => {
    dispatch(courseProgramActions.toggleRowOption());
  }
  const optionRowClickHandler = (rowNumber) => {
    dispatch(courseProgramActions.setSelectedRowNumber(rowNumber));
  }
  const nextPageHandler = () => {
    if (activePage + 1 > maxPage) return;
    dispatch(courseProgramActions.setActivePage(activePage + 1));
  } 
  const prevPageHandler = () => {
    if (activePage - 1 === 0) return;
    dispatch(courseProgramActions.setActivePage(activePage - 1));
  }

  const sortedCourseProgram = sortCourse(courseProgram,selectedSortBy);
  const start = activePage*selectedRowNumber - selectedRowNumber;
  const end = activePage*selectedRowNumber;
  const courseProgramList = sortedCourseProgram.slice(start,end).map((course) => <CourseProgram key={course.id} {...course}/>)

  const ctx = {nextPageHandler,prevPageHandler, start, end, totalCourse};
  const Content = <ContentContainer>
    <CourseListContainer listName="Course Program" {...ctx}>
      <SelectContainer label="Sort by:" selected={selectedSortBy} onSelectClick={selectSortClickHandler}>
        <Options active={isShowSortOption}>
          <OptionItem onOptionClick={optionSortClickHandler}>Name</OptionItem>
          <OptionItem onOptionClick={optionSortClickHandler}>Enrolled</OptionItem>
        </Options>
      </SelectContainer>
      {courseProgramList}
      <SelectContainer label={"Course per page:"} selected={selectedRowNumber} onSelectClick={selectRowClickHandler}>
          <Options active={isShowRowOption}>
            <OptionItem onOptionClick={optionRowClickHandler}>5</OptionItem>
            <OptionItem onOptionClick={optionRowClickHandler}>10</OptionItem>
            <OptionItem onOptionClick={optionRowClickHandler}>15</OptionItem>
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