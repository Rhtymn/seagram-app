import React from 'react';
import styles from './CourseListContainer.module.css';
import SelectContainer from '../SelectContainer/SelectContainer';
import Options from '../Options/Options';
import OptionItem from '../Options/OptionItem';

const Pagination = (props) => {
  return <div className={`${styles.pagination}`}>
    <div className={`${styles.prev}`} onClick={props.onPrevPage}>
      <i class="fa-solid fa-circle-chevron-left"></i>
    </div>
    <div className={`${styles.next}`} onClick={props.onNextPage}>
      <i class="fa-solid fa-circle-chevron-right"></i>
    </div>
  </div>
}

const CourseListContainer = (props) => {
  const courseType = props.children[0].props.type;

  return (
    <div className={`${styles.enrolledCourse_container}`}>
        <h1>{props.listName}</h1>
        <SelectContainer label="Sort by:" selected={props.selectedSortBy} onSelectClick={props.selectSortClickHandler}>
          <Options active={props.isShowSortOption}>
            <OptionItem onOptionClick={props.optionSortClickHandler}>Name</OptionItem>
            <OptionItem onOptionClick={props.optionSortClickHandler}>Instructor</OptionItem>
            {courseType === 'enrolled' && <OptionItem onOptionClick={props.optionSortClickHandler}>Progress</OptionItem>}
          </Options>
        </SelectContainer>
        <ul>
            {props.children}
        </ul>
        <div className={`${styles.courseList_actions}`}>
          <SelectContainer label={"Course per page:"} selected={props.selectedRowNumber} onSelectClick={props.selectRowClickHandler}>
            <Options active={props.isShowRowOption}>
              <OptionItem onOptionClick={props.optionRowClickHandler}>5</OptionItem>
              <OptionItem onOptionClick={props.optionRowClickHandler}>10</OptionItem>
              <OptionItem onOptionClick={props.optionRowClickHandler}>15</OptionItem>
            </Options>
          </SelectContainer>
          <div className={`${styles.page}`}>{`${props.start+1}-${props.end} of ${props.totalCourse}`}</div>
          <Pagination onNextPage={props.nextPageHandler} onPrevPage={props.prevPageHandler}/>
        </div>
    </div>
  )
}

export default CourseListContainer;