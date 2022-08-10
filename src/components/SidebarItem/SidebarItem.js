import React from 'react';
import {Link} from 'react-router-dom'
import styles from './SidebarItem.module.css';
import { useDispatch } from 'react-redux/es/exports';
import { uiActions } from '../../store/ui-slice';

const SidebarItem = (props) => {
  const dispatch = useDispatch();

  const sideNavClickHandler = () => {
    dispatch(uiActions.toggleSidebar());
  }
  
  return (
    <Link to={props.to} onClick={sideNavClickHandler}>
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