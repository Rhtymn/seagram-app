import styles from "./FormButton.module.css";
const FormButton = (props) => {
  const Spinner = (
    <div class="spinner-border text-dark" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
  return (
    <button className={styles.form_button}>
      {props.isLoading ? Spinner : `${props.children}`}
    </button>
  );
};

export default FormButton;
