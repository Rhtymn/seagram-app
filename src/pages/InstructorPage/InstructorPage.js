import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import styles from './InstructorPage.module.css';

const InstructorPage = () => {
  return (
    <div className={`${styles.instructor_page}`}>
        <Navbar/>
        <div className={`${styles.body_container}`}>
        <Sidebar/>
        </div>
    </div>
  )
}

export default InstructorPage