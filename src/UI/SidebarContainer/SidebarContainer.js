import React from 'react';
import styles from './SidebarContainer.module.css';

const SidebarContainer = (props) => {
    const sidebarClasses = props.show? `${styles.sidebar} ${styles.show_sidebar}` : `${styles.sidebar}`;
    return (
        <div className={sidebarClasses}>
            <h1 className="d-none d-md-block">Seagram</h1>
            <ul className={`${styles.sidebar_nav_container}`}>
                {props.children}
            </ul>
        </div>
    )
}

export default SidebarContainer