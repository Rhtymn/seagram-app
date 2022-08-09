import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './StudentPage.module.css';

const StudentPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebarHandler = () => {
    setShowSidebar((prev)=>{
      return !prev;
    })
  }

  return (
    <div className={`${styles.student_page}`}>
        <Navbar onToggleSidebar={toggleSidebarHandler}/>
        <div className='d-flex'>
          <Sidebar isShowSidebar={showSidebar}/>
        </div>
    </div>
  )
}

export default StudentPage;