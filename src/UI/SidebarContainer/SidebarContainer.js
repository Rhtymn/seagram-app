import React from 'react';
import styles from './SidebarContainer.module.css';
import {useSelector} from 'react-redux';

const SidebarContainer = (props) => {
    const isShowSidebar = useSelector((state) => state.isShowSidebar);
    const sidebarClasses = isShowSidebar? `${styles.sidebar} ${styles.show_sidebar}` : `${styles.sidebar}`;

    return (
        <div className={sidebarClasses}>
            <ul className={`${styles.sidebar_nav_container}`}>
                {props.children}
            </ul>
        </div>
    )
}

export default SidebarContainer