import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./RegisterForm.module.css";
import FormContainer from "../../UI/FormContainer/FormContainer";
import FormButton from "../../UI/FormButton/FormButton";
import Input from "../Input/Input";

const RegisterForm = () => {
  const [fullNameInputValue, setfullNameInputValue] = useState("");
  const [username, setUsername] = useState("");
  const [birthDateInputValue, setBirhtDateInputValue] = useState("");
  const [isColouredBirthLabel, setIsColouredBirthLabel] = useState(false);
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [roleInputValue, setRoleInputValue] = useState("student");
  const birthLabelClasses = isColouredBirthLabel
    ? `${styles.colouredLabel}`
    : ``;
  const [notification, setNotification] = useState({
    type: "success",
    isVisible: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const birthdateInputBlurHandler = () => {
    if (birthDateInputValue.trim() !== "") return;
    setIsColouredBirthLabel(false);
  };

  const resetFieldInput = () => {
    setfullNameInputValue("");
    setUsername("");
    setBirhtDateInputValue("");
    setEmailInputValue("");
    setPasswordInputValue("");
    setRoleInputValue("student");
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setNotification({});
      const headers = new Headers();
      headers.append("content-type", "application/json");
      const body = {
        name: `${fullNameInputValue}`,
        dob: `${birthDateInputValue}`,
        role: `${roleInputValue}`,
        instructorIsVerified: "false",
        username: `${username}`,
        email: `${emailInputValue}`,
        emailVerified: false,
        password: `${passwordInputValue}`,
      };
      const reqOptions = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      };
      const response = await fetch(
        "https://seagram-api.herokuapp.com/api/accounts",
        reqOptions
      );
      if (!response.ok) throw new Error("Something went wrong.");

      setNotification({
        type: "success",
        isVisible: true,
        message: "Please Check your email to verify your account",
      });
      setIsLoading(false);
      resetFieldInput();
    } catch (error) {
      setNotification({ isVisible: true, message: `${error.message}` });
    }
  };

  return (
    <FormContainer notification={notification}>
      <h1>Seagram</h1>
      <p>Hey, Enter your details to get sign up</p>
      <form className="mb-5 mt-4" onSubmit={registerHandler}>
        <Input
          label="Full Name"
          type="text"
          value={fullNameInputValue}
          onInputChange={setfullNameInputValue}
        />
        <Input
          label="Username"
          type="text"
          value={username}
          onInputChange={setUsername}
        />
        <div className={`${styles.birthdateInput_container}`}>
          <label className={birthLabelClasses}>Birthdate:</label>
          <input
            type="date"
            value={birthDateInputValue}
            onChange={(e) => setBirhtDateInputValue(e.target.value)}
            onFocus={() => setIsColouredBirthLabel(true)}
            onBlur={birthdateInputBlurHandler}
          ></input>
        </div>
        <div className={`${styles.roleInput_container}`}>
          <select
            value={roleInputValue}
            onChange={(e) => setRoleInputValue(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
          <span>
            <i className="fa-solid fa-caret-down"></i>
          </span>
        </div>
        <Input
          label="Email"
          type="email"
          value={emailInputValue}
          onInputChange={setEmailInputValue}
        />
        <Input
          label="Password"
          type="password"
          value={passwordInputValue}
          onInputChange={setPasswordInputValue}
        />
        <FormButton isLoading={isLoading}>Sign Up</FormButton>
      </form>
      <p>
        Have an account? <Link to="/login">Login</Link>
      </p>
    </FormContainer>
  );
};
export default RegisterForm;
