import React from 'react'
import styles from './Sidebar.module.css';

const Sidebar = (props) => {
    const sidebarClasses = props.isShowSidebar ? `${styles.sidebar} ${styles.show_sidebar}` : `${styles.sidebar}`;
    return (
    <div className={sidebarClasses}>
        <ul className={`${styles.sidebar_nav_container}`}>
            <li>
                <div className={`${styles.icon}`}>
                    <i class="fa-solid fa-gauge-high"></i>
                </div>
                <span>Dashboard</span>
            </li>
            <li>
                <div className={`${styles.icon}`}>
                    <i class="fa-solid fa-book-open"></i>
                </div>
                <span>Course</span>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar