import { useState } from 'react';
import { Link } from "react-router-dom";
import Input from '../Input/Input';
import FormContainer from '../../UI/FormContainer/FormContainer';
import FormButton from '../../UI/FormButton/FormButton';

const LoginForm = () => {
    const [emailInputValue, setEmailInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');

    const loginHandler = (e) => {
        e.preventDefault();
    }

    return <FormContainer>
        <h1>Seagram</h1>
        <p>Hey, Enter your details to get sign in to your account</p>
        <form className='mb-5 mt-4' onSubmit={loginHandler}>
            <Input label="Email" type="email" value={emailInputValue} onInputChange={setEmailInputValue}/>
            <Input label="Password" type="password" value={passwordInputValue} onInputChange={setPasswordInputValue}/>
            <FormButton>Sign In</FormButton>
        </form>
        <p>Don't have account? <Link to="/register">Sign Up</Link></p>
    </FormContainer>
}

export default LoginForm;