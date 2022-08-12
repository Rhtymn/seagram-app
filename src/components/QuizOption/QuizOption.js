import React from 'react'
import styles from './QuizOption.module.css'

const QuizOption = (props) => {
  return (
    <div className={`${styles.quiz_option}`}>
        <ul>
            {props.children}
        </ul>
    </div>
  )
}

export default QuizOption