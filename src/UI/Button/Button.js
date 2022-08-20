import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${styles.button}`} onClick={props.clickHandler}>
      {props.children}
    </button>
  );
};

export default Button;
