import React from 'react'
import styles from './QuizNavigationContainer.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiStudentActions } from '../../store/ui-student-slice';

const QuizNavigationContainer = (props) => {
  const dispatch = useDispatch();
  const isShowNavigation = useSelector((state)=>state.uiStudent.isShowQuizNavigation);
  const navigationClasses = isShowNavigation ? `${styles.quiz_navigation} ${styles.active}` : `${styles.quiz_navigation}`;

  const toggleNavigationHandler = () => {
    dispatch(uiStudentActions.toggleQuizNavigation());
  }

  return (
    <div className={navigationClasses}>
        <div className={`${styles.actions}`} onClick={toggleNavigationHandler}>
          <i class="fa-solid fa-caret-left"></i>
        </div>
        <ul>
            {props.children}
        </ul>
        <button>Submit</button>
    </div>
  )
}

export default QuizNavigationContainer