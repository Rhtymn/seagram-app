import React from 'react';
import styles from './SidebarContainer.module.css';

const SidebarContainer = (props) => {
    const sidebarClasses = props.isShowSidebar ? `${styles.sidebar} ${styles.show_sidebar}` : `${styles.sidebar}`;
    return (
        <div className={sidebarClasses}>
            <ul className={`${styles.sidebar_nav_container}`}>
                {props.children}
            </ul>
        </div>
    )
}

export default SidebarContainer