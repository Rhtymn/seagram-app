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

  return (
    <div className={`${styles.enrolledCourse_container}`}>
        <h1>{props.listName}</h1>
        <ul>
            {props.children}
        </ul>
        <div className={`${styles.courseList_actions}`}>
          <Pagination/>
          <SelectContainer label={"Rows per page:"} selected="5">
            <Options active={true}>
              <OptionItem>5</OptionItem>
              <OptionItem>10</OptionItem>
              <OptionItem>15</OptionItem>
            </Options>
          </SelectContainer>
        </div>
    </div>
  )
}

export default CourseListContainer;