import React, {useContext, useState} from 'react';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

import InputField from "../inputField/InputField";
import Button from "../button/Button";

import styles from './LoginForm.css';

const LoginForm = () => {
    const [credentialError, toggleCredentialError] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(AuthContext);

    const handleFormSubmit = async (data) => {
        const source = axios.CancelToken.source();

        try {
            toggleCredentialError(false);
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                'username': data.username,
                'password': data.password,
            }, {
                cancelToken: source.token,
            });

            login(result.data);

            return function cleanup() { source.cancel(); }

        } catch (e) {
            console.error(e.response);
            toggleCredentialError(true);
        }
    }

    return (
        <form className={styles['login-form']} onSubmit={handleSubmit(handleFormSubmit)}>
            <h1>Login</h1>

            <InputField
                labelText='Username'
                inputId='username-input'
                inputName='username'
                placeholder="Username"
                register={register}
                errors={errors}
                validationRules={{required: 'Username is required'}}
            />

            <InputField
                labelText='Password'
                inputType='password'
                inputId='password-input'
                inputName='password'
                placeholder="Password"
                register={register}
                errors={errors}
                validationRules={{required: 'Password is required'}}
            />

            {credentialError && <p className={styles['error-text']}>Wrong credentials</p>}

            <Button
                buttonClass='register-button'
            >
                Login
            </Button>

            <p>Don't have an account yet? <Link to='/aanmelden' className={styles['signup-link']}>Sign up</Link></p>
        </form>
    );
};

export default LoginForm;