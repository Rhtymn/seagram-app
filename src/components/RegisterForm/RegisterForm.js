import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './RegisterForm.module.css';
import FormContainer from '../../UI/FormContainer/FormContainer';
import FormButton from '../../UI/FormButton/FormButton';
import Input from '../Input/Input';

const RegisterForm = () => {
    const [fullNameInputValue, setfullNameInputValue] = useState('');
    const [birthDateInputValue, setBirhtDateInputValue] = useState('');
    const [isColouredBirthLabel, setIsColouredBirthLabel] = useState(false);
    const [emailInputValue, setEmailInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');
    const [roleInputValue, setRoleInputValue] = useState('student');
    const birthLabelClasses = isColouredBirthLabel ? `${styles.colouredLabel}` : ``;
    
    const birthdateInputBlurHandler = () => {
        if (birthDateInputValue.trim() !== '') return;
        setIsColouredBirthLabel(false);
    }
    const registerHandler = (e) => {
        e.preventDefault();
    }

    return <FormContainer>
        <h1>Seagram</h1>
        <p>Hey, Enter your details to get sign up</p>
        <form className='mb-5 mt-4' onSubmit={registerHandler}>
            <Input label="Full Name" type="text" value={fullNameInputValue} onInputChange={setfullNameInputValue}/>
            <div className={`${styles.birthdateInput_container}`}>
                <label className={birthLabelClasses}>Birthdate:</label>
                <input type="date" value={birthDateInputValue} 
                    onChange={(e)=>setBirhtDateInputValue(e.target.value)}
                    onFocus={()=>setIsColouredBirthLabel(true)}
                    onBlur={birthdateInputBlurHandler}>
                </input>
            </div>
            <div className={`${styles.roleInput_container}`}>
                <select value={roleInputValue} onChange={(e)=>setRoleInputValue(e.target.value)}>
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                </select>
                <span>
                    <i className="fa-solid fa-caret-down"></i>
                </span>
            </div>
            <Input label="Email" type="email" value={emailInputValue} onInputChange={setEmailInputValue}/>
            <Input label="Password" type="password" value={passwordInputValue} onInputChange={setPasswordInputValue}/>
            <FormButton>Sign Up</FormButton>
        </form>
        <p>Have an account? <Link to="/login">Login</Link></p>
    </FormContainer>
}
export default RegisterForm