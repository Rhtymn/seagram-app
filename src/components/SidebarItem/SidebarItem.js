import React from 'react';
import {Link} from 'react-router-dom'
import styles from './SidebarItem.module.css';

const SidebarItem = (props) => {
  return (
    <Link to={props.to} onClick={props.onChangeSidenav}>
      <li>
            <div className={`${styles.icon}`}>
                {props.children}
            </div>
            <span>{props.label}</span>
      </li>
    </Link>
  )
}

export default SidebarItem;