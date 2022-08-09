import React from 'react';
import styles from './SidebarItem.module.css';

const SidebarItem = (props) => {
  return (
    <li>
        <div className={`${styles.icon}`}>
            {props.children}
        </div>
        <span>{props.label}</span>
    </li>
  )
}

export default SidebarItem;