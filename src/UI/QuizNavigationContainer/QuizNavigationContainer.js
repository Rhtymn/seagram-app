import React from 'react'
import styles from './QuizNavigationContainer.module.css';

const QuizNavigationContainer = (props) => {
  return (
    <div className={`${styles.quiz_navigation}`}>
        <ul>
            {props.children}
        </ul>
        <button>Submit</button>
    </div>
  )
}

export default QuizNavigationContainer