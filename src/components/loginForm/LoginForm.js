import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import InputField from "../inputField/InputField";
import "./LoginForm.css";

const LoginForm = () => {
    const [credentialError, toggleCredentialError] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(AuthContext);

    const handleFormSubmit = async (data) => {
        const source = axios.CancelToken.source();

        try {
            toggleCredentialError(false);
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                "username": data.username,
                "password": data.password,
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
        <form className="login-form" onSubmit={handleSubmit(handleFormSubmit)}>
            <h2>Log in bij #WhatToWear.</h2>

            <InputField
                labelText='Gebruikersnaam:'
                inputId='username-input'
                inputName='username'
                placeholder="Gebruikersnaam"
                register={register}
                errors={errors}
                validationRules={{required: "Gebruikersnaam is onmisbaar"}}
            />
            <br/>

            <InputField
                labelText='Wachtwoord'
                inputType='password'
                inputId='password-input'
                inputName='password'
                placeholder="Wachtwoord"
                register={register}
                errors={errors}
                validationRules={{required: "Wachtwoord is onmisbaar!"}}
            />

            {credentialError && <p className="error-text">Wrong credentials</p>}

            <br/>

            <button
                className='roze3'
            >
                Log in
            </button>

            <p>Nog geen account?</p>
            <button className="paars">
                <Link to="/aanmelden" className="signup-link">Aanmelden</Link>
        </button>
        </form>
    );
};

export default LoginForm;