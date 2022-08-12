import React from 'react'
import styles from "./QuizQuestion.module.css"

const QuizQuestion = (props) => {
  return (
    <div className={`${styles.quiz_question}`}>
            <div className={`${styles.number}`}>1</div>
            {props.children}
    </div>
  )
}

export default QuizQuestion