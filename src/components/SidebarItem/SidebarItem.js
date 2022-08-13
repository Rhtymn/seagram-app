import React from 'react';
import {Link} from 'react-router-dom'
import styles from './SidebarItem.module.css';
import { useDispatch } from 'react-redux/es/exports';
import { uiStudentActions } from '../../store/ui-student-slice';

const SidebarItem = (props) => {
  const dispatch = useDispatch();

  const sideNavClickHandler = () => {
    dispatch(uiStudentActions.toggleSidebar());
    dispatch(uiStudentActions.toggleActiveSideNav(props.label.toLowerCase()));
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