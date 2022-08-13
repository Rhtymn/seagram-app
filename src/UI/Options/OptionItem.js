import React from 'react';
import styles from './Options.module.css';


const OptionItem = (props) => {
  const onOptionClick = () => {
    props.onOptionClick(props.children);
  }
  return (
    <div className={`${styles.option}`} onClick={onOptionClick}>{props.children}</div>
  )
}

export default OptionItem