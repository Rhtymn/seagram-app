import { useState } from "react";
import Input from "../Input/Input";
import FormContainer from "../../UI/FormContainer/FormContainer";
import FormButton from "../../UI/FormButton/FormButton";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user-slice";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    type: "alert",
    isVisible: false,
    message: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      setNotification({});
      setIsLoading(true);
      const headers = new Headers();
      headers.append("content-type", "application/json");
      const reqOptions = {
        method: "POST",
        headers: headers,
        redirect: "follow",
        body: JSON.stringify({
          email: `${emailInputValue}`,
          password: `${passwordInputValue}`,
        }),
      };
      const response = await fetch(
        "https://seagram-api.herokuapp.com/api/accounts/login",
        reqOptions
      );
      if (!response.ok) throw new Error("email-verify-error");
      const baseUserdata = await response.json();

      const userDataResponse = await fetch(
        `https://seagram-api.herokuapp.com/api/accounts/${baseUserdata.userId}?access_token=${baseUserdata.id}`
      );
      const userData = await userDataResponse.json();

      if (userData.role === "instructor" && !userData.instructorIsVerified)
        throw new Error("admin-verify-error");

      dispatch(userActions.setUser({ ...userData }));
      navigate(`/${userData.role}/dashboard`);
      setIsLoading(false);
    } catch (error) {
      switch (error.message) {
        case "email-verify-error":
          setNotification({
            type: "alert",
            isVisible: true,
            message: "Please check email to verify your account.",
          });
          setIsLoading(false);
          break;
        case "admin-verify-error":
          setNotification({
            type: "alert",
            isVisible: true,
            message: "Can't login. Admin hasn't verified your account.",
          });
          setIsLoading(false);
          break;
        default:
          setNotification({
            type: "alert",
            isVisible: true,
            message: "Something went wrong.",
          });
          setIsLoading(false);
      }
    }
  };

  return (
    <FormContainer notification={notification}>
      <h1>Seagram</h1>
      <p>Hey, Enter your details to get sign in to your account</p>
      <form className="mb-5 mt-4" onSubmit={loginHandler}>
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
        <FormButton isLoading={isLoading}>Sign In</FormButton>
      </form>
      <p>
        Don't have account? <Link to="/register">Sign Up</Link>
      </p>
    </FormContainer>
  );
};

export default LoginForm;
