import React from 'react';
import {Link} from 'react-router-dom'
import styles from './SidebarItem.module.css';

const SidebarItem = (props) => {
  const sideNavClickHandler = () => {
    props.onClickSidebarItem(props.label.toLowerCase());
  }
  
  const liClasses = props.active ? `${styles.active}` : ``;

  return (
    <Link to={props.to} onClick={sideNavClickHandler}>
      <li className={liClasses}>
            <div className={`${styles.icon}`}>
                {props.children}
            </div>
            <span>{props.label}</span>
      </li>
    </Link>
  )
}

export default SidebarItem;