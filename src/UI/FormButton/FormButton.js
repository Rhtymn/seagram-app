import styles from './FormButton.module.css';
const FormButton = (props) => {
    return <button className={styles.form_button}>{props.children}</button>
}

export default FormButton;