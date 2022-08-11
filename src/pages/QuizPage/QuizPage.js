import React from 'react';
import styles from './QuizPage.module.css';
import Button from "../../UI/Button/Button";

const QuizPage = () => {
    return (
        <div className={`${styles.quiz_page}`}>
            <div className={`${styles.quiz_container}`}>
                <div className={`${styles.quiz_wrapper}`}>
                    <div className={`${styles.quiz_question}`}>
                        <div className={`${styles.number}`}>1</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Nisl nunc mi ipsum faucibus. Amet aliquam id diam maecenas ultricies mi ?</p>
                    </div>
                    <div className={`${styles.quiz_option}`}>
                        <ul>
                            <li>
                                <p>A. Lorem ipsum dolor sit amet</p>
                            </li>
                            <li>
                                <p>B. Lorem ipsum dolor sit amet</p>
                            </li>
                            <li>
                                <p>C. Lorem ipsum dolor sit amet</p>
                            </li>
                            <li>
                                <p>D. Lorem ipsum dolor sit amet</p>
                            </li>
                            <li>
                                <p>E. Lorem ipsum dolor sit amet</p>
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.quiz_actions}`}>
                        <Button>Prev</Button>
                        <Button>Next</Button>
                    </div>
                </div>
                <div className={`${styles.quiz_navigation}`}>
                    <ul>
                        <li className={`${styles.active}`}>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                    </ul>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default QuizPage