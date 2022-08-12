import React from 'react';
import styles from "./QuizQuestionContainer.module.css";
import Button from '../Button/Button';

const QuizQuestionContainer = (props) => {
  return (
    <>
        {props.children}
        <div className={`${styles.quiz_actions}`}>
            <Button>Prev</Button>
            <Button>Next</Button>
        </div>
    </>
    
  )
}

export default QuizQuestionContainer