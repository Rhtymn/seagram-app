import React from 'react';
import styles from './CourseListContainer.module.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { uiActions } from '../../store/ui-slice';
import SelectContainer from '../SelectContainer/SelectContainer';
import Options from '../Options/Options';
import OptionItem from '../Options/OptionItem';

const Pagination = () => {
  return <div className={`${styles.pagination}`}>
    <div className={`${styles.prev}`}>
      <i class="fa-solid fa-circle-chevron-left"></i>
    </div>
    <div className={`${styles.next}`}>
      <i class="fa-solid fa-circle-chevron-right"></i>
    </div>
  </div>
}

const CourseListContainer = (props) => {
  const courseType = props.children[0].props.type
  const dispatch = useDispatch();
  const selectedRowNumber = useSelector((state)=>state.ui.selectedRowNumber);
  const activeRowOptions = useSelector((state)=>state.ui.isShowRowOption);
  const selectRowClickHandler = () => {
    dispatch(uiActions.toggleRowOption());
  }
  const optionRowClickHandler = (numberRow) => {
    dispatch(uiActions.setSelectedRowNumber(numberRow));
  }

  const selectedSortBy = useSelector((state)=>state.ui.selectedSortBy);
  const activeSortOptions = useSelector((state)=>state.ui.isShowSortOptions);
  const selectSortClickHandler = () => {
    dispatch(uiActions.toggleSortOption());
  }
  const optionSortClickHandler = (sortBy) => {
    dispatch(uiActions.setSelectedSortBy(sortBy));
  }

  return (
    <div className={`${styles.enrolledCourse_container}`}>
        <h1>{props.listName}</h1>
        <SelectContainer label="Sort by:" selected={selectedSortBy} onSelectClick={selectSortClickHandler}>
          <Options active={activeSortOptions}>
            <OptionItem onOptionClick={optionSortClickHandler}>Name</OptionItem>
            <OptionItem onOptionClick={optionSortClickHandler}>Instructor</OptionItem>
            {courseType === 'enrolled' && <OptionItem onOptionClick={optionSortClickHandler}>Progress</OptionItem>}
          </Options>
        </SelectContainer>
        <ul>
            {props.children}
        </ul>
        <div className={`${styles.courseList_actions}`}>
          <SelectContainer label={"Rows per page:"} selected={selectedRowNumber} onSelectClick={selectRowClickHandler}>
            <Options active={activeRowOptions}>
              <OptionItem onOptionClick={optionRowClickHandler}>5</OptionItem>
              <OptionItem onOptionClick={optionRowClickHandler}>10</OptionItem>
              <OptionItem onOptionClick={optionRowClickHandler}>15</OptionItem>
            </Options>
          </SelectContainer>
          <Pagination/>
        </div>
    </div>
  )
}

export default CourseListContainer;