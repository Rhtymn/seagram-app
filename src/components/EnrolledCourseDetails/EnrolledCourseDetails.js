import React from 'react';
import styles from './EnrolledCourseDetails.module.css';
import { useSelector } from 'react-redux';

const EnrolledCourseDetails = () => {
    const courseInfo = useSelector((state)=>state.uiStudent.activeCourseDetails);
    return (
    <>
        <div className={`${styles.course_information}`}>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>{courseInfo.courseName}</h1>
                <span>{courseInfo.instructor}</span>
            </div>
            <div className={`${styles.status}`}>Enrolled</div>
            <div className={`${styles.divider}`}></div>
            <div className={`${styles.description}`}>
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Nibh nisl condimentum id venenatis a condimentum vitae 
                    sapien pellentesque. Vitae ultricies leo integer malesuada.
                </p>
            </div>
            <div className={`${styles.divider}`}></div>
            <div className={`${styles.lecture}`}>
                <h2>Lecture</h2>
                <ul>
                    <li>Chapter 1</li>
                    <li>Chapter 2</li>
                    <li>Chapter 3</li>
                </ul>
            </div>
            <div className={`${styles.divider}`}></div>
            <div className={`${styles.quiz}`}>
                <h2>Quiz</h2>
                <ul>
                    <li>Quiz 1</li>
                    <li>Quiz 2</li>
                    <li>Quiz 3</li>
                </ul>
            </div>
        </div>
    </>
    )
}

export default EnrolledCourseDetails;