import React from "react";
import styles from "./VerifiedPage.module.css";
import ilustration from "../../assets/svg/88.svg";
import { useNavigate } from "react-router-dom";

const VerifiedPage = () => {
  const navigate = useNavigate();
  const goToLoginPageHandler = () => {
    navigate("/login");
  };
  return (
    <div className={`${styles.verifiedPage}`}>
      <div className={`${styles.content}`}>
        <img src={ilustration}></img>
        <div>
          <h1>Email Verified!</h1>
          <p>
            Continue to{" "}
            <a href="#" onClick={goToLoginPageHandler}>
              login page
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifiedPage;
