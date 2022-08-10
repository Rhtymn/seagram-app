import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './StudentPage.module.css';

const StudentPage = () => {
  return (
    <div className={`${styles.student_page}`}>
        <Navbar/>
        <div className={`${styles.body_container}`}>
          <Sidebar/>
          <Outlet/>
        </div>
    </div>
  )
}

export default StudentPage;