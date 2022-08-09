import { useState } from 'react';
import styles from './Input.module.css';
const Input = (props) => {
    const [inputFocus, setInputFocus] = useState(false);
    const labelClasses = inputFocus ? `${styles.label} ${styles.onInputFocus}` : `${styles.label}`;

    const inputBlurHandler = () => {
        if (props.value !== '') return;
        setInputFocus(false);
    }

    const inputChangeHandler = (e) => {
        props.onInputChange(e.target.value);
    }

    return (
    <div className={`${styles.inputContainer} d-flex flex-column`}>
        <label className={labelClasses}>{props.label}</label>
        <input className={styles.input}
            required
            type={props.type} 
            value={props.value}
            onChange={inputChangeHandler}
            onFocus={()=>setInputFocus(true)} 
            onBlur={inputBlurHandler}>
        </input>
    </div>
)}

export default Input;