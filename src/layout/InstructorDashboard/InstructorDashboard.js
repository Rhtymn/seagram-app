import React from 'react';
import styles from './InstructorDashboard.module.css';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';

const InstructorDashboard = () => {
    const Content = <ContentContainer>
        <div className={`${styles.courseProgram_container}`}>
            <h1>Course Program</h1>
            <ul className={`${styles.courseProgram_table}`}>
                <li className={`${styles.header}`}>
                    <div className={`${styles.column}`}>Name</div>
                    <div className={`${styles.column}`}>Description</div>
                    <div className={`${styles.column}`}>Date</div>
                    <div className={`${styles.column}`}>Status</div>
                    <div className={`${styles.column}`}></div>
                </li>
                <li className={`${styles.body}`}>
                    <div className={`${styles.column}`}>Course A</div>
                    <div className={`${styles.column}`}>Ini course A</div>
                    <div className={`${styles.column}`}>2022/08/14</div>
                    <div className={`${styles.column}`}>Pending</div>
                    <div className={`${styles.column}`}>A</div>
                </li>
                <li className={`${styles.body}`}>
                    <div className={`${styles.column}`}>Course A</div>
                    <div className={`${styles.column}`}>Ini course A</div>
                    <div className={`${styles.column}`}>2022/08/14</div>
                    <div className={`${styles.column}`}>Pending</div>
                    <div className={`${styles.column}`}>A</div>
                </li>
                <li className={`${styles.body}`}>
                    <div className={`${styles.column}`}>Course A</div>
                    <div className={`${styles.column}`}>Ini course A</div>
                    <div className={`${styles.column}`}>2022/08/14</div>
                    <div className={`${styles.column}`}>Pending</div>
                    <div className={`${styles.column}`}>A</div>
                </li>
            </ul>
        </div>
    </ContentContainer>

    return (
        <>
            {Content}
        </>
    )
}

export default InstructorDashboard