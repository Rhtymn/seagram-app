import React from 'react';
import styles from './CourseListContainer.module.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { uiActions } from '../../store/ui-slice';

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

const Option = (props) => {
    const optionClasses = props.active === props.children ? `${styles.option} ${styles.active}` : `${styles.option}`;
    const optionSelectedHandler = () => {
      props.onSelected(props.children);
    }

    return <div className={optionClasses} onClick={optionSelectedHandler}>
      <input type="radio" className='radio' id='option5' name='category'></input>
      <label for="option5">{props.children}</label>
    </div>
}

const SelectContainer = (props) => {
  const optionClasses = props.isShowOption ? `${styles.options_container} ${styles.active}` : `${styles.options_container}`;

  return <div className={`${styles.select_container}`}>
    <div className={`${styles.select_box}`}>
      <div className={optionClasses}>
        {props.children}
      </div>
      <div className={`${styles.selected}`} onClick={props.onToggleOption}>
        <span>{props.selected}</span>
        <i class="fa-solid fa-caret-down"></i>
      </div>
    </div>
  </div>
}


const CourseListContainer = (props) => {
  const dispatch = useDispatch();
  const selectedRow = useSelector((state)=>state.ui.selectedRowNumber);
  const isShowRowOption = useSelector((state)=>state.ui.isShowRowOption);
  const toggleRowOptionHandler = () => {
    dispatch(uiActions.toggleRowOption());
  }
  const rowOptionSelected = (rowNumber) => {
    dispatch(uiActions.setSelectedRowNumber(rowNumber));
    dispatch(uiActions.toggleRowOption());
  }

  return (
    <div className={`${styles.enrolledCourse_container}`}>
        <h1>{props.listName}</h1>
        <ul>
            {props.children}
        </ul>
        <div className={`${styles.courseList_actions}`}>
          <SelectContainer selected={selectedRow} isShowOption={isShowRowOption} onToggleOption={toggleRowOptionHandler}>
              <Option onSelected={rowOptionSelected} active={selectedRow}>5</Option>
              <Option onSelected={rowOptionSelected} active={selectedRow}>10</Option>
              <Option onSelected={rowOptionSelected} active={selectedRow}>25</Option>
          </SelectContainer>
          <Pagination/>
        </div>
    </div>
  )
}

export default CourseListContainer;