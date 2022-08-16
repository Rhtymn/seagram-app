import React from 'react';
import styles from './Options.module.css';


const OptionItem = (props) => {
  const onOptionItemClick = () => {
    props.onOptionClick(props.children);
  }

  return (
    <div className={`${styles.option}`} onClick={onOptionItemClick}>{props.children}</div>
  )
}

export default OptionItem