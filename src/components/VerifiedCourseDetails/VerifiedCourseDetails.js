import React from 'react';
import styles from './VerifiedCourseDetails.module.css';
import { useSelector } from 'react-redux';

const VerifiedCourseDetails = () => {
    const courseInfo = useSelector((state)=>state.ui.activeCourseDetails);
    return (
    <>
        <div className={`${styles.course_information}`}>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>{courseInfo.courseName}</h1>
                <span>{courseInfo.instructor}</span>
            </div>
            <div className={`${styles.divider}`}></div>
            <div className={`${styles.description}`}>
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Nibh nisl condimentum id venenatis a condimentum vitae 
                    sapien pellentesque. Vitae ultricies leo integer malesuada.
                </p>
            </div>
            <button>Enroll</button>
        </div>
    </>
    )
}

export default VerifiedCourseDetails