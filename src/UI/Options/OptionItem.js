import React from 'react';
import styles from './Options.module.css';

const OptionItem = (props) => {
  return (
    <div className={`${styles.option}`}>{props.children}</div>
  )
}

export default OptionItem