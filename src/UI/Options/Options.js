import React from 'react'
import styles from './Options.module.css'

const Options = (props) => {
  const optionClasses = props.active ? `${styles.option_container} ${styles.active}` : `${styles.option_container}`;
  return (
    <div className={optionClasses}>
        {props.children}
    </div>
  )
}

export default Options